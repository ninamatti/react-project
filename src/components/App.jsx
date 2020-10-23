import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";

export default function App() {
  const [currentView, setView] = useState("AllPhotos");
  const [photos, setPhotoArray] = useState([""]);
  const [selectedPhoto, setPhoto] = useState("");
  const [fileLoaded, setFileState] = useState(false);

  // define how states change with useEffect?
  useEffect(() => {
    async function fetchData() {
      let tempArray = await listObjects();

      // get every single object and store!
      let store = [];
      for (let i = 2; i < 12; i++) {
        let string = await getSingleObject(tempArray[i].Key);
        store.push(string);
      }
      setPhotoArray(store);
      // setter functions are asyncroneous!
    }
    fetchData();
  }, []);

  useEffect(() => {}, [photos]);

  // define function to get photoinput data
  async function getPicture(file) {
    // save file with saveobject function
    await saveObject(file);
    // get file back as base64
    let base64 = await getSingleObject(file.name);
    // update photo state
    setPhotoArray([...photos, base64]);
  }

  useEffect(() => {
    if (selectedPhoto !== "") {
      setView("SinglePhoto");
    }
  }, [selectedPhoto]);

  return (
    <>
      <Navbar
        setView={setView}
        currentView={currentView}
        photos={photos}
        setPhotoArray={setPhotoArray}
        fileLoaded={fileLoaded}
        setFileState={setFileState}
        getPicture={getPicture}
      />
      {currentView === "AllPhotos" ? (
        <AllPhotos photos={photos} setPhoto={setPhoto} />
      ) : (
        <SinglePhoto photos={photos} selectedPhoto={selectedPhoto} />
      )}
    </>
  );
}

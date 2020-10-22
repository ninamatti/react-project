import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";

export default function App() {
  const [currentView, setView] = useState("AllPhotos");
  const [photos, setPhotoArray] = useState([""]);
  const [selectedPhoto, setPhoto] = useState(["Photo1"]);
  const [fileLoaded, setFileState] = useState(false);

  // define how states change with useEffect?
  useEffect(() => {
    async function fetchData() {
      let tempArray = await listObjects();
      console.log(tempArray);

      // get every single object and store!
      let store = [];
      for (let i = 0; i < 10; i++) {
        let string = await getSingleObject(tempArray[i].Key);
        console.log(string);
        store.push(string);
      }
      console.log(store);
      setPhotoArray(store);
      // setter functions are asyncroneous!
      console.log("photos initial array: ", photos);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Photos were updated: ", photos);
  }, [photos]);
  // console.log('PHotos has been updated");
  // for photos

  /* console.log(photos); */
  // define function to get photoinput data
  async function getPicture(file) {
    // save file with saveobject function
    console.log(photos.length);
    await saveObject(file);
    // get file back as base64
    console.log(file.name);
    let base64 = await getSingleObject(file.name);
    console.log(base64);
    // update photo state
    setPhotoArray([...photos, base64]);
    console.log(photos.length);
    // array64 = photoSender();
  }

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
      {/* {currentView === "AllPhotos" ? <AllPhotos photos={photos}/> : <SinglePhoto />} */}
      <AllPhotos photos={photos} />
    </>
  );
}

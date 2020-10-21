import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";

export default function App() {
  const [currentView, setView] = useState("AllPhotos");
  let [photos, setPhotoArray] = useState([""]);
  const [selectedPhoto, setPhoto] = useState(["Photo1"]);

  // define how states change with useEffect?
  useEffect(() => {
    async function fetchData() {
      photos = await listObjects();
      console.log(photos);
    }
    fetchData();
  }, []);

  /* console.log(photos); */
  // define function to get photoinput data
  function getPicture(e) {
    // let imageInput = document.getElementById("imageInput");
    // console.log(imageInput.value);
    // let image = fetch(imageInput.value)
    //       .then((res) => {
    //         console.log(res);
    //       })
    e.persist();
    e.preventDefault();
    console.log(e.target.files);
    //console.log(React.createRef().current.files[0]);
    e.preventDefault();
  }

  return (
    <>
      <Navbar setView={setView} currentView={currentView} />
      {currentView === "AllPhotos" ? <AllPhotos /> : <SinglePhoto />}
    </>
  );
}

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

  return (
    <>
      <div className="app">
        <h1>Hello World!</h1>
      </div>
      <Navbar />
      {currentView === "AllPhotos" ? <AllPhotos /> : <SinglePhoto />}
      {/* {currentView !== "AllPhotos" && <SinglePhoto/>} */}
    </>
  );
}

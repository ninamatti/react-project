import React, { useEffect } from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload.jsx";
import { saveObject } from "../utils/index.js";

export default function Navbar({
  setView,
  currentView,
  photos,
  setPhotoArray,
  fileLoaded,
  setFileState,
  getPicture
}) {
  useEffect(() => {}, []);

  return (
    <>
      <div
        className="navbar"
        id="text"
        onClick={function() {
          setView("AllPhotos");
          console.log(currentView);
        }}
      >
        {" "}
        Click to view all Photos!{" "}
      </div>
      <Upload
        callback={file => {
          saveObject(file);
        }}
        photos={photos}
        setPhotoArray={setPhotoArray}
        fileLoaded={fileLoaded}
        setFileState={setFileState}
        getPicture={getPicture}
      />
    </>
  );
}

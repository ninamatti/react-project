import React, { useEffect, useState } from "react";
import _ from "lodash";
import "../styles/styles.css";

export default function AllPhotos({ photos }) {
  // useEffect(() => {
  //   console.log(photos);

  //   // let body = document.getElementsByClassName("photoBody");
  //   // for(let element of photos) {
  //   //   let pic = document.createElement("img");
  //   //   body.appendChild("pic");
  //   //   pic.setAttribute("src", `data:image/png;base64, ${element}`);
  //   // }
  // }, [photos]);

  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("Photos were updated in ALLPhotos: ", photos);
    setUrl("data:image/png;base64," + photos[0]);
    console.log(typeof url);
  }, [photos]);

  return (
    <>
      <div className="photoBody">
        <img className="allImage" src={url} />
      </div>
    </>
  );
}

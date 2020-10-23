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
  const [urlCollection, setCollection] = useState([""]);
  const [pictureBody, setPictureBody] = useState("");

  useEffect(() => {
    let urls = [];
    for (let i = 0; i < 10; i++) {
      urls.push("data:image/png;base64," + photos[i]);
    }
    setCollection(urls);
  }, [photos]);

  useEffect(() => {
    let imgs = [];
    for (let i = 0; i < 10; i++) {
      imgs.push(<img className="image" src={urlCollection[i]} />);
    }
    setPictureBody(imgs);
  }, [urlCollection]);
  return (
    <>
      <div id="photoBody">{pictureBody}</div>
    </>
  );
}

//src={url}

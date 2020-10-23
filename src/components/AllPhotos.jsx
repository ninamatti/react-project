import React, { useEffect, useState } from "react";
import _ from "lodash";
import "../styles/styles.css";

export default function AllPhotos({ photos, setPhoto }) {
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
      imgs.push(
        <div className="imageWrap">
          <img
            className="image"
            src={urlCollection[i]}
            onClick={() => {
              setPhoto(i);
            }}
          />
        </div>
      );
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

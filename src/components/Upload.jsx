import React, { useEffect } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject, listObjects } from "../utils";

export default function Upload({
  photos,
  setPhotoArray,
  fileLoaded,
  setFileState,
  getPicture
}) {
  const inputRef = React.useRef(null);

  return (
    <div id="uploadWrap">
      <div className="file-upload">
        <form type="submit" value="Submit">
          <label>Select a file: </label>
          <input type="file" id="myfile" name="myfile" ref={inputRef} />
          <br></br>
          <button
            type="submit"
            onClick={async e => {
              e.preventDefault();
              getPicture(inputRef.current.files[0]);
            }}
          >
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
}

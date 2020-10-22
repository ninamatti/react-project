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
    <>
      <div className="file-upload" />
      {/* <input type="text" className="input" id="imageInput"/> */}

      <form type="submit" value="Submit">
        <label>Select a file:</label>
        <input type="file" id="myfile" name="myfile" ref={inputRef} />

        <button
          type="submit"
          onClick={async e => {
            e.preventDefault();
            getPicture(inputRef.current.files[0]);

            //let testSave = await saveObject(inputRef.current.files[0]);
            //setFileState(true);
            //
          }}
        >
          Upload Imageeeee
        </button>
      </form>
    </>
  );
}

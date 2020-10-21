import React, { useEffect } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils";

export default function Upload() {
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
            console.log(inputRef.current.files[0]);
            console.log(inputRef.current.files);
            saveObject(inputRef.current.files[0]);
            //console.log(newPhoto);
          }}
        >
          Upload Imageeeee
        </button>
      </form>
    </>
  );
}

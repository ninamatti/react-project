import React, { useEffect } from "react";

export default function SinglePhoto({ photos, selectedPhoto }) {
  return (
    <>
      <div>
        <img
          className="single"
          src={"data:image/png;base64," + photos[selectedPhoto]}
        />
      </div>
    </>
  );
}

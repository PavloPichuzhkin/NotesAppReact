import React from "react";

let AddButtonsForArchive = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.deleteArchivedNote(props.id);
        }}
      >
        Delete
      </button>

      <button
        onClick={() => {
          props.unZipNote(props.id);
          props.deleteArchivedNote(props.id);
        }}
      >
        UnZip
      </button>
    </div>
  );
};

export default AddButtonsForArchive;

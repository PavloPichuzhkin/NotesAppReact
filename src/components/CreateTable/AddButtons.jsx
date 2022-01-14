import React from "react";

let AddButtons = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        Delete
      </button>

      <button
        onClick={() => {
          props.editNote(props.id);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          props.addToArchive(props.id);
          props.deleteNote(props.id);
        }}
      >
        Archive
      </button>
    </div>
  );
};

export default AddButtons;

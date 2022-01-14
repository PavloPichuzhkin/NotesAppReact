import React, { useEffect, useState } from "react";

const InputData = (props) => {
  let [category, setCategory] = useState("Task");
  let [content, setContent] = useState("");

  useEffect(() => {
    props.sendContent(category, content);
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.addNewNote(category, content);
  }

  function handleChangeSelect(event) {
    event.preventDefault();
    setCategory(event.target.value);
  }
  function handleChangeInput(event) {
    event.preventDefault();
    setContent(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <select value={category} onChange={handleChangeSelect}>
            <option value="Task" className="s1">
              Task
            </option>
            <option value="Idea" className="s2">
              Idea
            </option>
            <option value="Random Thought" className="s2">
              Random Thought
            </option>
          </select>
        </label>
        <label>
          Content:
          <input
            type="text"
            onChange={handleChangeInput}
            placeholder="Enter your Content"
          />
        </label>
        {/* <input type="submit" value="Create Note" /> */}
        <button onClick={() => handleSubmit}>Create Note</button>
      </form>
    </div>
  );
};

export default InputData;

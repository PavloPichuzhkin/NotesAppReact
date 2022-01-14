import { connect } from "react-redux";
import {
  addNewNoteActionCreator,
  getContentEditNoteActionCreator,
} from "../../redux/notes-reduser";
import InputData from "./InputData";

let mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (category, content) => {
      let action = addNewNoteActionCreator(category, content);
      dispatch(action);
    },
    sendContent: (category, content) => {
      let action = getContentEditNoteActionCreator(category, content);
      dispatch(action);
    },
  };
};

const InputDataContainer = connect(null, mapDispatchToProps)(InputData);

export default InputDataContainer;

import {
  addToArchiveClickActionCreator,
  deleteNoteClickActionCreator,
  editNoteActionCreator,
} from "../../redux/notes-reduser";
import { connect } from "react-redux";
import TableHOC from "./TableHOC";
import AddButtons from "./AddButtons";
import { CellTD } from "./Cell";

let mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (deleteNoteID) => {
      let action = deleteNoteClickActionCreator(deleteNoteID);
      dispatch(action);
    },
    addToArchive: (archiveNoteID) => {
      let action = addToArchiveClickActionCreator(archiveNoteID);
      dispatch(action);
    },
    editNote: (editNoteID) => {
      let action = editNoteActionCreator(editNoteID);
      dispatch(action);
    },
  };
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableHOC(CellTD, AddButtons));

export default TableContainer;

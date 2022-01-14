import { connect } from "react-redux";
import { CellTD } from "../CreateTable/Cell";
import TableHOC from "../CreateTable/TableHOC";
import AddButtonsForArchive from "../CreateTable/AddButtonsForArchive";
import {
  deleteArchivedNoteClickActionCreator,
  unZipNoteClickActionCreator,
} from "../../redux/notes-reduser";

let mapStateToProps = (state) => {
  return {
    notes: state.notes.archive,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteArchivedNote: (archivedNoteID) => {
      let action = deleteArchivedNoteClickActionCreator(archivedNoteID);
      dispatch(action);
    },
    unZipNote: (archivedNoteID) => {
      let action = unZipNoteClickActionCreator(archivedNoteID);
      dispatch(action);
    },
  };
};

const ArchiveTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableHOC(CellTD, AddButtonsForArchive));

export default ArchiveTableContainer;

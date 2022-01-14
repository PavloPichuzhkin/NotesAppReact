import { connect } from "react-redux";
import TableHOC from "./TableHOC";
import { CellTH } from "./Cell";

let mapStateToProps = (state) => {
  return {
    notes: state.tableHeaders.tableHeaders,
  };
};

const TableHeadersContainer = connect(
  mapStateToProps,
  null
)(TableHOC(CellTH, null));

export default TableHeadersContainer;

import { connect } from "react-redux";

import { CellTH } from "../CreateTable/Cell";
import TableHOC from "../CreateTable/TableHOC";

let mapStateToProps = (state) => {
  return {
    notes: state.summaryHeader.summaryHeader,
  };
};

const SummaryTableHaedersContainer = connect(
  mapStateToProps,
  null
)(TableHOC(CellTH, null));

export default SummaryTableHaedersContainer;

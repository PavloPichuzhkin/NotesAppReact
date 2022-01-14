import { combineReducers, createStore } from "redux";
import notesReducer from "./notes-reduser";
import summaryTableReducer from "./summary-table-reduser";
import tableHeadersReducer from "./table-headers-reduser";

let redusers = combineReducers({
  notes: notesReducer,
  tableHeaders: tableHeadersReducer,
  summaryHeader: summaryTableReducer,
  summary: summaryTableReducer,
});

let store = createStore(redusers);
window.store = store;
export default store;

import "./App.css";
import TableContainer from "./components/CreateTable/TableContainer";
import TableHeadersContainer from "./components/CreateTable/TableHeadersContainer";
import SummaryTableHaedersContainer from "./components/SummaryTable/SummaryTableHaedersContainer";
import SummaryTableContainer from "./components/SummaryTable/SummaryTableContainer";
import ArchiveTableContainer from "./components/ArchiveTabte/ArchiveTableContainer";
import InputDataContainer from "./components/InputData/InputDataContainer";

function App(props) {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Notes List</h1>
      </header>
      <div>
        <InputDataContainer />
      </div>
      <div className="Table">
        <TableHeadersContainer />
        <TableContainer />
        <h2>Summary table</h2>
        <SummaryTableHaedersContainer />
        <SummaryTableContainer />
        <h2>Archive</h2>
        <TableHeadersContainer />
        <ArchiveTableContainer />
      </div>
    </div>
  );
}

export default App;

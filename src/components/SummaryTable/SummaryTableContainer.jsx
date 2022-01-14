import { connect } from "react-redux";

import { CellTD } from "../CreateTable/Cell";
import TableHOC from "../CreateTable/TableHOC";

let mapStateToProps = (state) => {
  function calcCategory(notes) {
    console.log(notes);
    let [taskCount, taskActiveCount, taskArchivedCount] = [0, 0, 0];
    let [ideaCount, ideaActiveCount, ideaArchivedCount] = [0, 0, 0];
    let [
      randomThoughtCount,
      randomThoughtActiveCount,
      randomThoughtArchivedCount,
    ] = [0, 0, 0];
    for (let i = 0; i < notes.archive.length; i++) {
      if (notes.archive[i].category === "Task") {
        taskArchivedCount++;
      }
      if (notes.archive[i].category === "Idea") {
        ideaArchivedCount++;
      }
      if (notes.archive[i].category === "Random Thought") {
        randomThoughtArchivedCount++;
      }
    }
    for (let i = 0; i < notes.notes.length; i++) {
      if (notes.notes[i].category === "Task") {
        taskActiveCount++;
      }
      if (notes.notes[i].category === "Idea") {
        ideaActiveCount++;
      }
      if (notes.notes[i].category === "Random Thought") {
        randomThoughtActiveCount++;
      }
    }
    taskCount = taskActiveCount + taskArchivedCount;
    ideaCount = ideaActiveCount + ideaArchivedCount;
    randomThoughtCount = randomThoughtActiveCount + randomThoughtArchivedCount;

    return {
      summary: [
        {
          id: 1,
          category: "Task",
          total: taskCount,
          active: taskActiveCount,
          archived: taskArchivedCount,
        },
        {
          id: 2,
          category: "Idea",
          total: ideaCount,
          active: ideaActiveCount,
          archived: ideaArchivedCount,
        },
        {
          id: 3,
          category: "Random Thought",
          total: randomThoughtCount,
          active: randomThoughtActiveCount,
          archived: randomThoughtArchivedCount,
        },
      ],
    };
  }
  // console.log(state);
  // console.log(calcCategory(state.notes));
  return {
    // notes: state.summary.summary,
    notes: calcCategory(state.notes).summary,
  };
};

const SummaryTableContainer = connect(
  mapStateToProps,
  null
)(TableHOC(CellTD, null));

export default SummaryTableContainer;

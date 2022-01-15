import { connect } from "react-redux";
import { CellTD } from "../CreateTable/Cell";
import TableHOC from "../CreateTable/TableHOC";

let mapStateToProps = (state) => {
  let counter = 1;
  function getCategoriesCount(notes) {
    let categories = [],
      categoriesCount = {};
    for (let i = 0; i < notes.length; i++) {
      categories.push(notes[i].category);
    }
    categories.forEach((item) => {
      categoriesCount[item] = (categoriesCount[item] || 0) + 1;
    });
    return categoriesCount;
  }

  function uniqueCategories(notes) {
    let categories = [];
    for (let key in notes) {
      if (notes.hasOwnProperty(key)) {
        for (let i = 0; i < notes[key].length; i++) {
          if (notes[key][i].hasOwnProperty("category")) {
            categories.push(notes[key][i].category);
          }
        }
      }
    }
    categories = [...new Set(categories)];
    return categories;
  }

  function categoriesCalc() {
    let categories = uniqueCategories(state.notes);
    let active = getCategoriesCount(state.notes.notes);
    let archived = getCategoriesCount(state.notes.archive);
    let summary = categories.map((item) => {
      return {
        id: counter++,
        category: item,
        total:
          (!active[item] ? 0 : active[item]) +
          (!archived[item] ? 0 : archived[item]),
        active: !active[item] ? 0 : active[item],
        archived: !archived[item] ? 0 : archived[item],
      };
    });
    return { summary };
  }  
  return {
    notes: categoriesCalc().summary,
  };
};

const SummaryTableContainer = connect(
  mapStateToProps,
  null
)(TableHOC(CellTD, null));

export default SummaryTableContainer;

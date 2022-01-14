let initiolState = {
  summaryHeader: [
    {
      category: "Category",
      total: "Total",
      active: "Active",
      archived: "Archived",
    },
  ],
  summary: [
    {
      id: 1,
      category: "Task",
      total: 0,
      active: 0,
      archived: 0,
    },
    {
      id: 2,
      category: "Idea",
      total: 0,
      active: 0,
      archived: 0,
    },
    {
      id: 3,
      category: "Random Thought",
      total: 0,
      active: 0,
      archived: 0,
    },
  ],
};

const summaryTableReducer = (state = initiolState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default summaryTableReducer;

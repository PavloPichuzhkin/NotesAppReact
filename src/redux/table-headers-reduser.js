let initiolState = {
  tableHeaders: [
    {
      created: "Created",
      category: "Category",
      content: "Content",
      dates: "Dates",
      actions: "Actions",
    },
  ],
};

const tableHeadersReducer = (state = initiolState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tableHeadersReducer;

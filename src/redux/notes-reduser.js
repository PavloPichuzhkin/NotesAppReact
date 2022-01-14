import { addDate } from "../utils/parseDates";

const ADD_TO_ARCHIVE = "ADD_TO_ARCHIVE";
const DELETE_NOTE = "DELETE_NOTE";
const DELETE_ARCHIVED_NOTE = "DELETE_ARCHIVED_NOTE";
const UNZIP_ARCHIVED_NOTE = "UNZIP_ARCHIVED_NOTE";
const ADD_NEW_NOTE = "ADD_NEW_NOTE";
const CONTENT_EDIT_NOTE = "CONTENT_EDIT_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

let initiolState = {
  notes: [
    {
      id: 1,
      created: "13.10.2021",
      category: "Task",
      content: "Buy tomatoes, bread 30.12.2021 and 31/12/2021",
    },

    {
      id: 2,
      created: "13.10.2021",
      category: "Idea",
      content: "Travel to Egypt 05.01.2022",
      dates: "30.10.2021",
    },
    {
      id: 3,
      created: "13.10.2021",
      category: "Random Thought",
      content: "To find new interesting film 14/01/2022",
      dates: "",
    },
    {
      id: 4,
      created: "13.10.2021",
      category: "Task",
      content: "change tyres 15.10.2021",
      dates: "",
    },
    {
      id: 5,
      created: "13.10.2021",
      category: "Idea",
      content: "maybe some sleep",
      dates: " ",
    },
  ],
};
initiolState = {
  notes: addDate(initiolState.notes),
  archive: [],
  counter: 5,
  category: "",
  content: "",
};
const notesReducer = (state = initiolState, action) => {
  switch (action.type) {
    case DELETE_NOTE: {
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.noteID)],
      };
    }
    case ADD_TO_ARCHIVE: {
      return {
        ...state,
        archive: [
          ...state.archive,
          ...state.notes.filter((note) => note.id === action.archiveNoteID),
        ],
      };
    }
    case DELETE_ARCHIVED_NOTE: {
      return {
        ...state,
        archive: [
          ...state.archive.filter((note) => note.id !== action.archivedNoteID),
        ],
      };
    }
    case UNZIP_ARCHIVED_NOTE: {
      return {
        ...state,
        notes: [
          ...state.notes,
          ...state.archive.filter((note) => note.id === action.archivedNoteID),
        ],
      };
    }
    case ADD_NEW_NOTE: {
      let newNote = [
        {
          id: state.counter + 1,
          created: new Date().toLocaleDateString(),
          category: action.category,
          content: action.content,
          dates: "",
        },
      ];
      return {
        ...state,
        notes: [...state.notes, ...addDate(newNote)],
        counter: state.counter + 1,
      };
    }
    case CONTENT_EDIT_NOTE: {
      return {
        ...state,
        category: action.category,
        content: action.content,
      };
    }
    case EDIT_NOTE: {
      return {
        ...state,
        notes: [
          ...state.notes.map((note) => {
            if (note.id === action.editNoteID) {
              let editedNote = [
                {
                  ...note,
                  category: state.category,
                  content: state.content,
                },
              ];
              editedNote = addDate(editedNote);
              return { ...note, ...editedNote[0] };
            } else return note;
          }),
        ],
      };
    }
    default:
      return state;
  }
};

export const deleteNoteClickActionCreator = (noteID) => {
  return {
    type: DELETE_NOTE,
    noteID,
  };
};
export const addToArchiveClickActionCreator = (archiveNoteID) => {
  return {
    type: ADD_TO_ARCHIVE,
    archiveNoteID: archiveNoteID,
  };
};
export const deleteArchivedNoteClickActionCreator = (archivedNoteID) => {
  return {
    type: DELETE_ARCHIVED_NOTE,
    archivedNoteID,
  };
};
export const unZipNoteClickActionCreator = (archivedNoteID) => {
  return {
    type: UNZIP_ARCHIVED_NOTE,
    archivedNoteID,
  };
};
export const addNewNoteActionCreator = (category, content) => {
  return {
    type: ADD_NEW_NOTE,
    category,
    content,
  };
};
export const getContentEditNoteActionCreator = (category, content) => {
  return {
    type: CONTENT_EDIT_NOTE,
    category,
    content,
  };
};
export const editNoteActionCreator = (editNoteID) => {
  return {
    type: EDIT_NOTE,
    editNoteID,
  };
};

export default notesReducer;

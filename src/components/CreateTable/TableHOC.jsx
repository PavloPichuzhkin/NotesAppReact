import React from "react";

const TableHOC = (Cell, AddButtons) => (props) => {
  // console.log(props);

  let TableRow = props.notes.map((note) => (
    <tr className="table-row" key={`${note.id}+${note.content}`}>
      {Object.keys(note).map(
        (noteKey) =>
          noteKey !== "id" && (
            <Cell cell={note[noteKey]} key={`${noteKey}+${note.id}`} />
          )
      )}
      {AddButtons !== null && (
        <td className="lastTD">
          <AddButtons
            editNote={props.editNote}
            addToArchive={props.addToArchive}
            deleteNote={props.deleteNote}
            deleteArchivedNote={props.deleteArchivedNote}
            unZipNote={props.unZipNote}
            id={note.id}
          />
        </td>
      )}
    </tr>
  ));

  return (
    <table>
      <tbody>{TableRow}</tbody>
    </table>
  );
};

export default TableHOC;

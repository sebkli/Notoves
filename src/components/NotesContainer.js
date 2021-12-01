import React from "react";
import Note from "./Note";

const NotesContainer = ({ notes, setNotes }) => {
  return (
    <div className="Notes-Container">
      {notes.map((note) => (
        <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
      ))}
    </div>
  );
};

export default NotesContainer;

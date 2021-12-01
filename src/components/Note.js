import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Note = ({ note, notes, setNotes }) => {
  const handleDelete = () => {
    setNotes(notes.filter((el) => el.id !== note.id));
  };
  return (
    <div className="Note">
      <h1>{note.title}</h1>
      <h2>{note.body}</h2>
      <p>
        {new Date(note.date).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <FaRegTrashAlt className="delete-btn" size={30} onClick={handleDelete} />
    </div>
  );
};

export default Note;

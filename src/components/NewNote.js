import React from "react";
import uuid from "react-uuid";
import { AiFillFileAdd } from "react-icons/ai";

const NewNote = ({
  noteTitle,
  setNoteTitle,
  setNoteBody,
  noteBody,
  notes,
  setNotes,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        id: uuid(),
        title: noteTitle,
        body: noteBody,
        date: Date.now(),
      },
    ]);
    setNoteBody("");
    setNoteTitle("");
  };
  return (
    <div className="Form-Container">
      <h1>Create new note</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="New-Note-Title"
          type="text"
          id="title"
          placeholder="Note tittle..."
          onChange={(e) => setNoteTitle(e.target.value)}
          value={noteTitle}
          autoFocus
        />
        <label htmlFor="body">Note</label>
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={(e) => setNoteBody(e.target.value)}
          value={noteBody}
        />
        <button className="new-btn" onClick={handleSubmit} disabled={!noteBody}>
          <AiFillFileAdd size={60} /></button>
      </form>
    </div>
  );
};

export default NewNote;

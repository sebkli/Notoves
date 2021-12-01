import { useState, useEffect } from "react";
import NotesContainer from "./components/NotesContainer";
import NewNote from "./components/NewNote";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <div className="Header">
        <SearchBar setSearch={setSearch} />
        <NewNote
          noteTitle={noteTitle}
          setNoteTitle={setNoteTitle}
          noteBody={noteBody}
          setNoteBody={setNoteBody}
          notes={notes}
          setNotes={setNotes}
        />
      </div>
      <div className="Main">
        <NotesContainer
          notes={notes.filter(
            (note) =>
              note.body.toLowerCase().includes(search) ||
              note.title.toLowerCase().includes(search)
          )}
          setNotes={setNotes}
        />
      </div>
    </div>
  );
}

export default App;

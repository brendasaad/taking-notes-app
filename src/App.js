import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import NotesList from "./components/notesList/NotesList";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const storageNotes = localStorage.getItem("taking-notes-app");
    if (storageNotes) {
      setNotes(JSON.parse(storageNotes));
    }
  }, []);

  useEffect(() => {
    const notesJson = JSON.stringify(notes);
    if (notes.length > 0) {
      localStorage.setItem("taking-notes-app", notesJson);
    }
  }, [notes, darkMode]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <SearchBar handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

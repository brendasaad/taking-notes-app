import { nanoid } from "nanoid";
import { useState } from "react";
import Header from "./components/Header/Header";
import NotesList from "./components/notesList/NotesList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Frontend - Teste Prático",
      text: "Este é um teste prático feito em React",
      date: "15/10/2022",
    },
    {
      id: nanoid(),
      title: "Empresa: ASSINO Crédito Imobiliário",
      text: "Empresa líder em inovação da experiência do comprador, incorporador e corretores durante o processo de financiamento imobiliário.",
      date: "15/10/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

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

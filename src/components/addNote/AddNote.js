import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const characterTitleLimit = 20;
  const characterTextLimit = 200;

  const handleChangeTitle = (title) => {
    if (characterTitleLimit - title.target.value.length >= 0) {
      setNoteTitle(title.target.value);
    }
  };

  const handleChangeText = (text) => {
    if (characterTextLimit - text.target.value.length >= 0) {
      setNoteText(text.target.value);
    }
  };

  function handleSaveClick() {
    if (noteTitle.trim().length && noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteTitle("");
      setNoteText("");
    }
  }

  return (
    <div className="note new">
      <textarea
        placeholder="Digite o título da sua nova nota..."
        value={noteTitle}
        onChange={handleChangeTitle}
      />
      <textarea
        rows="8"
        cols="10"
        placeholder="Escreva para adicionar uma nova nota..."
        value={noteText}
        onChange={handleChangeText}
      />
      <div className="note-footer">
        <small>{characterTextLimit - noteText.length} caracteres</small>
        <button className="generic-button" onClick={handleSaveClick}>
          Salvar
        </button>
      </div>
    </div>
  );
};
export default AddNote;

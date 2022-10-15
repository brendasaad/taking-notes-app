import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterTextLimit = 200;

  const handleChangeText = (text) => {
    if (characterTextLimit - text.target.value.length >= 0) {
      setNoteText(text.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
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

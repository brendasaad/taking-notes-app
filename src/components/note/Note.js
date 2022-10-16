import { MdDeleteForever } from "react-icons/md";
import EdiText from "react-editext";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <EdiText
        onSave={() => console.log("Novo título salvo com sucesso!")}
        className="title"
        value={title}
      />
      <span className="text">{text}</span>
      <div className="note-footer">
        <span>Data de conclusão:</span>
        <EdiText
          onSave={() => console.log("Nova data salva com sucesso!")}
          className="date"
          value={date}
        />
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
export default Note;

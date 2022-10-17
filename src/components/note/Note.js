import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import EdiText from "react-editext";
import moment from "moment";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  const [dateFormatter, setDateFormatter] = useState(date);

  function formattedDate(date) {
    const instanceDate = moment(date).format("DD/MM/YYYY");
    setDateFormatter(instanceDate);
  }

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
          onSave={(e) => formattedDate(e)}
          className="date"
          value={dateFormatter}
          type="date"
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

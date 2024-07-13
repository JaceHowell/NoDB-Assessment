import { useState } from "react";

const NoteCreate = ({ createNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeBodyHandler = (e) => {
    setBody(e.target.value);
  };

  const submitHandler = () => {
    const data = {
      noteName: title,
      noteBody: body,
    };
    createNote(data);
  };

  return (
    <div>
      <input
        className="title-field"
        value={title}
        onChange={changeTitleHandler}
      />

      <input
        className="body-field"
        value={body}
        onChange={changeBodyHandler}
      />

      <button className="create-button" onClick={submitHandler}>
        Add Note
      </button>
    </div>
  );
};

export default NoteCreate;

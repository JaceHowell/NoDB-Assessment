import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Note from "./Note/Note";
import NoteCreate from "./NoteCreate";

const renderNotes = (note) => {
  return <Note key={note.id} note={note} />;
};

const NoteContainer = () => {
  const [noteData, setNoteData] = useState([]);

  // ** API FUNCTIONS ** //

  const getNoteData = () => {
    axios.get("/my-notes").then((res) => {
      setNoteData(res.data);
    });
  };

  const createNote = (data) => {
    // console.log(data);
    if (!data.noteName) alert("Note must have a title!");
    else {
      axios.post("/my-notes/create", data).then(() => {
        getNoteData();
      });
    }
  };

  const editNote = (index, newText) => {
    axios.put(`/my-notes`, {}).then(() => {
      getNoteData();
    });
  };

  const deleteNote = (id) => {
    axios.delete(`/my-notes/${id}`).then((res) => {
      getNoteData();
    });
  };

  // ** API FUNCTIONS ** //

  useEffect(() => {
    getNoteData();
  }, []);

  return (
    <div className="note-container">
      <NoteCreate createNote={createNote} />
      {noteData?.map(renderNotes) || null}
    </div>
  );
};

export default NoteContainer;

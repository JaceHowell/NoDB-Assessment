import { useState } from "react";



const NoteBody = (props) => {
  const [body, setBody] = useState("");
  return <p className="note-body">NoteBody</p>;
};

export default NoteBody;

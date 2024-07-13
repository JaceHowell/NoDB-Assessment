import Header from "./components/Header/Header.jsx";
import NoteContainer from "./components/NoteContainer/NoteContainer.jsx";
import noteData from "../data/dataset.js";
import axios from "axios";

const App = () => {
  return (
    <>
      <Header />
      <br/>
      <br/>
      <NoteContainer />
    </>
  );
}

export default App
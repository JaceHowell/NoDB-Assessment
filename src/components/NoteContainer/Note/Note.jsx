import NoteBody from "./NoteBody"
import DeleteButton from "./DeleteButton"
import NoteTitle from "./NoteTitle"

const Note = ({note}) => {
  return (
    <div className="note">
        <br/>
        <br/>
        <DeleteButton></DeleteButton>
        <h1 onClick={null}>{note.noteName}</h1>
        <p>{note.noteBody}</p>
        <br/>
        <br/>
    </div>
  )
}

export default Note
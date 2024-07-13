import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import noteData from './data/dataset.js';

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

ViteExpress.config({ printViteDevServerHost: true })

// ** API ROUTES ** //

app.get('/my-notes', (req, res) => {
    res.json(noteData)
})

app.post('/my-notes/create', (req, res) => {
    const {noteName, noteBody} = req.body;
    const newNote = {
        id: noteData[noteData.length - 1].id + 1,
        noteName: noteName,
        noteBody: noteBody
    }
    noteData.push(newNote)

    return res.status(200).json({ message: 'note successfully created' })
})

app.put('/my-notes', (req, res) => {

})

app.delete('/my-notes', (req, res) => {

})


// **END API ROUTES** //

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`))
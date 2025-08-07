import { useState } from "react";
import "./App.css";
import { Form } from "./Components/FormArea/Form/Form";
import { NotesBoard } from "./Components/NotesArea/NotesBoard/NotesBoard";
import { SearchBar } from "./Components/SearchArea/SearchBar/SearchBar";
import type { Note } from "./Models/Note";

function App() {

    const notesData: Note[] = [
        {
            id: "1",
            title: "Sample Note 1",
            content: "This is the first mock note for testing.",
            created: new Date(),
        },
        {
            id: "2",
            title: "Sample Note 2",
            content: "This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.",
            created: new Date(),
        },
        {
            id: "3",
            title: "Sample Note 3",
            content: "This is the third mock note for testing.",
            created: new Date(),
        }
    ];

    const [notes, setNotes] = useState<Note[]>(notesData);

    function handleAddNote(newNote: Note): void {
        setNotes([...notes, newNote]);
    }

    function handleRemoveNote(id: string): void {
        const noteDup = notes.filter(note => note.id.toString() !== id.toString());
        if (noteDup.length === notes.length) return alert('note not found');
        setNotes(noteDup);
    }

    return (
        <div className="App">
            <header>
                <h1>Quick Notes</h1>
            </header>
            <SearchBar />
            <Form onAddNote={handleAddNote} />
            <NotesBoard notes={notes} onDelete={handleRemoveNote} />
            <footer>
                itai glikman
            </footer>
        </div>
    );
}

export default App;

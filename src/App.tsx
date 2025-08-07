import "./App.css";
import { Form } from "./Components/FormArea/Form/Form";
import { NoteCard } from "./Components/NotesArea/NoteCard/NoteCard";
import { NotesBoard } from "./Components/NotesArea/NotesBoard/NotesBoard";
import { SearchBar } from "./Components/SearchArea/SearchBar/SearchBar";
import type { Note } from "./Models/Note";

function App() {

    const notes: Note[] = [
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

    return (
        <div className="App">
            <header>
                <h1>Quick Notes</h1>
            </header>
            <SearchBar />
            <Form />
            <NotesBoard notes={notes} />
            <footer>
                itai glikman
            </footer>
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./Components/FormArea/Form/Form";
import { NotesBoard } from "./Components/NotesArea/NotesBoard/NotesBoard";
import { SearchBar } from "./Components/SearchArea/SearchBar/SearchBar";
import type { Note } from "./Models/Note";
// import { FormModal } from "./Components/FormArea/Modal/FormModal";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function App() {

    // const notesData: Note[] = [
    //     {
    //         id: "1",
    //         title: "Sample Note 1",
    //         content: "This is the first mock note for testing.",
    //         created: new Date(),
    //     },
    //     {
    //         id: "2",
    //         title: "Sample Note 2",
    //         content: "This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.This is the second mock note for testing.",
    //         created: new Date(),
    //     },
    //     {
    //         id: "3",
    //         title: "Sample Note 3",
    //         content: "This is the third mock note for testing.",
    //         created: new Date(),
    //     }
    // ];

    const [opened, { open, close }] = useDisclosure(false);
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const localStorageNotes = localStorage.getItem('notes');
        if (localStorageNotes) // display data from local storage
            setNotes(JSON.parse(localStorageNotes));
    }, [])


    function handleAddNote(newNote: Note): void {
        setNotes([...notes, newNote]);
    }

    function handleRemoveNote(id: string): void {
        const noteDup = notes.filter(note => note.id.toString() !== id.toString());
        if (noteDup.length === notes.length) return alert('note not found');
        setNotes(noteDup);
        localStorage.setItem('notes', JSON.stringify(noteDup)); // update local storage
    }

    return (
        <>
            <div className="App">

                {/* <Modal opened={opened} onClose={close} title="Authentication">
                <div>my modal</div>
            </Modal> */}

                <header>
                    <h1>Quick Notes</h1>
                </header>
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Authentication"
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }}
                >
                    <SearchBar />
                </Modal>
                <Button variant="default" onClick={open}>
                    Open modal
                </Button>



                <SearchBar />
                <Form onAddNote={handleAddNote} />
                {notes.length
                    ? <NotesBoard notes={notes} onDelete={handleRemoveNote} />
                    : <div>No notes yet</div>
                }
                <footer>
                    itai glikman
                </footer>
            </div>
        </>
    );
}

export default App;

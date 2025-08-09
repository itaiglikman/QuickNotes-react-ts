import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./Components/FormArea/Form/Form";
import { NotesBoard } from "./Components/NotesArea/NotesBoard/NotesBoard";
import { SearchBar } from "./Components/SearchArea/SearchBar/SearchBar";
import type { NoteType } from "./Models/Types";
// import { FormModal } from "./Components/FormArea/Modal/FormModal";
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { appUtils } from "./Utils/appUtils";
import { dataUtils } from "./Utils/dataUtils";

function App() {

    const [opened, { open, close }] = useDisclosure(false);
    const [notes, setNotes] = useState<NoteType[]>([]); // the single truth
    const [displayedNotes, setDisplayedNotes] = useState<NoteType[]>([]); // notes to display

    // set notes on component mount:
    useEffect(() => {
        const storedNotes = dataUtils.getStorageNotes();
        setNotes(storedNotes);;
    }, [])

    // update displayNotes when notes change:
    useEffect(() => {
        setDisplayedNotes(notes);
    }, [notes])


    /** add new note
     * get the updated notes and update state*/
    function handleAddNote(newNote: NoteType): void {
        const newNotes = appUtils.addNote(newNote, notes);
        setNotes(newNotes); // update state
    }

    /**
     * filer unwanted note
     * update storage and state
     */
    function handleRemoveNote(id: string): void {
        const updatedNotes = appUtils.removeNote(id, notes);
        updatedNotes.length ? setNotes(updatedNotes) : alert('note not found');
    }

    /**
     * filter notes by query
     * display search results
     */
    function handleSearch(query: string) {
        const searchResults = appUtils.searchNote(query, notes);
        setDisplayedNotes(searchResults);
    }

    function handleFilter(category: string) {
        const filterResults = appUtils.filterByCategory(category, notes);
        setDisplayedNotes(filterResults);
    }

    return (
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
            </Modal>
            <Button variant="default" onClick={open}>
                Open modal
            </Button>

            {/* <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}> */}
            <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
            {/* <Filters /> */}
            {/* </div> */}
            {/* <SearchBar onSearch={handleSearch} /> */}
            <Form onAddNote={handleAddNote} />
            {displayedNotes.length
                ? <NotesBoard notes={displayedNotes} onDelete={handleRemoveNote} />
                : <div>No notes found</div>
            }
            <footer>
                itai glikman
            </footer>
        </div>
    );
}

export default App;

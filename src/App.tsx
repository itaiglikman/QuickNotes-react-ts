import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./Components/FormArea/Form/Form";
import { NotesBoard } from "./Components/NotesArea/NotesBoard/NotesBoard";
import { SearchBar } from "./Components/SearchArea/SearchBar/SearchBar";
import type { NoteType } from "./Models/Types";
import { appUtils } from "./Utils/appUtils";
import { dataUtils } from "./Utils/dataUtils";

function App() {

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
    function handleFormSubmit(note: NoteType): void {
        const newNotes = appUtils.getUpdatedNotesAfterSubmit(note, notes);
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

    function handleCategoryFilter(category: string) {
        const filterResults = appUtils.filterByCategory(category, notes);
        setDisplayedNotes(filterResults);
    }

    return (
        <div className="App">
            <header>
                <h1>Quick Notes</h1>
            </header>

            <SearchBar onSearch={handleSearch} onFilter={handleCategoryFilter} />
            <Form onFormSubmit={handleFormSubmit} />

            {displayedNotes.length
                ? <NotesBoard notes={displayedNotes} onDelete={handleRemoveNote} onFormSubmit={handleFormSubmit} />
                : <div>No notes found</div>
            }

            <footer>
                itai glikman
            </footer>
        </div>
    );
}

export default App;

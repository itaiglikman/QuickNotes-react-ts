import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./Components/FormArea/Form/Form";
import { NotesBoard } from "./Components/NotesArea/NotesBoard/NotesBoard";
import { SearchBar } from "./Components/SearchArea/SearchBar/SearchBar";
import type { NoteType } from "./Models/Types";
import { appUtils } from "./Utils/appUtils";
import { dataUtils } from "./Utils/dataUtils";

function App() {

    const [notes, setNotes] = useState<NoteType[]>([]); // the single source of truth
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState('');

    // display related to the main data source:
    let displayedNotes: NoteType[] = notes;

    // set notes on component mount:
    useEffect(() => {
        const storedNotes = dataUtils.getStorageNotes();
        setNotes(storedNotes);
    }, [])

    const handleCategoryFilter = () => appUtils.filterByCategory(filterCategory, displayedNotes);
    const handleSearch = () => appUtils.searchNote(searchQuery, displayedNotes);

    // display filters on state change:
    if (filterCategory) displayedNotes = handleCategoryFilter();
    if (searchQuery) displayedNotes = handleSearch();

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
        try {
            const updatedNotes = appUtils.removeNote(id, notes);
            setNotes(updatedNotes)
        } catch (error: any) {
            alert(error) // throw error when note id was not found
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Quick Notes</h1>
            </header>

            <SearchBar
                onSearch={query => setSearchQuery(query)}
                onFilter={category => setFilterCategory(category)} />
            <Form onFormSubmit={handleFormSubmit} />

            {displayedNotes &&
                displayedNotes.length
                ? <NotesBoard
                    notes={displayedNotes}
                    onDelete={handleRemoveNote}
                    onFormSubmit={handleFormSubmit} />
                : <div>No notes found</div>
            }

            <footer>
                itai glikman
            </footer>
        </div>
    );
}

export default App;

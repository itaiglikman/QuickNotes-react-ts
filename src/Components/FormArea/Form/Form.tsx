import { useState, type FormEvent } from "react";
import "./Form.css";
import { categoriesColor, type CategoryType, type Note } from "../../../Models/Note";

// maybe will be used in modal
// interface FormType{
//     noteToUpdate:Note;
// }

interface FormProps {
    onAddNote: (note: Note) => void;
}

export function Form({ onAddNote }: FormProps) {
    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputContent, setInputContent] = useState<string>('');
    const [inputCategory, setInputCategory] = useState<string>('');
    const [contentErrMsg, setContentErrMsg] = useState<string>('');


    function handleSubmit(event: FormEvent): void {
        event.preventDefault(); // don't refresh on submit
        if (!validateContent(inputContent)) return; // display error
        const newNote = createNewNote(inputContent, inputTitle, inputCategory);
        console.log(newNote);
        onAddNote(newNote); // send new note to app
        addToLocalStorage(newNote); // add note to local storage
        emptyFields();
    }

    function addToLocalStorage(note: Note): void {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function emptyFields() {
        setInputTitle('');
        setInputContent('');
    }

    function validateContent(content: string): boolean {
        if (content === '') {
            setContentErrMsg('no content');
            return false;
        }
        setContentErrMsg('');
        return true;
    }

    function createNewNote(content: string, title?: string, strCategory?: string): Note {
        const category = strCategory as CategoryType;
        return { id: crypto.randomUUID(), title, content, created: new Date(), category };
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <div className="input-area">
                    <input
                        type="text"
                        name="title"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        name="content"
                        value={inputContent}
                        onChange={(e) => setInputContent(e.target.value)}
                        placeholder="Write here your new note "
                    />
                    {/* <select name="categorySelect" id="" onSelect={handleSelect}> */}
                    <select name="categorySelect" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)}>
                        <option value="" disabled>Choose category</option>
                        {Object.keys(categoriesColor).map(c => (
                            <option value={c}>{c}</option>
                        ))}.
                    </select>
                    {contentErrMsg &&
                        <div className="err-msg">{contentErrMsg}</div>}
                </div>
                <button>Create</button>
            </form>
        </div>
    );
}

import { useState, type FormEvent } from "react";
import "./Form.css";
import type { Note } from "../../../Models/Note";

// maybe will be used in modal
// interface FormType{
//     noteToUpdate:Note;
// }

export function Form() {
    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputContent, setInputContent] = useState<string>('');
    const [contentErrMsg, setContentErrMsg] = useState('');

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        validateContent(inputContent);
        const note = createNewNote(inputContent, inputTitle);
        console.log(note);
        setInputTitle('');
        setInputContent('');
    }

    function validateContent(content: string): void {
        if (content === '') {
            setContentErrMsg('no content');
            return;
        }
        setContentErrMsg('');
    }

    function createNewNote(content: string, title?: string): Note {
        return { id: crypto.randomUUID(), title, content, created: new Date() };
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
                    {contentErrMsg &&
                        <div className="err-msg">{contentErrMsg}</div>}
                </div>
                <button>Create</button>
            </form>
        </div>
    );
}

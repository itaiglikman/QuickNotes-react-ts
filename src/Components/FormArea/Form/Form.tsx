import { useState, type FormEvent } from "react";
import { type Note } from "../../../Models/Note";
import formUtils from "../../../Utils/formUtils";
import "./Form.css";

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
        const errMsg = formUtils.validateContent(inputContent);
        if (errMsg.length > 0) return setContentErrMsg(errMsg); // display error
        const newNote = formUtils.createNewNote(inputContent, inputTitle, inputCategory);
        onAddNote(newNote); // send new note to app
        formUtils.addToLocalStorage(newNote); // add note to local storage
        emptyFields();
    }

    function emptyFields(): void { //all render at once
        setInputTitle('');
        setInputContent('');
        setInputCategory('');
        setContentErrMsg('');
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
                    <select name="categorySelect" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)}>
                        <option value="" disabled>Choose category</option>
                        {formUtils.categoriesColors.map(c => (
                            <option value={c} key={c}>{c}</option>
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

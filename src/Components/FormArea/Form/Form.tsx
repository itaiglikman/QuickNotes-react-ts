import { useState, type FormEvent } from "react";
import { type NoteType } from "../../../Models/Types";

import "./Form.css";
import { formUtils } from "../../../Utils/formUtils";
import { Filters } from "../../SearchArea/Filters/Filters";
import { Categories } from "../../Categories/Categories";

// maybe will be used in modal
// interface FormType{
//     noteToUpdate:Note;
// }

interface FormProps {
    onAddNote: (note: NoteType) => void;
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
        emptyFields();
    }

    function emptyFields(): void { //all render at once
        setInputTitle('');
        setInputContent('');
        setInputCategory('');
        setContentErrMsg('');
    }

    function handleCategory(category: string) {
        setInputCategory(category);
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
                    <div className="form-bottom">
                        <Categories onSelect={handleCategory} />
                        <button>Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

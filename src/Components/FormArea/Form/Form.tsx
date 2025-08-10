import { useState, type FormEvent } from "react";
import { type CategoryType, type NoteType } from "../../../Models/Types";
import { formUtils } from "../../../Utils/formUtils";
import { Categories } from "../../Categories/Categories";
import "./Form.css";

interface FormProps {
    onFormSubmit: (note: NoteType) => void;
    noteToUpdate?: NoteType;
    onModalClose?: () => void;
}

export function Form({ onFormSubmit, onModalClose, noteToUpdate }: FormProps) {
    const [inputTitle, setInputTitle] = useState<string>(noteToUpdate?.title ? noteToUpdate.title : '');
    const [inputContent, setInputContent] = useState<string>(noteToUpdate ? noteToUpdate.content : '');
    const [inputCategory, setInputCategory] = useState<string>(noteToUpdate?.category ? noteToUpdate.category : '');
    const [contentErrMsg, setContentErrMsg] = useState<string>('');

    const formInputs = { title: inputTitle, content: inputContent, category: inputCategory as CategoryType }

    function handleSubmit(event: FormEvent): void {
        event.preventDefault(); // don't refresh on submit

        const errMsg = formUtils.validateContent(inputContent);
        if (errMsg.length > 0) return setContentErrMsg(errMsg); // display error

        const noteToSend = formUtils.getNewNote(formInputs, noteToUpdate); // get modified note
        onFormSubmit(noteToSend as NoteType); // // param is optional so need to check

        if (onModalClose) onModalClose(); // close modal
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
                        <Categories
                            onSelect={handleCategory}
                            existingCategory={inputCategory}
                        />
                        <button>{noteToUpdate ? 'Update' : 'Create'}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

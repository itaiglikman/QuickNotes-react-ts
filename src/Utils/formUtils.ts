import { categoriesColor, type CategoryType, type NoteType } from "../Models/Types";

function validateContent(content: string): string {
    return content === '' ? 'no content' : ''
}

// get the form data
// create a note object and return
function createNewNote(formInputs: { [key: string]: string }): NoteType {
    let { title, content, category: strCategory } = { ...formInputs };
    const category = strCategory as CategoryType;
    return { id: crypto.randomUUID(), title, content, created: (new Date()).toLocaleString(), category };
}

// get the note to update and the form data 
// updated the needed fields and return the whole object
function updateNote(noteToUpdate: NoteType, formInputs: { [key: string]: string }): NoteType {
    let { title, content, category: strCategory } = { ...formInputs };
    const updatedNote = {
        ...noteToUpdate,
        title, content,
        category: strCategory as CategoryType,
        updated: (new Date()).toLocaleString()
    }
    return updatedNote;
}

// get the data from the form
// update or create note as needed
function getNewNote(formInputs: { [key: string]: string }, noteToUpdate?: NoteType): NoteType {
    const newNote = noteToUpdate
        ? formUtils.updateNote(noteToUpdate, formInputs)
        : formUtils.createNewNote(formInputs);
    return newNote;
}

const categoriesColors = Object.keys(categoriesColor);

export const formUtils = {
    createNewNote,
    categoriesColors,
    validateContent,
    updateNote,
    getNewNote
}

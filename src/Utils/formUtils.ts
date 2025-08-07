import { categoriesColor, type CategoryType, type Note } from "../Models/Note";

function addToLocalStorage(note: Note): void {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function validateContent(content: string): string {
    return content === '' ? 'no content' : ''
}

function createNewNote(content: string, title?: string, strCategory?: string): Note {
    const category = strCategory as CategoryType;
    return { id: crypto.randomUUID(), title, content, created: (new Date()).toLocaleString(), category };
}

const categoriesColors = Object.keys(categoriesColor);

export default {
    addToLocalStorage, createNewNote, categoriesColors, validateContent
}

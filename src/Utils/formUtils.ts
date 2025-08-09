import { categoriesColor, type CategoryType, type NoteType } from "../Models/Types";

function addToLocalStorage(note: NoteType): void {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function validateContent(content: string): string {
    return content === '' ? 'no content' : ''
}

function createNewNote(content: string, title?: string, strCategory?: string): NoteType {
    const category = strCategory as CategoryType;
    return { id: crypto.randomUUID(), title, content, created: (new Date()).toLocaleString(), category };
}

const categoriesColors = Object.keys(categoriesColor);

export const formUtils = {
    addToLocalStorage, createNewNote, categoriesColors, validateContent
}

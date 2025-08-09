import type { NoteType } from "../Models/Types";

function getStorageNotes(): NoteType[] {
    const localStorageNotes = localStorage.getItem('notes');
    return localStorageNotes ? JSON.parse(localStorageNotes) : [];
}

// update local storage
function setStorageNotes(data: NoteType[]): void {
    localStorage.setItem('notes', JSON.stringify(data));
}

export const dataUtils = {
    getStorageNotes,
    setStorageNotes,
}
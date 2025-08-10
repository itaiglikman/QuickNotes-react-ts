import type { NoteType } from "../Models/Types";
import { dataUtils } from "./dataUtils";

// add note to storage and return the updated notes
function addNote(note: NoteType, notes: NoteType[]): NoteType[] {
    const newNotes = [...notes, note]
    dataUtils.setStorageNotes(newNotes); // add note to local storage
    return newNotes;
}

function updateNotes(note: NoteType, noteIndex: number, notes: NoteType[]) {
    const newNotes = [...notes]
    newNotes[noteIndex] = { ...note }
    dataUtils.setStorageNotes(newNotes);
    return newNotes;
}

// return notes without unwanted note
function removeNote(id: string, notes: NoteType[]): (NoteType[] | []) {
    const notesDup = notes.filter(note => note.id.toString() !== id.toString());
    if (notesDup.length === notes.length) return [];
    dataUtils.setStorageNotes(notesDup); // update local storage
    return notesDup;
}

// filter notes by query, title and content
function searchNote(query: string, notes: NoteType[]): (NoteType[]) {
    return notes.filter(note =>
        note.title
            ? note.title.includes(query) || note.content.includes(query)
            : note.content.includes(query)
    );
}

function filterByCategory(category: string, notes: NoteType[]): (NoteType[] | []) {
    return notes.filter(note => note.category === category);
}

export const appUtils = {
    addNote, updateNotes, removeNote, searchNote, filterByCategory,
}
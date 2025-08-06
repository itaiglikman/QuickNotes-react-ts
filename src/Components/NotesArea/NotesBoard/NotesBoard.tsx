import type { Note } from "../../../Models/Note";
import { NoteCard } from "../NoteCard/NoteCard";
import "./NotesBoard.css";

interface NoteBoardProps {
    notes: Note[];
}

export function NotesBoard({notes}: NoteBoardProps) {
    return (
        <div className="NotesBoard">
            {notes.map(note => <NoteCard {...note} key={note.id}/>)}
        </div>
    );
}

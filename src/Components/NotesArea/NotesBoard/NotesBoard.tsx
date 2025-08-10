import type { NoteType } from "../../../Models/Types";
import { NoteCard } from "../NoteCard/NoteCard";
import "./NotesBoard.css";

interface NoteBoardProps {
    notes: NoteType[];
    onDelete: (id: string) => void;
    onFormSubmit: (note: NoteType) => void;
}

export function NotesBoard({ notes, onDelete, onFormSubmit }: NoteBoardProps) {
    return (
        <div className="NotesBoard">
            {notes.map(note => <NoteCard
                note={note}
                key={note.id}
                onDelete={onDelete}
                onFormSubmit={onFormSubmit} />)}
        </div>
    );
}

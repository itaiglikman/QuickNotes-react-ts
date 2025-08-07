import type { Note } from "../../../Models/Note";
import { NoteCard } from "../NoteCard/NoteCard";
import "./NotesBoard.css";

interface NoteBoardProps {
    notes: Note[];
    onDelete: (id: string) => void;
}

export function NotesBoard({ notes, onDelete }: NoteBoardProps) {
    return (
        <div className="NotesBoard">
            {notes.map(note => <NoteCard note={note} key={note.id} onDelete={onDelete} />)}
        </div>
    );
}

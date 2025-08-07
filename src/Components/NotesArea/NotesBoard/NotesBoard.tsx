import type { NoteType } from "../../../Models/Types";
import { NoteCard } from "../NoteCard/NoteCard";
import "./NotesBoard.css";

interface NoteBoardProps {
    notes: NoteType[];
    onDelete: (id: string) => void;
}

export function NotesBoard({ notes, onDelete }: NoteBoardProps) {
    return (
        <div className="NotesBoard">
            {notes.map(note => <NoteCard note={note} key={note.id} onDelete={onDelete} />)}
        </div>
    );
}

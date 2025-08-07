import type { Note } from "../../../Models/Note";
import "./NoteCard.css";

interface NoteCardProps {
    note: Note;
    onDelete: (id: string) => void
}

export function NoteCard({ note, onDelete }: NoteCardProps) {
    const { id, title, content, created, updated, category, done } = note;

    function handleDelete() {
        if (confirm(`Are you sure?`)) onDelete(id);
    }

    return (
        <div className="NoteCard" id={id}>
            {title &&
                <h3>{title}</h3>}
            <div className="card-content">{content}</div>
            <div className="card-date">{created.toLocaleString()}</div>
            {updated &&
                <div className="card-date">{created.toLocaleString()}</div>}
            {category &&
                <div>{category}</div>}
            {done &&
                <div>{done}</div>}
            <button
                className="delete-btn"
                onClick={handleDelete}
                title="Delete">
                &times;
            </button>
        </div>
    );
}

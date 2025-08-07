import { categoriesColor, type Note } from "../../../Models/Note";
import "./NoteCard.css";

interface NoteCardProps {
    note: Note;
    onDelete: (id: string) => void;
}

export function NoteCard({ note, onDelete }: NoteCardProps) {
    const { id, title, content, created, updated, category, done } = note;

    function handleDelete() {
        if (confirm(`Are you sure?`)) onDelete(id);
    }

    function getCategoryColor(): string | undefined {
        return category ? categoriesColor[category] : undefined;
    }

    return (
        <div
            className={`NoteCard`}
            style={{ backgroundColor: getCategoryColor() }}
            id={id}
        >
            {title && <h3>{title}</h3>}
            <div className="card-content">{content}</div>
            {category && <div>{category}</div>}
            <div className="card-date">created {created.toISOString()}</div>
            {updated &&
                <div className="card-date">{updated.toDateString()}</div>}
            {done && <div>{done}</div>}
            <button className="delete-btn" onClick={handleDelete} title="Delete">
                &times;
            </button>
        </div>
    );
}

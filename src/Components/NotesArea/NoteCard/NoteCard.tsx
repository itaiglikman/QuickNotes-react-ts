import { categoriesColor, type NoteType } from "../../../Models/Types";
import { FormModal } from "../../FormArea/Modal/FormModal";
import "./NoteCard.css";

interface NoteCardProps {
    note: NoteType;
    onDelete: (id: string) => void;
    onFormSubmit: (note: NoteType) => void;
}

export function NoteCard({ note, onDelete, onFormSubmit }: NoteCardProps) {
    const { id, title, content, created, updated, category, done } = { ...note }

    function handleDelete() {
        if (confirm(`Are you sure?`)) onDelete(id);
    }

    function getCategoryColor(): string | undefined {
        return category
            ? categoriesColor[category]
            : undefined;
    }

    function handleUpdate(updatedNote: NoteType) {
        updatedNote.updated = (new Date()).toLocaleString();
        onFormSubmit(updatedNote);
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

            <div className="card-date">created {created}</div>

            {updated &&
                <div className="card-date">updated {updated}</div>}

            {done && <div>{done}</div>}

            <div className="btn-area">
                <FormModal noteToUpdate={note} onUpdate={handleUpdate} />
                <button className="delete-btn" onClick={handleDelete} title="Delete">
                    &times;
                </button>
            </div>
        </div>
    );
}

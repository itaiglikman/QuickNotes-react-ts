import type { Note } from "../../../Models/Note";
import "./NoteCard.css";

export function NoteCard(props: Note) {
    const { id, title, content, created, updated, category, done } = props;
    return (
        <div className="NoteCard" id={id}>
            {title ? <h3>{title}</h3> : <></>}
            <div className="card-content">{content}</div>
            <div className="card-date">{created.toLocaleString()}</div>
            {updated ? <div className="card-date">{created.toLocaleString()}</div> : <></>}
            {category ? <div>{category}</div> : <></>}
            {done ? <div>{done}</div> : <></>}
            <button className="delete-btn" title="Delete">&times;</button>
        </div>
    );
}

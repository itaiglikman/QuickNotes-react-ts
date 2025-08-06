import type { Note } from "../../../Models/Note";
import "./NoteCard.css";


export function NoteCard(props: Note) {
    const { id, title, content, created, updated, category, done } = props;
    return (
        <div className="NoteCard" id={id}>
            <h2>Card</h2>
            {title ? <h3>{title}</h3> : <></>}
            <div>{content}</div>
            <div className="card-date">{created.toLocaleString()}</div>
            {updated ? <div className="card-date">{created.toLocaleString()}</div> : <></>}
            {category ? <div>{category}</div> : <></>}
            {done ? <div>{done}</div> : <></>}
        </div>
    );
}

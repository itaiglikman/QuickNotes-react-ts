import { useState } from "react";
import "./Modal.css";
import ReactModal from 'react-modal';
import { Form } from "../Form/Form";
import type { NoteType } from "../../../Models/Types";
ReactModal.setAppElement('#root');

interface ModalProps {
    noteToUpdate: NoteType
    onUpdate: (note: NoteType) => void;
}

export function FormModal({ noteToUpdate, onUpdate }: ModalProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className="modal-btn" title="Edit" onClick={() => setIsOpen(true)}>
                {/* Pencil SVG icon */}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 1 1 2.828 2.828L11.828 15.828a2 2 0 0 1-2.828 0L9 13z" />
                </svg>
            </button>

            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)} // closes on ESC or overlay click
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(3px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        border: "none",
                        borderRadius: "1rem",
                        background: "#fefefe",
                        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
                    }
                }}
            >
                <Form
                   onFormSubmit={onUpdate}
                    noteToUpdate={noteToUpdate}
                    onModalClose={() => setIsOpen(false)} />
            </ReactModal>
        </div>

    );
}
import "./Form.css";

// maybe will be used in modal
// interface FormType{
//     noteToUpdate:Note;
// }

export function Form() {

    function handleSubmit() {

    }

    return (
        <div className="Form">

            <form action="" onSubmit={handleSubmit}>
                <div className="input-area">
                    <input type="text" name="title" value={''} placeholder="Title"/>
                    <textarea name="content" value={''} placeholder="Write here your new note "/>
                </div>
                <button>Create</button>
            </form>

        </div>
    );
}

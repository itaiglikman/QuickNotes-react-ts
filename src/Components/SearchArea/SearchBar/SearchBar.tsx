import "./SearchBar.css";

export function SearchBar() {
    return (
        <div className="SearchBar">

			<input type="text" value={''} placeholder="Search notes" />
            <button>search</button>

        </div>
    );
}

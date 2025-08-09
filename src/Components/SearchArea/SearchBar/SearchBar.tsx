import { useEffect, useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {

    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
      setSearchValue('');
    }, [])
    

    function handleClick() {
        if (!searchValue.length) return console.log('no search');
        onSearch(searchValue);
    }

    return (
        <div className="SearchBar">
            <input type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Search notes" />
            <button onClick={handleClick}>search</button>
        </div>
    );
}

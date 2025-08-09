import { useEffect, useState } from "react";
import { Categories } from "../../Categories/Categories";
import "./SearchBar.css";
interface SearchBarProps {
    onSearch: (query: string) => void;
    onFilter: (category: string) => void;
}

export function SearchBar({ onSearch, onFilter }: SearchBarProps) {

    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        setSearchValue('');
    }, [])


    function handleClick() {
        if (!searchValue.length) return console.log('no search');
        onSearch(searchValue);
    }

    function handleFilter(category: string) {
        onFilter(category);
    }

    return (
        <div className="SearchBar">
            <input type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Search notes" />
            <Categories onSelect={handleFilter} />
            <button onClick={handleClick}>search</button>
        </div>
    );
}

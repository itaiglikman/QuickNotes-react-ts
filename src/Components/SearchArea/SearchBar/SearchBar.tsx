import { useEffect, useState } from "react";
import { Categories } from "../../Categories/Categories";
import "./SearchBar.css";
interface SearchBarProps {
    onSearch: (query: string) => void;
    onFilter: (category: string) => void;
}

export function SearchBar({ onSearch, onFilter }: SearchBarProps) {

    const [searchValue, setSearchValue] = useState<string>('');
    const [categoryValue, setCategoryValue] = useState<string>('');

    useEffect(() => {
        setSearchValue('');
    }, [])

    function handleClick() {
        if (!searchValue.length) throw alert('no search');
        onSearch(searchValue);
    }

    function handleFilter(category: string) {
        setCategoryValue(category);
        onFilter(category);
    }

    return (
        <div className="SearchBar">
            <input type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Search notes" />
            <Categories
                onSelect={handleFilter}
                selectedValue={categoryValue} />
            <button onClick={handleClick}>search</button>
        </div>
    );
}

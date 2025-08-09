import "./Categories.css";
import { categoriesColor, type CategoryType } from "../../Models/Types";
import { useState } from "react";

interface CategoriesProps {
    onSelect: (category: string) => void;
}

export function Categories({ onSelect }: CategoriesProps) {

    const [selectValue, setSelectValue] = useState<string>('');

    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        const select = event.target.value;
        setSelectValue(select);
        onSelect(select);
    }

    const categoriesColors = Object.keys(categoriesColor);

    function getColor(category: string): string {
        const color = categoriesColor[category as CategoryType];
        return color;
    }

    return (
        <div className="Categories">
            <select className="category-dropdown"
                value={selectValue}
                onChange={handleSelect}
                style={{ backgroundColor: getColor(selectValue) }}>
                <option value=''>Categories</option>
                {categoriesColors.map(category => (
                    <option value={category} key={category}
                        style={{ backgroundColor: getColor(category) }}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
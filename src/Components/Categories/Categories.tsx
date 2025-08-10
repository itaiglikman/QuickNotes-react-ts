import { categoriesColor, type CategoryType } from "../../Models/Types";
import "./Categories.css";

interface CategoriesProps {
    onSelect: (category: string) => void;
    selectedValue: string;
}

export function Categories({ selectedValue, onSelect }: CategoriesProps) {

    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        selectedValue = event.target.value;
        onSelect(selectedValue);
    }

    const categoriesColors = Object.keys(categoriesColor);

    function getColor(category: string): string {
        const color = categoriesColor[category as CategoryType];
        return color;
    }

    return (
        <div className="Categories">
            <select className="category-dropdown"
                value={selectedValue}
                onChange={handleSelect}
                style={{ backgroundColor: getColor(selectedValue) }}>
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
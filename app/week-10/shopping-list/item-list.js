import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <main className="m-4 text-green-100">
            <div className="mb-4 flex">
                <button
                    className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-blue-300' : 'bg-gray-300'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`mr-2 p-2 ${sortBy === 'category' ? 'bg-blue-300' : 'bg-gray-300'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>

            {sortedItems.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}  /* Pass onSelect to trigger onItemSelect */
                />
            ))}
        </main>
    );
}

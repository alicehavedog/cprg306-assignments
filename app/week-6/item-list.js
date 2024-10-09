import { useState } from 'react';
import Item from './item';
import items from './item.json'; // 從 JSON 文件中導入項目

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name'); // 預設排序依據為 'name'
    
    // 根據 sortBy 狀態變數進行排序
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <main className="m-4 text-green-100">
            <h2 className="text-2xl font-bold">Shopping List</h2>
            <div className="mb-4">
                <button
                    className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-blue-300' : 'bg-gray-300'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`p-2 ${sortBy === 'category' ? 'bg-blue-300' : 'bg-gray-300'}`}
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
                />
            ))}
        </main>
    );
}

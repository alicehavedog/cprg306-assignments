'use client';

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("Produce");
    const [count, setCount] = useState(1);

    const handleNameChange = (event) => {
        setItemName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        const newItem = {
            id: Math.random().toString(36).substring(7), 
            name: itemName,
            quantity: count,
            category: category
        };

        onAddItem(newItem); 
        setItemName(""); 
        setCount(1);
        setCategory("Produce");
    };

    const increment = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex flex-col items-center space-x-4">
            <div className="m-2">
                <form onSubmit={handleSubmit} className="m-2"> 
                    <label htmlFor="name"></label>
                    <input
                        id="name"
                        type="text"
                        value={itemName}
                        onChange={handleNameChange}
                        className="mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        placeholder="Item Name:"
                    />
                </form>
            </div>

            <div className="flex items-center space-x-4">
                <p className="mr-3 text-center">{count}</p>
                <div className="flex flex-col justify-center">
                    <button
                        onClick={decrement}
                        disabled={count === 1}
                        className="hover:bg-slate-400 active:bg-pink-300 rounded w-8 focus:outline-none disabled:bg-red-500"> - </button>
                </div>
                <button
                    onClick={increment}
                    disabled={count === 20}
                    className="hover:bg-slate-400 active:bg-pink-300 rounded w-8 focus:outline-none disabled:bg-red-500"> + </button>

                <div>
                    <select
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                onClick={handleSubmit} 
                className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+
            </button>
        </div>
    );
}

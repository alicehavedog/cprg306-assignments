"use client";

import { useState } from "react";

export default function NewItem() {
const [itemName, setItemName] = useState("");
const [category, setCategory] = useState("Produce");
const [count, setCount] = useState(1);


const handleNameChange = (event) => {   
    setItemName(event.target.value);
}
const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("OOO"); 
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
            <form className="m-2">
                <label htmlFor="name"></label>
                <input 
                    id="name"
                    type="text" 
                    value={itemName} 
                    onChange={(event) => handleNameChange(event)} 
                    className=" mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    placeholder="Item Name:"/>
            </form>
        </div>
        <div className="flex items-center space-x-4">
            <p className=" mr-3 text-center">{count}</p>
            <div className="flex flex-col justify-center ">
                <button 
                onClick={decrement}
                disabled={count === 1}
                className="
                hover:bg-slate-400
                active: bg-pink-300
                rounded w-8 
                focus:outline-none focus-right-2
                disabled:bg-red-500"> - </button>
            </div>
                <button 
                onClick={increment}
                disabled={count === 20}
                className="
                hover:bg-slate-400
                active: bg-pink-300
                rounded w-8
                focus:outline-none focus-right-2
                disabled:bg-red-500"> + </button>
            <div>
            <select 
            class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                <option value="" disabled="">Category</option>
                <option value="produce" selected="">Produce</option>
                <option value="dairy">Dairy</option><option value="bakery">Bakery</option>
                <option value="meat">Meat</option><option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            </div>
        </div>
        <button 
        type="submit" 
        class="w-full mt-4 py-2 px-4 
            bg-blue-500 text-white 
            font-semibold rounded-lg 
            shadow-md 
            hover:bg-blue-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-400 
            focus:ring-opacity-75">+</button>
    </div>
  );
}
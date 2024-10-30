// "use client";

// import { useState,useEffect } from "react";

// export default function Page() {
//     const [randomDogUrl, setRandomDogUrl] = useState(null);
//     const [dogBreeds, setDogBreeds] = useState([]);
//     const [selectedBreed, setSelectedBreed] = useState("");

//     const getRandomDog = async () => {
//         const response = breed 
//         ? await fetch(`https://dog.ceo/api/${breed}/hound/images`)
//         : await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await response.json(); 
//         //const data = response.json(); // this is a promise and not the actual data
//         const url = data.message;
//         setRandomDogUrl(url);
//         };

//     const getDogBreeds = async (breed) => {
//         const response = await fetch("https://dog.ceo/api/breeds/list/all");
//         const data = await response.json();
//         const breeds = Object.keys(data.message); //Object.keys returns an array of the keys in the object
//         setDogBreeds(breeds);
//     }

//     const handleBreedChange = (event) => {
//         setSelectedBreed(event.target.value);
//     }

//     useEffect(() => {
//         getRandomDog();
//         getDogBreeds();
//     }, []); // empty array means this effect will only run once

//     useEffect(() => {
//         if (selectedBreed === "") return;
//         getRandomDog(selectedBreed);
//     }, [selectedBreed]);

//         return (
//     <div>
//       <h1>Week 8</h1>
//       <div>
//         <select onChange={handleBreedChange}>
//         {dogBreeds.map((breed) => (
//             <option key={breed} value={breed}>
//                 {breed}
//                 </option>))};
//         </select>
//       </div>
//       <p>
//         <img src="{randomDogUrl}"/>
//         </p>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';  // Import MealIdeas component
import itemsData from './items.json'; 

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');  // New state for selected item name

    // Handler for adding a new item
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Handler for selecting an item from the list
    const handleItemSelect = (item) => {
        // Clean up the item name by removing extra details (like size, emoji, etc.)
        const cleanedItemName = item.name.split(',')[0]  // Remove anything after the comma
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '') // Remove emojis
            .trim();  // Trim whitespace
        setSelectedItemName(cleanedItemName);  // Update the selected item name
    };

    return (
        <div className="w-full h-screen">
            <main className="flex justify-center w-full bg-orange-300">
                <div className="flex flex-row justify-center w-full p-4">
                    {/* Shopping List Side */}
                    <div className="flex-1 flex-col w-1/2 p-2 m-4 rounded bg-orange-300 shadow-md">
                        <h2 className="text-2xl font-bold">Shopping List</h2>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />  {/* Pass handleItemSelect to ItemList */}
                    </div>

                    {/* Meal Ideas Side */}
                    <div className="flex flex-col w-1/2 p-2 m-4 rounded bg-orange-300 shadow-md">
                        <h2 className="text-2xl font-bold">Meal Ideas</h2>
                        <MealIdeas ingredient={selectedItemName} />  {/* Pass selectedItemName as ingredient */}
                    </div>
                </div>
            </main>
        </div>
    );
}

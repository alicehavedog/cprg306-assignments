// "use client"

// import DogList from "./DogList"
// import Dog from "./dog"
// import DogForm from "./dog-form.js"
// import dogData from "./dog-data.json"
// import { useState } from "react"

// export default function Page() {
//     const [dogs, setDogs] = useState(dogData);
//     const handleDelete = (id) => {
//         const updatedDogs = dogs.filter((dog) => dog.id !== id)
//         setDogs(updatedDogs)
//     };
//     const handleAddDog = (newDog) => {
//         setDogs([...dogs, newDog])
//     };
//     return (
//         <div>
//         <h1>Week 7</h1>

//         <DogList dogs={dogs} onDelete={handleDelete}/>
//         <DogForm onAddDog = {handleAddDog}/>
//         </div>
//     )
//     }

'use client';
import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from "./new-item.js";
import itemsData from './items.json'; 

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
    return (
        <div className="w-full h-screen">
            <main className="flex justify-center w-full bg-orange-300">
                <div className="flex flex-col justify-center w-36 p-2 m-4 rounded">
                <h2 className="text-2xl font-bold">Shopping List</h2>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} />
                </div>
            </main>
        </div>
    );
}
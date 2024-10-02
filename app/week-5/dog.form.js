"use client";
import { useState } from "react";
export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
        // name = name.replace(/[^a-zA-Z]/g, "");
        // setName(name);
    }
    const handleAgeChange = (event) => {
        let age = event.target.value;
        age = parseInt(age);
        const handleAgeChange = (event) => {
            let age = event.target.value;
            age = parseInt(age);
            if (age < 0) {
                age = 0;
            }
            setAge(age);
        }
    }
    return (
        <div className="m-2">
            <h2 className="text-2xl">Add a dog</h2>
            <form className="m-2">
                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    type="text" 
                    value={name} 
                    onChange={(event) => handleNameChange(event)} 
                    className="border border-black m-2"/>
                <label htmlFor="breed">Breed: </label>
                <input 
                    id="breed"
                    type="text" 
                    value={breed} 
                    onChange={(event) => setBreed(event.target.value)} 
                    className="border border-black m-2"/>
                <label htmlFor="age">Age: </label>
                <input 
                    id="age"
                    type="number" 
                    value={age} 
                    onChange={(event) => handleAgeChange(event.target.value)} 
                    className="border border-black m-2"/>
                </form>
        <div className="text-lg">
            <p>{name.length >=3 ? name: "Name too short"}</p>
            <p>{breed}</p>
            <p>{age}</p>
            </div>
        </div>
    )
}
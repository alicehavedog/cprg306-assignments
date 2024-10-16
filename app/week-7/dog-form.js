"use client"
import { useState } from "react"
export default function DogForm(onAddDog) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newId = Math.floor(Math.random() * 100000)
        const newDog = { id: newId, name, age }
        console.log(name, age)
        onAddDog(newDog)
        setName("")
        setAge(0)
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" 
                value={name} 
                onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Age:
                <input type="number" 
                value={age} 
                onChange={(event) => setAge(parseInt(event.target.value))} />
            </label>
            <button type="submit">Add Dog</button>
        </form>
        );
    }
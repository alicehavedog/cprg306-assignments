'use client';

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    // Define state for meal ideas
    const [meals, setMeals] = useState([]);
    
    // Function to fetch meal ideas from the API
    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || []; // Ensure meals is always an array
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    };

    // Function to load meal ideas into the state
    const loadMealIdeas = async () => {
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        }
    };

    // useEffect to trigger the load when the ingredient changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // Render the list of meals
    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.length > 0 ? meals.map(meal => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                    </li>
                )) : <p>No meal ideas found for {ingredient}</p>}
            </ul>
        </div>
    );
};

export default MealIdeas;

import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "../App.css"

const SavedRecipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  },);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <div className="recipe-block">
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="ingredients">
              <h4>Ingredients</h4>
              <ol>
                {(recipe.ingredients).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
             </ol>
            </div>
            <p><b>Instructions : </b>{recipe.instructions}</p>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p><b>Cooking Time : </b> {recipe.cookingTime} minutes</p>
          </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default SavedRecipe 
import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./HomeStyle.css"
import "../App.css"


export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  },);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      }); 
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  

  return (
    <div>
      <h1>Recipes</h1>
      
      <ul>
        {recipes.map((recipe) => (
          <div className="recipe-block">
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button className="save-button"
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>
            <div className="ingredients">
              <h4>Ingredients</h4>
              <ol>
                {(recipe.ingredients).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
             </ol>
            </div>
            
            <div className="instructions">
              <p><b>Instructions : </b>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p><b>Cooking Time : </b> {recipe.cookingTime} minutes</p>
            {/* <p>Uploaded by : {recipe.ownerName}</p> */}
            {/* <p>Ingredient : {recipe.ingredients}</p> */}
            
          </li>
          </div>
        ))}
      </ul>
      
    </div>
  )
}

import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("vegan");

  const APP_ID = import.meta.env.VITE_REACT_APP_ID;
  const APP_KEY = import.meta.env.VITE_REACT_APP_KEY;

  useEffect(() => {
    getRecipes();
  }, [query]);

  //   API Call
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      //   console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  // Event handlers
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <SearchBox
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
      <div className="recipes">
        {recipes.map(({ recipe }) => (
          <RecipeCard
            title={recipe.label}
            calories={recipe.calories}
            image={recipe.image}
            ingredients={recipe.ingredients}
            key={recipe.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;

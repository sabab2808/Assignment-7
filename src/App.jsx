import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RecipeList from "./components/RecipeList";
import CookingSidebar from "./components/CookingSidebar";
import Toast from "./components/Toast";

import recipesData from "./data/recipes.json";

import "./App.css";


function App() {

  // ==============================
  // RECIPE DATA
  // ==============================

  const [recipes] = useState(recipesData);


  // ==============================
  // WANT TO COOK STATE
  // ==============================

  const [wantToCook, setWantToCook] = useState([]);


  // ==============================
  // CURRENTLY COOKING STATE
  // ==============================

  const [currentlyCooking, setCurrentlyCooking] = useState([]);


  // ==============================
  // SEARCH STATE
  // ==============================

  const [searchText, setSearchText] = useState("");


  // ==============================
  // TOAST STATE
  // ==============================

  const [toastMessage, setToastMessage] = useState("");


  // ==============================
  // TOAST FUNCTION
  // ==============================

  const showToast = (message) => {

    setToastMessage(message);

    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };


  // ==============================
  // WANT TO COOK
  // ==============================

  const handleWantToCook = (recipe) => {

    // Check whether recipe already exists
    const alreadyAdded = wantToCook.some(
      (item) => item.recipe_id === recipe.recipe_id
    );

    if (alreadyAdded) {
      showToast("Recipe already added!");
      return;
    }


    // Check whether recipe is already cooking
    const alreadyCooking = currentlyCooking.some(
      (item) => item.recipe_id === recipe.recipe_id
    );

    if (alreadyCooking) {
      showToast("Recipe is already cooking!");
      return;
    }


    // Add recipe
    setWantToCook((previousRecipes) => [
      ...previousRecipes,
      recipe
    ]);
  };


  // ==============================
  // PREPARING
  // ==============================

  const handlePreparing = (recipe) => {

    // Remove from Want to Cook
    setWantToCook((previousRecipes) =>
      previousRecipes.filter(
        (item) => item.recipe_id !== recipe.recipe_id
      )
    );


    // Add to Currently Cooking
    setCurrentlyCooking((previousRecipes) => [
      ...previousRecipes,
      recipe
    ]);
  };


  // ==============================
  // SEARCH
  // ==============================

  const filteredRecipes = recipes.filter((recipe) => {

    const search = searchText.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      recipe.recipe_name
        .toLowerCase()
        .includes(search)
      ||
      recipe.short_description
        .toLowerCase()
        .includes(search)
    );
  });


  // ==============================
  // RENDER
  // ==============================

  return (
    <div className="app">

      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />


      <main>

        <Banner />


        {/* OUR RECIPES INTRO */}

        <section
          className="about-section"
          id="about"
        >

          <h2>Our Recipes</h2>

          <p>
            Discover delicious recipes with simple ingredients,
            easy preparation times and useful calorie information.
            Choose your favorite recipe and start cooking today!
          </p>

        </section>


        {/* RECIPE SECTION */}

        <section
          className="recipes-section"
          id="recipes"
        >

          <RecipeList
            recipes={filteredRecipes}
            onWantToCook={handleWantToCook}
          />


          <CookingSidebar
            wantToCook={wantToCook}
            currentlyCooking={currentlyCooking}
            onPreparing={handlePreparing}
          />

        </section>

      </main>


      {/* TOAST */}

      <Toast
        message={toastMessage}
      />

    </div>
  );
}

export default App;
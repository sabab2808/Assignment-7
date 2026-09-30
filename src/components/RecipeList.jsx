import PropTypes from "prop-types";

import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onWantToCook }) => {
  return (
    <div className="recipe-grid">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            recipe={recipe}
            onWantToCook={onWantToCook}
          />
        ))
      ) : (
        <div className="no-results">
          <h3>No recipes found</h3>

          <p>Try searching for another recipe.</p>
        </div>
      )}
    </div>
  );
};

// ==============================
// PROPTYPES
// ==============================

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_id: PropTypes.number.isRequired,

      recipe_image: PropTypes.string.isRequired,

      recipe_name: PropTypes.string.isRequired,

      short_description: PropTypes.string.isRequired,

      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,

      preparing_time: PropTypes.string.isRequired,

      calories: PropTypes.string.isRequired,
    }),
  ).isRequired,

  onWantToCook: PropTypes.func.isRequired,
};

export default RecipeList;

import { Clock3, Flame } from "lucide-react";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe, onWantToCook }) => {
  return (
    <div className="recipe-card">
      {/* Recipe Image */}

      <img
        className="recipe-image"
        src={recipe.recipe_image}
        alt={recipe.recipe_name}
      />

      <div className="recipe-content">
        {/* Recipe Name */}

        <h3>{recipe.recipe_name}</h3>

        {/* Description */}

        <p className="recipe-description">{recipe.short_description}</p>

        <div className="divider"></div>

        {/* Ingredients */}

        <h4>Ingredients: {recipe.ingredients.length}</h4>

        <ul className="ingredients-list">
          {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <div className="divider"></div>

        {/* Time & Calories */}

        <div className="recipe-info">
          <span>
            <Clock3 size={15} />

            {recipe.preparing_time}
          </span>

          <span>
            <Flame size={15} />

            {recipe.calories}
          </span>
        </div>

        {/* Want To Cook */}

        <button className="cook-button" onClick={() => onWantToCook(recipe)}>
          Want to Cook
        </button>
      </div>
    </div>
  );
};

// ==============================
// PROPTYPES
// ==============================

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    recipe_id: PropTypes.number.isRequired,

    recipe_image: PropTypes.string.isRequired,

    recipe_name: PropTypes.string.isRequired,

    short_description: PropTypes.string.isRequired,

    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,

    preparing_time: PropTypes.string.isRequired,

    calories: PropTypes.string.isRequired,
  }).isRequired,

  onWantToCook: PropTypes.func.isRequired,
};

export default RecipeCard;

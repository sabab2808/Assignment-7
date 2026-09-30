import { useMemo } from "react";
import PropTypes from "prop-types";


const CookingSidebar = ({
  wantToCook,
  currentlyCooking,
  onPreparing
}) => {


  // =================================
  // TOTAL PREPARATION TIME
  // =================================

  const totalTime = useMemo(() => {

    return currentlyCooking.reduce(
      (total, recipe) => {

        return total +
          parseInt(recipe.preparing_time);

      },
      0
    );

  }, [currentlyCooking]);


  // =================================
  // TOTAL CALORIES
  // =================================

  const totalCalories = useMemo(() => {

    return currentlyCooking.reduce(
      (total, recipe) => {

        return total +
          parseInt(recipe.calories);

      },
      0
    );

  }, [currentlyCooking]);


  return (

    <aside className="sidebar">


      {/* =================================
          WANT TO COOK
      ================================= */}

      <div className="sidebar-section">

        <h2>
          Want to cook: {wantToCook.length}
        </h2>


        <div className="sidebar-line"></div>


        <div className="table-header">

          <span>
            Name
          </span>

          <span>
            Time
          </span>

          <span>
            Calories
          </span>

          <span></span>

        </div>


        {wantToCook.length === 0 ? (

          <div className="empty-message">

            No recipes added yet.

          </div>

        ) : (

          wantToCook.map((recipe, index) => (

            <div
              className="cooking-row"
              key={recipe.recipe_id}
            >

              <span className="row-number">
                {index + 1}
              </span>


              <span className="recipe-name-small">
                {recipe.recipe_name}
              </span>


              <span>
                {recipe.preparing_time}
              </span>


              <span>
                {recipe.calories}
              </span>


              <button
                className="preparing-button"
                onClick={() => onPreparing(recipe)}
              >
                Preparing
              </button>

            </div>

          ))

        )}

      </div>


      {/* =================================
          CURRENTLY COOKING
      ================================= */}

      <div className="sidebar-section currently-section">

        <h2>
          Currently cooking: {currentlyCooking.length}
        </h2>


        <div className="sidebar-line"></div>


        <div className="current-header">

          <span>
            Name
          </span>

          <span>
            Time
          </span>

          <span>
            Calories
          </span>

        </div>


        {currentlyCooking.length === 0 ? (

          <div className="empty-message">

            Nothing is currently cooking.

          </div>

        ) : (

          currentlyCooking.map((recipe, index) => (

            <div
              className="current-row"
              key={recipe.recipe_id}
            >

              <span>
                {index + 1}
              </span>

              <span>
                {recipe.recipe_name}
              </span>

              <span>
                {recipe.preparing_time}
              </span>

              <span>
                {recipe.calories}
              </span>

            </div>

          ))

        )}

      </div>


      {/* =================================
          TOTAL
      ================================= */}

      <div className="total-section">

        <div>

          <strong>
            Total Time =
          </strong>

          <br />

          {totalTime} minutes

        </div>


        <div>

          <strong>
            Total Calories =
          </strong>

          <br />

          {totalCalories} calories

        </div>

      </div>

    </aside>
  );
};


// ==============================
// PROPTYPES
// ==============================

const recipeShape = PropTypes.shape({

  recipe_id: PropTypes.number.isRequired,

  recipe_image: PropTypes.string.isRequired,

  recipe_name: PropTypes.string.isRequired,

  short_description: PropTypes.string.isRequired,

  ingredients: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,

  preparing_time: PropTypes.string.isRequired,

  calories: PropTypes.string.isRequired

});


CookingSidebar.propTypes = {

  wantToCook: PropTypes.arrayOf(
    recipeShape
  ).isRequired,

  currentlyCooking: PropTypes.arrayOf(
    recipeShape
  ).isRequired,

  onPreparing: PropTypes.func.isRequired

};


export default CookingSidebar;
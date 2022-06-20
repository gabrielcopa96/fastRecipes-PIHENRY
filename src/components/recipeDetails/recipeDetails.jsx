import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe, EliminatedDetailRecipe } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.jsx";

import "./recipeDetails.css";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe);

  const instantDetail = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    instantDetail(getRecipe(recipeId));

    return () => {
      dispatch(EliminatedDetailRecipe());
    };
  }, [instantDetail, recipeId]);

  const handleSteps = () => {
    if (recipe.steps?.length) {
      return recipe.steps?.map((step) => (
        <li key={recipe.steps.findIndex((e) => e === step)}>
          <p className="number-list">
            {recipe.steps.findIndex((e) => e === step) + 1}
          </p>
          <p
            style={{
              textAlign: "justify",
              fontSize: ".95rem",
              fontWeight: "500",
            }}
          >
            {step}
          </p>
        </li>
      ));
    } else {
      return "In this recipe not exists steps currently, sorry";
    }
  };

  console.log(recipeId);

  return (
    <>
      <div className="container-backtohome">
        <Link to="/home">Back to home</Link>
      </div>
      <div className="container-details">
        {Object.keys(recipe).length ? (
          <div className="container-detrecipe">
            <div className="encabezado-detail">
              <h2 className="title-detail">{recipe.title}</h2>
              <img className="img-recipe" src={recipe.image} alt="img-recipe" />
            </div>
            <div className="container-score">
              <div>
                <p className="text-msh">Minutes</p>
                <p>{recipe.minutes}"</p>
              </div>
              <div>
                <p className="text-msh">Score</p>
                <p>{recipe.score}/100</p>
              </div>
              <div>
                <p className="text-msh">HealthScore</p>
                <p>{recipe.healthscore}/100</p>
              </div>
            </div>
            <p className="container-summary">
              {recipe.summary?.replace(/(<([^>]+)>)/gi, "")}
            </p>
            <div className="container-steps">
              <p>Steps</p>
              <div className="listSteps">{handleSteps()}</div>
            </div>
            <div className="container-diets">
              <p>Diets</p>
              <ul className="list-diets">
                {recipe.diets ? (
                  recipe.diets?.map((diet) => (
                    <li key={recipe.diets.findIndex((e) => e === diet)}>
                      {diet}
                    </li>
                  ))
                ) : recipe.dieta ? (
                  recipe.dieta.map(({ id_typediet, name }) => (
                    <li key={id_typediet}>{name}</li>
                  ))
                ) : (
                  <p>has no existing diets</p>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default RecipeDetails;

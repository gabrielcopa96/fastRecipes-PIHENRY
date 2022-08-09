import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions";
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.jsx";

import styles from "./recipeDetails.module.css";

const RecipeDetails = () => {
  const { recipeId } = useParams();


  const { data: recipe, error, isLoading } = useQuery(
    ["recipe", recipeId],
    () => getRecipeById(recipeId),
    { retry: 1 }
  );

  const handleSteps = () => {
    if (recipe.steps?.length) {
      return recipe.steps?.map((step) => (
        <li key={recipe.steps.findIndex((e) => e === step)}>
          <p className={styles.numberList}>
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

  return (
    <>
      <div className={styles.containerBacktohome}>
        <Link to="/home">Back to home</Link>
      </div>
      <div className={styles.containerDetails}>
        {!isLoading ? (
          <div className={styles.containerDetrecipe}>
            <div className={styles.encabezadoDetail}>
              <h2 className={styles.titleDetail}>{recipe.title}</h2>
              <img className={styles.imgRecipe} src={recipe.image} alt="img-recipe" />
            </div>
            <div className={styles.containerScore}>
              <div>
                <p className={styles.textMsh}>Minutes</p>
                <p>{recipe.minutes}"</p>
              </div>
              <div>
                <p className={styles.textMsh}>Score</p>
                <p>{recipe.score}/100</p>
              </div>
              <div>
                <p className={styles.textMsh}>HealthScore</p>
                <p>{recipe.healthscore}/100</p>
              </div>
            </div>
            <p className={styles.containerSummary}>
              {recipe.summary?.replace(/(<([^>]+)>)/gi, "")}
            </p>
            <div className={styles.containerSteps}>
              <p>Steps</p>
              <div className={styles.listSteps}>{handleSteps()}</div>
            </div>
            <div className={styles.containerDiets}>
              <p>Diets</p>
              <ul className={styles.listDiets}>
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
      </div>`
    </>
  );
};

export default RecipeDetails;

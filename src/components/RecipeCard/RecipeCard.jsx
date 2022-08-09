import { Link } from 'react-router-dom';
import styles from "./recipecard.module.css";

const RecipeCard = ({title, image, diets, dieta, id}) => {
  const handlerDiets = () => { 
    if(diets) return diets.map((x,y) => (<p key={y}>{x}</p>));
    return dieta ? dieta.map((x,y) => (<p key={y}>{x.name}</p>)) : null
  }

  return (
    <>
      <div
        className={`${styles.cardRecipe} ${styles.containerChildCard}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <div className={styles.cardBody}>
            {handlerDiets()}
          </div>
          <Link className={styles.btnCard} to={`/home/${id}`}>View Details</Link>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;

import { Link } from 'react-router-dom';
import "./Recipecard.css";

const RecipeCard = ({title, image, diets, dieta, id}) => {
  const handlerDiets = () => { 
    if(diets) return diets.map(x => (<p key={diets.findIndex((e) => e === x)}>{x}</p>));
    return dieta ? dieta.map(x => (<p key={x.id_typediet}>{x.name}</p>)) : null
  }

  return (
    <>
      <div
        className="card-recipe container-child-card"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <div className="card-body">
            {handlerDiets()}
          </div>
          <Link className="btn-card" to={`/home/${id}`}>View Details</Link>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;

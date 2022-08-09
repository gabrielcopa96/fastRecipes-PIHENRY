import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { getRecipes } from "../../redux/actions";
import styles from "./recetas.module.css";
import Paginate from "../Paginate/Paginate.jsx";
import Filtro from "../Filtro/Filtro.jsx";
import { Spinner } from "../Spinner/Spinner.jsx";
import { useQuery } from "react-query";

const Recetas = () => {

  const { data: recetas, error, isLoading } = useQuery(["recetas"], getRecipes, { retry: 1 });

  const [datos, setDatos] = useState({
    currentPage: 1,
    pageNumberLimit: 6,
    selectOrder: "",
    itemsPerPage: 9,
  });
  const [term, setTerm] = useState(""); 
  const [search, setSearch] = useState("");

  const indexOfLastItem = datos.currentPage * datos.itemsPerPage; //! (1 * 9) -> 9

  const indexOfFirstItem = indexOfLastItem - datos.itemsPerPage; //! (9 - 9) -> 0

  const currentItems = recetas && recetas.slice(indexOfFirstItem, indexOfLastItem);

  console.log(recetas);

  return (
    <>
      <Filtro
        search={search}
        setTerm={setTerm}
        data={datos}
        term={term}
        recetas={recetas}
        setData={setDatos}
        setSearch={setSearch}
        filter={currentItems}
      />

        <Paginate
          data={datos}
          recetas={recetas}
          setData={setDatos}
          setSearch={setSearch}
          filter={currentItems}
        />
        
      <div className={styles.containerCards}>
        {isLoading ? (
          <Spinner />
        ) : (
          currentItems?.map((x, y) => (
            <RecipeCard
              key={y}
              title={x.title}
              image={x.image}
              diets={x.diets}
              dieta={x.dieta}
              id={x.id}
            />
          ))
        )}
      </div>

      {
        error && <span>Error en el servidor</span>
      }

    </>
  );
};

export default Recetas;

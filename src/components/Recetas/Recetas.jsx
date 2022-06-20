import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { getAllRecipes } from "../../redux/actions";
import "./Recetas.css";
import Paginate from "../Paginate/Paginate.jsx";
import Filtro from "../Filtro/Filtro.jsx";
import { Spinner } from "../Spinner/Spinner.jsx";

const Recetas = () => {
  const recetas = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    loading: true,
    currentPage: 1, // !El inicio de mi pagina o cada una  de ellas
    paginado: [],
    pageNumberLimit: 6,
    selectOrder: "",
    itemsPerPage: 9,
  });
  const [term, setTerm] = useState(""); //? estado para el filtrado en tiempo real
  const [maxpageNumberLimit, setMaxPageNumberLimit] = useState(6); //! 6
  const [minpageNumberLimit, setMinPageNumberLimit] = useState(0); //! 0
  const [search, setSearch] = useState("");

  const instantCallback = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    if (recetas.length === 0) {
      instantCallback(getAllRecipes()); //! Utilizo el useDisptach para dispachar mi funcion que recibe todas mis recetas
      setData({ ...data, loading: false });
    }
  }, [instantCallback]);

  const indexOfLastItem = data.currentPage * data.itemsPerPage; //! (1 * 9) -> 9

  const indexOfFirstItem = indexOfLastItem - data.itemsPerPage; //! (9 - 9) -> 0

  const currentItems = recetas.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Filtro
        search={search}
        setTerm={setTerm}
        data={data}
        term={term}
        recetas={recetas}
        setData={setData}
        setSearch={setSearch}
        filter={currentItems}
      />

      <div className="container-cards">
        {currentItems?.length ? (
          currentItems.map(({ id, title, summary, image, diets, dieta }) => (
            <RecipeCard
              id={id}
              title={title}
              dieta={dieta}
              summary={summary}
              image={image}
              diets={diets}
              key={id}
            />
          ))
        ) : (
          <Spinner></Spinner>
        )}
      </div>

      {currentItems?.length ? (
        <Paginate
          setMaxPageNumberLimit={setMaxPageNumberLimit}
          setMinPageNumberLimit={setMinPageNumberLimit}
          data={data}
          recetas={recetas}
          setData={setData}
          maxpageNumberLimit={maxpageNumberLimit}
          minpageNumberLimit={minpageNumberLimit}
        />
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Recetas;

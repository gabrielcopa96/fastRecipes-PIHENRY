import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  getDietas,
  // filteredBdandApi,
  // filteredDietas,
  // filteredOrder,
  // filteredSearchRealTime,
} from "../../redux/actions/";
import "./Filtro.css";

const Filtro = ({ setData, data, recetas }) => {
  // const dietas = useSelector((state) => state.diets);

  // getDietas
  const { data: dietas, error, isLoading } = useQuery(["dietas"], getDietas, { retry: 3 });

  const [orden, setOrden] = useState("");
  const [search, setSearch] = useState("");


  const [diet, setDiet] = useState({
    diets: [],
  });

  // const handleFilterForDieta = (e) => {
  //   dispatch(filteredDietas(e.target.value));
  //   setDiet({
  //     ...diet,
  //     diets: [...diet.diets, e.target.value],
  //   });
  //   setData({ ...data, currentPage: 1 });
  // };

  // const handleApiBd = (e) => {
  //   dispatch(filteredBdandApi(e.target.value));
  //   setData({ ...data, currentPage: 1 });
  // };

  // const handleFilterSort = (e) => {
  //   e.preventDefault();
  //   dispatch(filteredOrder(e.target.value));
  //   setData({ ...data, currentPage: 1 });
  //   setOrden(`ordenado ${e.target.value}`);
  // };

  // const handleSearchRecipesRealTime = (e) => {
  //   e.preventDefault();
  //   dispatch(filteredSearchRealTime(e.target.value));
  //   setSearch(`filtrado ${e.target.value}`);
  // };

  console.log(dietas);



  return (
    <>
      {/* <div>
        {
          isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              {
                dietas.map((x,y) => (
                  <span key={y} value={x.name}>{x.name}</span>
                ))
              }
            </>
            )
        }
      </div> */}
      <div className="container-filtro">
        <div className="block-filter">
          {/* <label className="label-search">Search:</label>
          <input
            type="text"
            className="search-input"
            placeholder="search recipes"
            name="search"
            onChange={(e) => handleSearchRecipesRealTime(e)}
          />
        </div>
        <select className="filter-order" onChange={(e) => handleFilterSort(e)}>
          <option disabled>Order by</option>
          <option value="asc">A -Z</option>
          <option value="desc">Z - A</option>
        </select> */}
        {/* <select
          className="filter-diet"
          // onChange={(e) => handleFilterForDieta(e)}
        >
          <option value="all recipes">All Recipes</option>
          {dietas?.map(({ id_typediet, name }) => (
            <option key={id_typediet} value={name}>
              {name}
            </option>
          ))}
        </select> */}
        {/* <select className="select-bdapi" onChange={(e) => handleApiBd(e)}>
          <option disabled>Filter for Diets</option>
          <option value="all">All Recipes</option>
          <option value="api">Api</option>
          <option value="bd">DataBase</option>
        </select> */}
        </div>
      </div>
    </>
  );
};

export default Filtro;

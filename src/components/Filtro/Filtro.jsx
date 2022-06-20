import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDiets,
  filteredBdandApi,
  filteredDietas,
  filteredOrder,
  filteredSearchRealTime,
} from "../../redux/actions/";
import "./Filtro.css";

const Filtro = ({ setData, data, recetas }) => {
  const dietas = useSelector((state) => state.diets);

  const [orden, setOrden] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const [diet, setDiet] = useState({
    diets: [],
  });

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  const handleFilterForDieta = (e) => {
    dispatch(filteredDietas(e.target.value));
    setDiet({
      ...diet,
      diets: [...diet.diets, e.target.value],
    });
    setData({ ...data, currentPage: 1 });
  };

  const handleApiBd = (e) => {
    dispatch(filteredBdandApi(e.target.value));
    setData({ ...data, currentPage: 1 });
  };

  const handleFilterSort = (e) => {
    e.preventDefault();
    dispatch(filteredOrder(e.target.value));
    setData({ ...data, currentPage: 1 });
    setOrden(`ordenado ${e.target.value}`);
  };

  const handleSearchRecipesRealTime = (e) => {
    e.preventDefault();
    dispatch(filteredSearchRealTime(e.target.value));
    setSearch(`filtrado ${e.target.value}`);
  };

  return (
    <Fragment>
      <div className="container-filtro">
        <div className="block-filter">
          <label className="label-search">Search:</label>
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
        </select>
        <select
          className="filter-diet"
          onChange={(e) => handleFilterForDieta(e)}
        >
          <option value="all recipes">All Recipes</option>
          {dietas?.map(({ id_typediet, name }) => (
            <option key={id_typediet} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select className="select-bdapi" onChange={(e) => handleApiBd(e)}>
          <option disabled>Filter for Diets</option>
          <option value="all">All Recipes</option>
          <option value="api">Api</option>
          <option value="bd">DataBase</option>
        </select>
      </div>
    </Fragment>
  );
};

export default Filtro;

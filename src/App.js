import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.jsx'
import Recetas from './components/Recetas/Recetas.jsx'
import CreateRecipe from './components/CreateRecipe/CreateRecipe.jsx'
import RecipeDetails from './components/recipeDetails/recipeDetails.jsx'
import Welcome from './components/Welcome/Welcome.jsx'

import './App.css';
import { Fragment } from 'react';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={
          <Fragment>
            <NavBar />
            <Recetas />
          </Fragment>
        } />
        <Route path="/home/createRecipe" element={
          <Fragment>
            <NavBar />
            <CreateRecipe />
          </Fragment>
        } />
        <Route path="/home/:recipeId" element={
          <Fragment>
            <NavBar />
            <RecipeDetails />
          </Fragment>
        } />
      </Routes>
    </div>
  );
}

export default App;

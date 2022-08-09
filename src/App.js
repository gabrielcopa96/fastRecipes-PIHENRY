import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.tsx'
import Recetas from './components/Recetas/Recetas.jsx'
import CreateRecipe from './components/CreateRecipe/CreateRecipe.jsx'
import RecipeDetails from './components/recipeDetails/recipeDetails.jsx'
import Welcome from './components/Welcome/Welcome.tsx'

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/home" element={
          <>
            <NavBar />
            <Recetas />
          </>
        } />
        <Route path="/home/createRecipe" element={
          <>
            <NavBar />
            <CreateRecipe />
          </>
        } />
        <Route path="/home/:recipeId" element={
          <>
            <NavBar />
            <RecipeDetails />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;

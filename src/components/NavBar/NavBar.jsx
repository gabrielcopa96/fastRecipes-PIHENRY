import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { NavBarRecipes, TituloNavBar, TituloNavBar2, ListaNavBar, BtnCreateRecipe } from './NavBarStyled.jsx'

export const NavBar = () => {
    return (
        <Fragment>
            <NavBarRecipes>
                <TituloNavBar>Fast <TituloNavBar2>Recipes</TituloNavBar2></TituloNavBar>
                <ListaNavBar>
                    <li><Link to='/home'>Home</Link></li>
                    <BtnCreateRecipe><Link to='/home/createRecipe'>Create Recipe</Link></BtnCreateRecipe>
                </ListaNavBar>
            </NavBarRecipes>
        </Fragment>
    )
}
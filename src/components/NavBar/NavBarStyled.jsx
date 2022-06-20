import styled from "styled-components";

const colores = {
  fondo: "rgb(24, 29, 34)",
  color: "hsl(51, 100%, 50%)",
  color2: "hsl(0, 0%, 100%)",
  exito: "hsl(142, 90%, 61%)",
};

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const NavBarRecipes = styled.nav`
  background-color: ${colores.fondo};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    background-color: ${colores.fondo};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const TituloLogo = styled.h2`
  font-size: 1rem;
`;

export const TituloNavBar = styled.h2`
  font-size: 1.4rem;
  color: ${colores.color2};
  margin-left: 9rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif,
    cursive;

  @media ${devices.tablet} {
      margin-left: 1.5rem;
      font-size: 1.2rem;
  }
`;

export const TituloNavBar2 = styled.span`
  color: ${colores.color};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  @media ${devices.tablet} {
    font-size: 1.4rem;
}
`;

export const ListaNavBar = styled.ul`
  display: inline-flex;
  margin-right: 7rem;

  li {
    list-style: none;
    margin: 0.2rem 1rem;
    padding: 0.55rem;

    a {
      text-decoration: none;
      color: ${colores.color2};
      font-weight: 700;

      &:hover {
        color: hsl(51, 100%, 50%);
      }
    }
  }

  @media ${devices.tablet} {
    margin-right: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .1rem;

    li {
        margin: .1rem .5rem;
        padding: .1rem;
        text-align: center;
        width: 100%;


        a{
            font-weight: 600;
        }
    }
}
`;

export const BtnCreateRecipe = styled.li`
  background-color: hsl(51, 100%, 50%);
  border-radius: 0.3rem;

  &:hover {
    background-color: rgb(201, 161, 53);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  a {
    color: rgb(24, 29, 34) !important;
    font-weight: 600;

    &:hover {
      color: hsl(0, 0%, 100%);
    }
  }
`;

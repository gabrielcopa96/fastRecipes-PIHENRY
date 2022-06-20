import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  fondo: "hsl(51, 100%, 50%)",
  borde: "hsl(51, 100%, 50%)",
  borde2: "#0075FF",
  error: "hsl(0, 43%, 53%)",
  exito: "hsl(142, 90%, 61%)",
};

export const GrupoVolver = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem auto;
`;

export const FormRecipe = styled.form`
  display: grid;
  width: 70%;
  margin: 0 auto;
  padding-top: 2rem;
  border-radius: .5rem .5rem 0 0;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  background: hsl(0, 0%, 95%);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    width: 85%;
  }
`;

export const LabelRecipe = styled.label`
  display: block;
  font-weight: 600;
  margin-left: 35px;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.validate === "false" &&
    css`
      color: ${colores.error};
    `}
`;

export const GrupoInput = styled.div`
  position: relative;
  margin-left: 45px;
  z-index: 90;
`;

export const InputRecipe = styled.input`
  width: 70%;
  background: #fff;
  border-radius: .5rem;
  height: 30px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  &:hover {
    border: 3px solid ${colores.borde};
  }

  ${(props) =>
    props.validate === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.validate === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

export const SelectDiets = styled.select`
  width: 70%;
  background: #fff;
  border-radius: .5rem;
  height: 30px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  &:hover {
    border: 3px solid ${colores.borde};
  }
`;

export const LeyendaError = styled.p`
  font-size: 12px;
  margin-left: 40px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.validate === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.validate === "false" &&
    css`
      display: block;
    `}
`;

export const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  left: 75%;
  top: 8px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0
    ${(props) =>
      props.validate === "false" &&
      css`
        opacity: 1;
        color: ${colores.error};
      `}
    ${(props) =>
      props.validate === "true" &&
      css`
        opacity: 1;
        color: ${colores.exito};
      `};
`;

export const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

export const BotonEnviar = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  font-family: "Bebas Neue";
  font-size: 1.5rem;
  background: ${colores.fondo};
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

export const Summary = styled.textarea`
  width: 70%;
  background: #fff;
  border-radius: 0.5rem;
  height: 5rem;
  // padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  &:hover {
    border: 3px solid ${colores.borde};
  }

  ${(props) =>
    props.validate === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.validate === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

export const MensajeExito = styled.p`
    font-size: 14px;
    background: hsl(142, 90%, 61%);
    width: 50%;
    text-align:center;
    padding: 2rem;
    // color: ;
    // display: none;
`;

export const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  text-align: center;
  background: ${colores.error};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export const ContenedorBtnAddSteps = styled.div`
  width: 70%;
  background: hsl(0, 0%, 95%);
  margin: 0 auto 1rem auto;
  border-radius: 0 0 .5rem .5rem;
  text-aling: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    width: 85%;
  }
`;

export const AddSteps = styled.button`
  height: 30px;
  line-height: 30px;
  width: 8%;
  margin: 2.5rem auto;
  text-align: center;
  margin-left: 46%;
  background: ${colores.fondo};
  color: #000;
  font-family: "Bebas Neue";
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.1s ease all;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }

  @media (max-width: 768px) {
    width: 30%;
    margin-left: 35%;
  }

  @media (max-width: 380px) {
    width: 30%;
  }
`;

export const ListDietsAdd = styled.ul`
  list-style: none;
`;

export const DietsAdd = styled.li`
  background: ${colores.fondo};
  margin: 0 .8rem 0 0;
  padding: .2rem;
  border-radius: .4rem;
  display: inline;
`;

export const BtnEliminar = styled.button`
  background: transparent;
  margin-left: .35rem;
  border: 1px solid hsl(0, 0%, 95%);
  border-radius: 50%;
  cursor: pointer;

  // &hover: {
  //   background: rgba(163, 163, 163, 1);
    
  // }
`;

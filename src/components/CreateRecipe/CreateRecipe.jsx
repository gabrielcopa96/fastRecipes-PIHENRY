import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets } from "../../redux/actions";
import { Link } from "react-router-dom";
import { postRecipes } from "../../redux/actions";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faExclamationTriangle } from "@fontawesome/free-solid-svg-icons";
import InputCreateRecipe from "./elements/ContenidoInput.jsx";
import SelectCreateRecipe from "./elements/selectDietsCreate.jsx";
import SummaryCreateRecipe from "./elements/SummaryCreate.jsx";
import {
  FormRecipe,
  ContenedorBotonCentrado,
  BotonEnviar,
  MensajeExito,
  AddSteps,
  ContenedorBtnAddSteps,
  MensajeError,
  GrupoVolver,
} from "./createRecipeStyled.jsx";

import "./CreateRecipe.css";
import { useCallback } from "react";

const CreateRecipe = () => {
  const diets = useSelector((state) => state.diets);

  const dispatch = useDispatch();

  const [title, setTitle] = useState({ campo: "", validate: null });
  const [puntuacion, setPuntuacion] = useState({ campo: 0, validate: null });
  const [health, setHealth] = useState({ campo: 0, validate: null });
  const [images, setImages] = useState({ campo: "", validate: null });
  const [minutos, setMinutos] = useState({ campo: 0, validate: null });
  const [resumen, setResumen] = useState({ campo: "", validate: null });
  const [tipos, setTipos] = useState({ campo: [], validate: null });
  const [formValidate, setFormValidate] = useState(null);

  const [input, setInput] = useState({
    title: "",
    healthscore: 0,
    image: "",
    score: 0,
    minutes: 0,
    steps: [],
    summary: "",
    diets: [],
  });

  const [steps, setSteps] = useState({
    text: 1,
    step: "",
    validStep: null,
  });

  const instantCallback = useCallback(dispatch, [dispatch]);

  // diets
  useEffect(() => {
    if (diets.length === 0) {
      instantCallback(getAllDiets());
    }
  }, [instantCallback]);

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  const handleSteps = (e) => {
    setInput({
      ...input,
      steps: [...input.steps, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    if (
      title.validate === "true" &&
      puntuacion.validate === "true" &&
      health.validate === "true" &&
      images.validate === "true" &&
      minutos.validate === "true" &&
      resumen.validate === "true"
    ) {
      setFormValidate(true);
      dispatch(postRecipes(input)); //disparo una funcion -> POST
      setInput({
        title: "",
        healthscore: 0,
        image: "",
        score: 0,
        minutes: 0,
        steps: [],
        summary: "",
        diets: [],
      });
    } else {
      setFormValidate(false);
    }
  };

  const handleAddSteps = (e) => {
    const miStep = document.getElementById("steps");
    const inputStep = document.createElement("input");
    const labelStep = document.createElement("label");
    setSteps({ ...steps, text: steps.text + 1 });
    labelStep.textContent = `step ${steps.text}`;
    inputStep.type = "text";
    inputStep.placeholder = `step ${steps.text}`;
    inputStep.value = e.target.value;
    inputStep.name = "steps";
    inputStep.onchange = (e) => {
      handleSteps(e);
    };
    miStep.appendChild(labelStep);
    miStep.appendChild(inputStep);
  };

  const expresiones = {
    letras2: /^[a-zA-ZÀ-ÿ\s\,]{4,120}$/, // Letras y espacios, pueden llevar acentos.
    sumario: /^.{10,255}$/, // 2 a 255 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    puntaje: /^\d{1,3}$/, // 1 a 2 numeros.
    minutosC: /^\d{1,2}$/,
    imagenes:
      /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/,
    letrasSinEspacios: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
  };

  return (
    <>
      <GrupoVolver>
        <Link
          style={{
            color: "rgb(24, 29, 34)",
            textDecoration: "none",
            padding: ".5rem",
            borderRadius: ".5rem",
            fontWeight: "600",
            backgroundColor: "hsl(51, 100%, 50%)",
            hoverBackgroundColor: "hsl(45, 95%, 45%)",
          }}
          to="/home"
        >
          Back to Home
        </Link>
      </GrupoVolver>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontFamily: "Bebas Neue",
        }}
      >
        Create your Recipe
      </h2>
      <FormRecipe onSubmit={(e) => handleSubmit(e)}>
        <InputCreateRecipe
          label="Title"
          placeholder="Title"
          type="text"
          name="title"
          value={input.title}
          estado={title}
          setEstado={setTitle}
          handleChangeInput={(e) => handleChangeInput(e)}
          leyError="El titulo debe contener como minimo 4 digitos y solo puede contener numeros, letras y comas"
          expreRegular={expresiones.letras2}
        />
        <InputCreateRecipe
          label="Score"
          placeholder="1 - 100"
          type="number"
          name="score"
          estado={puntuacion}
          setEstado={setPuntuacion}
          value={input.score}
          handleChangeInput={handleChangeInput}
          leyError="Debe contener un rango de 1 a 100"
          expreRegular={expresiones.puntaje}
        />
        <InputCreateRecipe
          label="HealthScore"
          placeholder="1 - 100"
          type="number"
          name="healthscore"
          estado={health}
          setEstado={setHealth}
          value={input.healthscore}
          handleChangeInput={handleChangeInput}
          leyError="Debe contener un rango de 1 a 100"
          expreRegular={expresiones.puntaje}
        />
        <InputCreateRecipe
          label="Image"
          placeholder="imageURL"
          type="text"
          name="image"
          value={input.image}
          estado={images}
          setEstado={setImages}
          handleChangeInput={handleChangeInput}
          leyError="Solo recibe imagenes por URL"
          expreRegular={expresiones.imagenes}
        />
        <InputCreateRecipe
          label="Minutes"
          placeholder="minutes..."
          type="number"
          name="minutes"
          value={input.minutes}
          estado={minutos}
          setEstado={setMinutos}
          handleChangeInput={handleChangeInput}
          leyError="Solo se recibe numeros"
          expreRegular={expresiones.minutosC}
        />
        <SelectCreateRecipe
          label="Diets"
          names="diets"
          handleSelect={handleSelect}
          estado={tipos}
          setEstado={setTipos}
          diets={diets}
          input={input}
          dieta={input.diets}
          setInput={setInput}
          leyError="Agrega por lo menos 1 tipo de dieta"
          expreRegular={expresiones.letrasSinEspacios}
        />
        <div className="image-recipe">
          {input.image && <img src={input.image} alt="" />}
        </div>
        <SummaryCreateRecipe
          label="Summary"
          name="summary"
          handleChangeInput={handleChangeInput}
          max="255"
          min="10"
          value={input.summary}
          estado={resumen}
          setEstado={setResumen}
          leyError="Agrega por lo menos 10 caracteres"
          expreRegular={expresiones.sumario}
        />
        <div id="steps" className="list-steps"></div>

        {formValidate === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
              <b>Error:</b> Please fill in the form correctly
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <BotonEnviar type="submit">Create Recipe</BotonEnviar>
          {formValidate === true && (
            <MensajeExito>the form was sent successfully!</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </FormRecipe>
      <ContenedorBtnAddSteps>
        <AddSteps onClick={(e) => handleAddSteps(e)}>Add Step</AddSteps>
      </ContenedorBtnAddSteps>
    </>
  );
};

export default CreateRecipe;

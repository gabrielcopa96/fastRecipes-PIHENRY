import React from "react";
import {
  SelectDiets,
  IconValidation,
  LabelRecipe,
  GrupoInput,
  LeyendaError,
  ListDietsAdd,
  DietsAdd,
  BtnEliminar,
} from "../createRecipeStyled";
import { faCircleCheck } from "@fontawesome/free-solid-svg-icons";

const selectDietsCreate = ({
  label,
  leyError,
  handleSelect,
  diets,
  names,
  dieta,
  input,
  expreRegular,
  setInput,
}) => {
  const handelEliminatedDiets = (e, diet) => {
    e.preventDefault();

    setInput({
      ...input,
      diets: dieta.filter((x) => x !== diet),
    });

    console.log(input);
    // mapeoDieta = mapeoDieta.filter((x) => x !== pruebaValue);

    console.log("estas son mis dietas", dieta);
  };
  return (
    <div>
      <LabelRecipe htmlFor="diets">{label}</LabelRecipe>
      <GrupoInput>
        <SelectDiets onChange={(e) => handleSelect(e)} name={names} id="diets">
          {diets?.map(({ id_typediet, name }) => (
            <option key={id_typediet} value={name}>
              {name}
            </option>
          ))}
        </SelectDiets>
        <IconValidation icon={faCircleCheck}></IconValidation>
      </GrupoInput>
      {/* s.findIndex((e) => e === el) */}
      <ListDietsAdd>
        {dieta.map((el, key) => (
          <DietsAdd key={key}>
            {el}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={(e) => handelEliminatedDiets(e, el)}
            >
              X
            </span>
          </DietsAdd>
        ))}
      </ListDietsAdd>
      <LeyendaError>{leyError}</LeyendaError>
    </div>
  );
};

export default selectDietsCreate;

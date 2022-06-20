import React from "react";
import {
  LabelRecipe,
  GrupoInput,
  LeyendaError,
  Summary,
} from "../createRecipeStyled.jsx";

const SummaryCreate = ({
  label,
  value,
  placeholder,
  handleChangeInput,
  name,
  leyError,
  max,
  min,
  estado,
  setEstado,
  expreRegular
}) => {
  const validacion = () => {
    if (expreRegular) {
      if (expreRegular.test(value)) {
        setEstado({ ...estado, validate: "true" });
        console.log(estado.validate);
      } else {
        setEstado({ ...estado, validate: "false" });
        console.log(estado.validate);
      }
    }
  };

  return (
    <div>
      <LabelRecipe validate={estado.validate}>{label}</LabelRecipe>
      <GrupoInput>
        <Summary
          value={value}
          placeholder={placeholder}
          onKeyUp={validacion}
          onBlur={validacion}
          name={name}
          max={max}
          min={min}
          validate={estado.validate}
          onChange={(e) => handleChangeInput(e)}
        />
        {/* <IconValidation icon={faCircleCheck}></IconValidation> */}
      </GrupoInput>
      <LeyendaError validate={estado.validate}>{leyError}</LeyendaError>
    </div>
  );
};

export default SummaryCreate;

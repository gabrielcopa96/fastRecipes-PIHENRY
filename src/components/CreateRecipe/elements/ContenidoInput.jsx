import React from "react";
import {
  GrupoInput,
  LabelRecipe,
  InputRecipe,
  IconValidation,
  LeyendaError,
} from "../createRecipeStyled.jsx";
import { faCircleCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ContenidoInput = ({
  label,
  placeholder,
  type,
  leyError,
  name,
  handleChangeInput,
  expreRegular,
  value,
  // max,
  // min,
  estado,
  setEstado,
}) => {
  
  const validacion = () => {
    if (expreRegular) {
      if (expreRegular.test(value)) {
        setEstado({ ...estado, validate: "true" });
        console.log(estado.validate)
      } else {
        setEstado({ ...estado, validate: "false" });
        console.log(estado.validate)
      }
    }
  };

  return (
    <div>
      <LabelRecipe validate={estado.validate}>{label}</LabelRecipe>
      <GrupoInput>
        <InputRecipe
          type={type}
          value={value}
          name={name}
          // max={max}
          // min={min}
          placeholder={placeholder}
          onChange={handleChangeInput}
          onKeyUp={validacion}
          onBlur={validacion}
          validate={estado.validate}
        />
        <IconValidation validate={estado.validate} icon={estado.validate === 'true' ? faCircleCheck : faTimesCircle} ></IconValidation>
      </GrupoInput>
      <LeyendaError validate={estado.validate}>{leyError}</LeyendaError>
    </div>
  );
};

export default ContenidoInput;

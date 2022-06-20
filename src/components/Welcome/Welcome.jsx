import React from "react";
import "./Welcome.css";
import fondo from "../../img/fondo.jpg";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div style={{backgroundImage: `url(${fondo})`}} className="container-welcome">
      <div className="Welcome">
        
        <h1 className="logo-welcome">Fast<span className="title-2">Recipes</span></h1>
        {/* <h1>Welcome!</h1> */}
        <Link className="btn-welcome" to="/home">Hacer click aqui para ir</Link>
      </div>
    </div>
  );
};

export default Welcome;

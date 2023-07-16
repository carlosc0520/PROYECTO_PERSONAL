import React, { useEffect, useState } from "react";
import estilos from "./estilos.css";
import Navegacion from "./Components/Navegacion";
import 'rsuite/dist/rsuite.min.css';
import Contenedor from "./Components/Contenedor";
import IconContacto from "./Components/IconContacto";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);


const App = () => {


  return (
    <div>
      <Navegacion />
      <Contenedor />
      <IconContacto />
    </div>
  )
};


export default App;
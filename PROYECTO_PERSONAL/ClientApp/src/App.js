import React, {Suspense, useEffect, useState } from "react";
// import { , Fragment } from 'react'

import { BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom'


import Navegacion from "./Components/Navegacion";
import 'rsuite/dist/rsuite.min.css';
import Contenedor from "./Components/Contenedor";
import IconContacto from "./Components/IconContacto";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import Transform from "./Components/Transform";
import Transform2 from "./Components/Transform2";

library.add(fas);


const App = () => {

  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')


  return (
    <AppRouter basename={baseUrl}>
      <Suspense>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <Navegacion />
                <Contenedor />
                <IconContacto />
              </div>
            }
          />

          <Route path="/transform" element={<Transform />} />
          <Route path="/transform-marco" element={<Transform2 />} />

          <Route path='*' element={<div>
            <Navegacion />
            <Contenedor />
            <IconContacto />
          </div>} />

        </Routes>
      </Suspense>
    </AppRouter>
  )
};


export default App;
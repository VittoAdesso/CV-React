//tengo que importar los componenetes, el archivo cv, react y usetate

import React, { useState } from "react";
import './App.css';
//IMPORTO LOS COMPNENTES
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Education from './components/Education/Education';
import Experience from "./components/Experience/Experience";
import More from "./components/More/More.jsx"

// IMPORTO ARCHIVO CV ... 
import { CV } from "./CV/CV"

// Hago un destructuring, para decirle que acceda a los datos 
const { hero, education, experience, languages, habilities, volunteer, } = CV ; 

function App() {

  // el useState es un hook, para manejar más cómodamente los componenetes, y así le llamo
  const [showEducation, setShowEducation] = useState(true); // funcionalidad de botones y llamadas 

    return (
      <div className="App">

        {/* LLAMO AHORA LOS PROPS O VARIABLES, HIJOS PARA QUE TENGAN VALOR sin ello no me llama a los valores ni pide nada */}
          <Hero hero={ hero }/>
          <About hero={ hero } />

{/* aquí comienza el juego  */}
          <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>

            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>

{/* hago ésta analogía para que me muestre una cosa u otra, de acuerdo a lo que le de al botón  */}
            <div>
                {showEducation ? (
                  <Education education={education} />
                ) : (
                  <Experience experience={experience} />
                )}
            </div>

          {/* <Education education= { education } />
          <Experience experience= { experience } /> */}
          
          <More languages={ languages } habilities={ habilities } volunteer={ volunteer } />
          
            
      </div>
    );
}

export default App;

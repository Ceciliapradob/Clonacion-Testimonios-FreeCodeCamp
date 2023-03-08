import Testimonio from './componentes/Testimonio'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Esto es lo que dicen nuestros alumnos de FreeCodeCamp:</h1>
        <Testimonio 
        nombre="Alejandra"
        imagen="chica"
        cargo="Desarrolladora front end"
        texto="Hola soy Alejandra, tengo 22 años y soy desarrolladora front end gracias a todo lo que aprendi en FreeCodeCamp,
        quiero seguir sumando experiencia en el rubro y seguir creciendo en lo profesional, para conseguir el trabajo de mis sueños en Spotify"/>
        <Testimonio 
        imagen="chico"
        nombre="Fernando"
        cargo="Data Science"
        texto="Hola soy Fernando, desde chico me encanta programar y soy apasionada con mi carrera, aprendo rapido y me gusta el trabajo en equipo"/>

<Testimonio 
        nombre="Lucas"
        imagen="chicote"
        cargo="Testing"
        texto="Hola soy Lucas, tengo 22 años y soy testing junior gracias a todo lo que aprendi en Henry y a Cecilia Prado quien me ayudo en el proceso 
        de la carrera, quiero seguir sumando experiencia en el rubro y seguir creciendo en lo profesional."/>
      </div>
    </div>
  );
}

export default App;

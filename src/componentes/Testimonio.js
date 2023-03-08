import React from 'react';
import Chica from  '../imagenes/foto-chica.jpg'
import './Testimonios.css';



function Testimonio(props) {
    return (
      <div className='contenedor-testimonios'>
        <img className='imagen-testimonio'  src={require(`../imagenes/foto-${props.imagen}.jpg`)}alt='foto de chica' />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre'><strong>{props.nombre}</strong></p>
            <p className='cargo'>{props.cargo}</p>
            <p className='texto'>"{props.texto}</p>
        </div>
      </div>
    );
}

export default Testimonio; 
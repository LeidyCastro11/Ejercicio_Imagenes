import React from 'react'
import '../utils/CSS/Todo.estilos.css'
import imagen3 from '../utils/images/Imagen 3.jpg'


const Todo = () => {
    return (
        <div className= "Container_Cabecera">
            <div className="ContainerText">
                <h1>Hola este es el componente de la cabecera</h1>
                <p>
                No temas dar rienda suelta a tu imaginación. Quizás la idea no te convence y eres demasiado exigente contigo mismo. No seas tan perfeccionista y trabaja con lo que tienes. En la mayoría de los casos, era mejor idea de lo que pensabas. Además, las mejores ideas nacen cuando se están desarrollando otras, así que no temas y dejarte llevar.
                </p>
            </div>
            <div className="ContainerImage">
                <img id="imagen3"src={imagen3} alt="Hola esta es imagen3" />
            </div>
        </div>
    )
}

export default Todo
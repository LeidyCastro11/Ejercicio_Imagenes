import React from 'react' //Importar siempre react
import '../utils/CSS/Cuerpo.estilos.css'
import Leidy from '../utils/images/imagen 1.jpg'
const Cuerpo = () => {
    return (

        <div className="Container_Cuerpo">
            <div className="ContainerText">
                <h1>Hola este es el componente de Cuerpo</h1>
                <p>
                El escritor pone en su obra parte de lo que él siente en su existencia, no sólo el ambiente que lo rodea, sino la esencia de lo que siente. El arte de escribir es muy solitario, se requiere mucha concentración, imaginación, creatividad y disponibilidad, pero es importancia para la elevación cultural de los trabajadores.
                </p>
            </div>
            <div className="ContainerImage">
                <img src={Leidy} alt="Hola esta es Leidy" />
            </div>
        </div>

    )
}
export default Cuerpo
import React from 'react' //Importar siempre react
import '../utils/CSS/Footer.estilos.css'
import Leidy from '../utils/images/Imagen 2.jpg'

const Footer = () => {
    return (
        <div className="Container_Footer">
            <div className="ContainerText">
                <h1 className="FooterTitle"> Hola este es el componente de Footer</h1>
                <p>
                La escritura debe tener arte, que es imprimir una idea en una materia, es una cualidad de orden intelectual, es una virtud del entendimiento práctico, que debe conducir al verdadero bien, con cierta perfección de espíritu. El arte es ordenación de la razón, buscando los medios adecuados. Es necesario tener algo importante que decir, que sea de interés para otros.
                </p>
            </div>
            <div className="ContainerImage">
                <img src={Leidy} alt="Hola esta es Leidy" />
           </div>
        </div>
    )
}
export default Footer
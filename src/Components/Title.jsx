import React from 'react'
import '../utils/CSS/Title.estilos.css'
import {Link} from 'react-router-dom'

function Title() {
    return (
        <div className="Container_title">
            <h1 id="principalTitle">ARTE ABSTRACTO</h1>
            <Link to="/contact">
            <button> Me voy para contact</button>
            </Link>
            <Link to="/">
            <button> Me voy para Home</button>
            </Link>

        </div>
    )
}

export default Title
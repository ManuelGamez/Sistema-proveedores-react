import React from 'react'
import PropTypes from 'prop-types'
import './StyloInicio.css';
function Cabecera(props) {
  return (
      <>
      <nav class="navbar navbar-expand-md colorbarrasuperior">
        <a class="navbar-brand botonnavegador" href="#">PROVEEDORES</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link btn-outline-light stilobotonbarrasuperior" href="#">BUSCAR <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-outline-light stilobotonbarrasuperior" href="#">NUEVO PROVEEDOR <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-outline-light stilobotonbarrasuperior" href="#">NUEVOS <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link btn-outline-light stilobotonbarrasuperior" href="#">LTA <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link btn-outline-light stilobotonbarrasuperior" href="#">SIN LTA <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
      </>
    
  )
}

Cabecera.propTypes = {}

export default Cabecera

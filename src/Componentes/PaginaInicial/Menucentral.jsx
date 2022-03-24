import React from 'react'
import PropTypes from 'prop-types'
import lupa from '../../img/lupa.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
function Menucentral(props) {
  return (
    <>
    <div className='row'>
      <div className='col-sm-5 marginbuscadorformulario'>
        
        <div class="card ">
          <div class="card-body">
            <img src={lupa} className="imagenprincipal" />
            <div class="form-group margenbotonbuscar">
            <label>PROVEEDOR:</label>
            <input class="form-control form-control-sm " type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
            </div>
            <div class="form-group margenbotonbuscar">
            <label>ETIQUETAS:</label>
            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
            </div>
            <div class="form-group margenbotonbuscar">
            <label>PRODUCTOS:</label>
            <select class="form-select form-select-sm colorselect " aria-label=".form-select-sm example ">
              <option selected> SELECCIONE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
            <div class="form-group margenbotonbuscar">
            <label>COBERTURA:</label>
            <select class="form-select form-select-sm colorselect " aria-label=".form-select-sm example">
              <option selected> SELECCIONE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
            <div class="form-group margenbotonbuscar">
            <label>SERVICIO A DOMICILIO:</label>
            <select class="form-select form-select-sm colorselect " aria-label=".form-select-sm example">
              <option selected> SELECCIONE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
            <button type="button" class="btn  btn-sm margenbotonbuscar tamanoboton">BUSCAR PROVEEDOR</button>
          </div>
        </div>

      </div>
      <div className='col-sm-6 margintabla'>
        <div className='row'>
        <div className='col-sm-6'>
          <button type="button" class="btn colorbotones btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg> ACTUALIZAR
          </button>
        </div>

        <div className='col-sm-6'>
          <input class="form-control form-control-sm separadorbuscador" type="text" placeholder="digitar para buscar"/>
        </div>
        
        </div>
        <div className='table-responsive-sm tablasmargen'>
        <table class="table table-bordered table-hover table-sm scrooltabla ">
        <thead className='stylotabla'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">PROVEEDOR</th>
      <th scope="col">EMAIL</th>
      <th scope="col">TIPO PRODUCTO</th>
      <th scope="col">TEL</th>
      <th scope="col">TEL</th>
      <th scope="col">COBERTURA</th>
      <th scope="col">ETIQUETA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> <NavLink to="./InformacionProveedor" type="button" className='btn  btn-sm btn-outline-light colorbotonestabla'>ABCO, S.A DE C.V.</NavLink></td>
      <td>contadorgeneral@abco.com.sv</td>
      <td>Servicios</td>
      <td>2250-7600</td>
      <td>2250-7600</td>
      <td>Pais</td>
      <td>Equipo para hoteles y restaurantes,hoteles,restaurantes,equipo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
  </tbody>
        </table>
        </div>
        
      </div>

    </div>
    </>
    
  )
}

Menucentral.propTypes = {}

export default Menucentral

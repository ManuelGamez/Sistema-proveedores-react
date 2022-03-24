import React from 'react'
import PropTypes from 'prop-types'
import proveedor from '../../img/mensajero.png';
import servicios from '../../img/tienda-online.png';
import extra from '../../img/tabla-de-crecimiento.png';
import './styloinformacion.css';
function Barraprincipal(props) {
    const getTableColor = () =>{
        let valor = document.getElementsByName("Nombre");
        valor.style.backgroundColor = "#DAF7A6";
    }
       

  return (
    <>
   <div class="row CAR">
      <div class="col-sm-3 col-sm card margen ">
          <img src={proveedor} className="imageninformacion "/>
        <h5>ABCO, S.A DE C.V.</h5>
        <ul class="list-unstyled text-small tamaño">
          <li onMouseMove={getTableColor}><p className='Nombre' >NOMBRE NIT:  <b>N/A</b></p><hr/></li>
          <li><p >NIT:  <b>123-4331-121</b></p><hr/></li>
          <li><p >TEL 1:  <b>1223-4331</b></p><hr/></li>
          <li><p >TEL 2:  <b>123S-4331</b></p><hr/></li>
          <li><p >FAX:  <b>2123-4331</b></p><hr/></li>
          <li><p >EMAIL:  <b>contadorgeneral@abco.com.sv</b></p><hr/></li>
        </ul>
      </div>
      <div class="col-sm-3 col-sm card margen">
      <img src={servicios} className="imageninformacion "/>
        <h5>Servicios</h5>
        <ul class="list-unstyled text-small tamaño">
        <li><p >ETIQUETAS:  <b>Equipo para hoteles y restaurantes,hoteles,restaurantes,equipo</b></p><hr/></li>
          <li><p >LTA :  <b>N/A</b></p><hr/></li>
          <li><p >Servicio a domicilio : <b>No</b></p><hr/></li>
          <li><p >TIPO PRODUCTO:  <b>Servicios</b></p><hr/></li>
          <li><p >COBERTURA:  <b>PAIS</b></p><hr/></li>
        </ul>
      </div>
      <div class="col-sm-3 col-sm card margen">
      <img src={extra} className="imageninformacion "/>
        <h5>Información Extra</h5>
        <ul class="list-unstyled text-small tamaño">
        <li><p >DESCRIPCIÓN:  <b>Equipo para hoteles y restaurantes</b></p><hr/></li>
          <li><p >COMENTARIO:  <b>Correo adicional: asesor3@abco.com.sv No posee ID vendor</b></p><hr/></li>
          <li><p >FECHA REGISTRO:  <b>2020-07-04</b></p><hr/></li>
          <li><p >ULTIMA ACTUALIZACIÓN:  <b>2020-07-16</b></p><hr/></li>
          <li><p >CREADO POR:  <b>mirna.ayala</b></p><hr/></li>
          <li><p >MODIFICADO POR:  <b>hugo.rosales</b></p><hr/></li>
        </ul>
      </div>
    </div>
    </>
  )
}

Barraprincipal.propTypes = {}

export default Barraprincipal

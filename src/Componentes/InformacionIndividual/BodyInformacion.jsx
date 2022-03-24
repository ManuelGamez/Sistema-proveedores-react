import React from 'react'
import PropTypes from 'prop-types'
import Barralateral from './Barralateral';
import Cabecera from '../PaginaInicial/Cabecera';
import Barraprincipal from './Barraprincipal';
function BodyInformacion(props) {
  return (
        <>
        <Cabecera/>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-2'>
                <Barralateral/>
            </div>
            <div className='col-sm-10'>
                <Barraprincipal/>
            </div>
            </div>
        </div>
        </>
  )
}

BodyInformacion.propTypes = {}

export default BodyInformacion

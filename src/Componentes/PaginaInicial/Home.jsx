import React from 'react'
import PropTypes from 'prop-types'
import Cabecera from './Cabecera';
import Piedepagina from './Piedepagina';
import Menucentral from './Menucentral';
import Menulateral from './Menulateral';
function Home(props) {
  return (
      <>
        <Cabecera/>
           <div className='container'>
               <div className='row'>
                   <div className='col-sm-3 marginlateral'>
                    <Menulateral/>
                   </div>
                   <div className='col-sm-8'>
                    <Menucentral/>
                   </div>
               </div>
           </div>
        <Piedepagina/>
      </>
      
  )
}

Home.propTypes = {}

export default Home

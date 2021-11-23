import React from 'react'
import { Link } from 'react-router-dom'

const Vision4 = () => {
    return (
        <div style={{marginTop:'150px'}}
         className='d-flex justify-content-center    '>
           
            

            <div className='grid2'>

            <Link className='text-link' to='/groupe'>
            <div className='vision4-pic'>
            <h1 style={{marginLeft:'50px', color:'black', fontSize:'30px', fontWeight:'bold'}}>LE GROUPE</h1>
            <p>Plongez au coeur de notre essence et de nos marques</p>
            </div></Link>

            <Link className='text-link' to='/carrieres'>
            <div className='vision5-pic' >
            <h1 style={{ marginLeft:'50px', 
            color:'black', fontSize:'30px',
             fontWeight:'bold', }} >LES OPPORTUNITES</h1>
            <p>Découvrez nos offres d'emploi ou créez la votre</p>
            </div></Link>

            </div>
        </div>
    )
}

export default Vision4

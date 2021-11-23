import React from 'react'
import { Link } from 'react-router-dom'
import HomeMiddle4 from '../home/HomeMiddle4'

const Groupe6 = () => {
    return (
        <div className='container-fluid'>
         <div style={{marginTop:'150px', marginBottom:'-700px'}}
         className='d-flex justify-content-center    '>
           
            

            <div className='grid2'>

          
            <div style={{backgroundColor:'#7fe3a5', height:'250px'}} >
            <h1 
            style={{marginLeft:'50px', paddingTop:'50px',
            color:'white', fontSize:'50px',
             fontWeight:'bold',
              }}>Vous voulez <br/> nous rejoindre?</h1>
            </div>

            <Link className='text-link' to='/carrieres'>
            <div className='vision5-pic' >
            <h1 style={{ marginLeft:'50px', color:'black', 
            fontSize:'30px', fontWeight:'bold'}} >LES OPPORTUNITES</h1>
            <p>Découvrez nos offres d'emploi ou créez la votre</p>
            </div></Link>

            </div>
        </div>
        <div style={{marginTop:'150px', marginBottom:'150px'}}>
           <HomeMiddle4 />   
        </div>
         
        </div>
    )
}

export default Groupe6

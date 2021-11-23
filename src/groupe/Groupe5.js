import React  from 'react';
import dataCodir from './dataCodir';
  
const Groupe5 = () => {

   const data= dataCodir.map((data)=>(
      <div style={{marginBottom:'-150px'}}> 
               <a href={data.ref} target='_blank' rel='noreferrer'>
               <img 
               style={{
                  borderRadius:'50%'
               }}
                height='30%'
                src={data.photo} alt=''/>
                <img src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4d63e0cd5653931374ea30_Icon-linkedin.svg'
                alt='' />
               </a>

               <h4>{data.name}</h4>
               <h6>{data.poste}</h6>

      </div>

   ))
     
    return (
        <div className='container'> 
      
      <div>
     <p style={{
                color:'gray',
                fontWeight:'bold'
            }}>Le comité de direction</p> 
     </div>
            
      <div className='gridr2'>
         <div>
         <h1 style={{
            fontWeight:'bold',
            color:'#54565a'
         }}>Une équipe dirigeante<br/>
                <span className='highlight'>
               passionnée.</span></h1>
         </div>

         <div>
         <h5 style={{
            fontWeight:'bold',
            color:'gray'
         }}>
         Issue de divers horizons, notre équipe de <br/>
         direction pilote avec passion l’ensemble des<br/>
          activités du groupe
                </h5>
         </div>

      </div>
<br/><br/>
        <div className='gridr31'>
           {data} 
        </div>
    


     </div>
    )
  }

export default Groupe5;
import React, {useRef} from 'react'
import Expertises2 from './Expertises2'
import Expertises3 from './Expertises3'
import { Link } from 'react-router-dom'
import HomeMiddle4 from '../home/HomeMiddle4'
import Expertises4 from './Expertises4'

const Expertises = () => {
    const myRef = useRef(null)
 

    const executeScroll = () => myRef.current.scrollIntoView()

    return (
        <div className='container-fluid' >
        <br/><br/><br/><br/><br/><br/>
       
<div className="gridr1 "  >
     <div
    style={{
    backgroundSize:'50%', 
    backgroundRepeat:'no-repeat',
    backgroundPositionX:'100%',
    boxShadow:'500px'
    }} 
    className="expertises-pic1 ">

   <h1
   style={{ 
   fontWeight:'bold', 
   color:'#54565a',
   marginLeft:'100px'
    }}> 
    <span className='highlight'>
    Créer des passerelles</span><br/>
    entre les secteurs, <br/>
    les consommateurs<br/>
    et les projets </h1>
     
   </div>
</div>


<div className='gridr4'>

<div onClick={executeScroll}
     style={{cursor:'pointer'}} 
     className='d-flex  '>
        <img height='5%'
         src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47887bb72e4752207e03b6_Arrow.svg' alt=''  />
          &nbsp;
        <p >En savoir plus</p>
</div>

 

<div>
    <p style={{color:'gray'}}>
    Historiquement centré sur le dispositif des CEE, Enalia étoffe sans cesse sa palette de métiers.</p>
</div>

<div>
 <span style={{color:'gray'}} className='highlight'>
 Elle agit désormais sur l’ensemble des métiers de l’efficacité énergétique.</span>  
</div>
</div>



<div ref={myRef}  >
<br/> <br/><br/>
</div>
<Expertises2 />
<Expertises3 />
<Expertises4 />
 
<div className='grid2' style={{marginTop:'200px', height:'0vh'}}>

          
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
<div style={{marginTop:'500px'}}>
     <HomeMiddle4 />  
</div>
</div>
    )
}

export default Expertises
 
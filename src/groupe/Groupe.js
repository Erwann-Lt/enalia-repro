import React, {useRef} from 'react'
import Groupe2 from './Groupe2'
import Groupe3 from './Groupe3'
import Groupe4 from './Groupe4'
import Groupe5 from './Groupe5'
import Groupe6 from './Groupe6'


const Groupe = () => {
    const myRef = useRef(null)
 

    const executeScroll = () => myRef.current.scrollIntoView()   

    return (
        <div className='container-fluid'>
        <br/><br/><br/><br/><br/><br/>
       
<div className="gridr1 "  >
     <div
    style={{
    backgroundSize:'50%', 
    backgroundRepeat:'no-repeat',
    backgroundPositionX:'100%',
    boxShadow:'500px'
    }} 
    className="groupe-pic1 ">

   <h1
   style={{ 
   fontWeight:'bold', 
   color:'#54565a',
   marginLeft:'100px'
    }}> 
    Un groupe dédié<br/>
    aux métiers de <br/>
    <em className='highlight'>
    l’énergie</em> et du conseil</h1>
     
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
    Enalia rassemble et connecte des entreprises engagées dans l'efficacité énergétique.</p>
</div>

<div>
 <span style={{color:'gray'}} className='highlight'>
Toutes partagent les mêmes valeurs et la même ambition.</span>  
</div>
</div>



<div ref={myRef}  >
<br/> <br/><br/>
 <Groupe2   />
</div>

<Groupe3 />

<Groupe4 />
<Groupe5 />
<Groupe6 />
        </div>
    )
}

export default Groupe

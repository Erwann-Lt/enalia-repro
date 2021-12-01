import React from 'react'
import useWindowSize from '../useWindowSize'

const Vision2 = () => {
    const {width}=useWindowSize()

    return (
        <>
        {width <650 ?
        
            <div style={{marginBottom:'' }}>

<div style={{marginLeft:'100px', marginTop:'400px ' }}>
    <h2 style={{fontSize:'2em', fontWeight:'bold', color:'#54565a',
    marginLeft:'0px', marginTop:'-'  }}>
       C'est pourquoi depuis 2011 <br/> nous intervenons auprès 
       <em className='highlight'>de tous les acteurs</em>.</h2>
    </div>

    <div style={{height:'100vh', marginTop:'-600px ', marginLeft:'150px'}}   >
            <div className='d-flex row' >
            <div style={{marginTop:'600px'}} className='col' >
            <img style={{marginRight:'150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1cac97a193751c50e9_Particuliers.svg' alt=''/>
            <p>PARTICULIERS</p> 
            <a href='https://www.passrenov.com/'
             target='_blank'
            rel='noreferrer'>
            <img style={{marginLeft:''}} height='50px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6b4f9165eeb578a65efcf0_Logo%20passrenov.svg' alt=''/>
            </a>
            <br/><br/>
            
            <img src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b8ac92e0e0d89b8f7_Entreprises.svg' alt=''/>
            <p>ENTREPRISES</p> 
            <a href='https://www.neutrali.fr/'
             target='_blank'
            rel='noreferrer'>
            <img height='50px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6bdc37a9dacd6227649d5b_Neutrali.svg' alt=''/>
            </a>
            </div>

             <img height='200px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cc04cd1b0eaad0a7c695_Artisans.svg' alt=''/>
            <p>ARTISANS</p> 
            <a style={{marginLeft:'-100px'}}
             href='https://www.abokine.com/'
             target='_blank'
            rel='noreferrer'>
            <img height='50px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f54f5da34fd390a328ecaf0_Logo%20Enr-cert.svg' alt=''/>
            </a> /

            <a href='https://www.enr-cert.com/'
             target='_blank'
            rel='noreferrer'>
            <img height='40px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f7c18934033554a7a1f181b_Abokine%20logo.svg' alt=''/>
            </a>
            
            <br/><br/>
            <img height='200px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b07ad6a84117d6bd0_Logement%20collectif.svg' alt=''/>
            <p>LOGEMENTS COLLECTIFS</p> 
            <a href='https://isolervosreseaux.com/'
             target='_blank'
            rel='noreferrer'>
            <img height='50px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f54f5da755d6a2f716fde52_Logo%20Alto.svg' alt=''/>
            </a>
 
            

          

            </div>
        </div>
    
</div>
        
        :
        <div style={{marginBottom:'-500px' }}>

<div style={{marginLeft:'100px', marginTop:'-650px' }}>
    <h2 style={{fontSize:'2em', fontWeight:'bold', color:'#54565a',
    marginLeft:'0px', marginTop:'-250px'  }}>
       C'est pourquoi depuis 2011 <br/> nous intervenons auprès 
       <em className='highlight'>de tous les acteurs</em>.</h2>
    </div>

    <div className='grid3' style={{  marginTop:'150px'  }}>
    <div >
    <h4>Entreprises</h4><br/>
    <span>Gagner en performance et<br/> réduire son impact</span>
    <br/>
    <img height='120px' style={{marginLeft:'150px', marginTop:'-150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b8ac92e0e0d89b8f7_Entreprises.svg' alt='' />
    
    <br/><br/><br/><br/><br/><br/><br/> 
  
    <img height='120px' style={{marginLeft:'150px', marginTop:'-150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cc04cd1b0eaad0a7c695_Artisans.svg' alt='' />
    <h4 style={{marginLeft:' ', marginTop:'-50px'}}>Artisans</h4> 
    <span>Gagner en performance et<br/> réduire son impact</span>
    <br/>
    </div>


    <div style={{marginTop:'-100px'}}>
    <h4>Entreprises</h4><br/>
    <span>Gagner en performance et<br/> réduire son impact</span>
    <br/>
    <img height='120px' style={{marginLeft:'150px', marginTop:'-150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1cac97a193751c50e9_Particuliers.svg' alt='' />
    
    <br/><br/><br/>
    <br/><br/><br/>
    <img style={{marginTop:'-100px',marginLeft:'-100px'}} height='200px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4cba24f4357b239e996a90_Features%20Core.svg'  alt=''/>
    <br/><br/><br/>
    <br/><br/><br/>
    <img height='120px' style={{marginLeft:'150px', marginTop:'-150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4cf5c27330e51efaea86a5_Bureaux.svg' alt='' />
    <h4 style={{marginLeft:' ', marginTop:'-50px'}}>Artisans</h4> 
    <span>Gagner en performance et<br/> réduire son impact</span>
    <br/>
    </div>
    
    <div>
<h4>Entreprises</h4><br/>
    <span>Gagner en performance et<br/> réduire son impact</span>
    <br/>
    <img height='120px' style={{marginLeft:'150px', marginTop:'-150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b8ac92e0e0d89b8f7_Entreprises.svg' alt='' />
    
    <br/><br/><br/><br/><br/><br/><br/> 
  
    <img height='120px' style={{marginLeft:'150px', marginTop:'-150px'}} src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cc04cd1b0eaad0a7c695_Artisans.svg' alt='' />
    <h4 style={{marginLeft:' ', marginTop:'-50px'}}>Artisans</h4> 
    <span>Gagner en performance et<br/> réduire son impact</span>
    <br/>
    </div>

    </div>
    
</div>

        }
        </>
        
    )
}

export default Vision2

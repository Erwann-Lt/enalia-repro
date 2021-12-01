import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../useWindowSize'

const HomeMiddle2 = () => {
    const {width}=useWindowSize()

    return (
        <>
        {width < 650 ?
            <div style={{height:'100vh', marginTop:'300px', marginLeft:'150px'}}   >
            <div className='d-flex row' >
            <div style={{marginTop:'-100px'}} className='col' >
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
        :
        
        <div style={{height:'100vh'}}   >
            <div className='grid3' >
            <div style={{marginTop:'-100px'}}  >
            <img src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1cac97a193751c50e9_Particuliers.svg' alt=''/>
            <p>PARTICULIERS</p> 
            <a href='https://www.passrenov.com/'
             target='_blank'
            rel='noreferrer'>
            <img height='50px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6b4f9165eeb578a65efcf0_Logo%20passrenov.svg' alt=''/>
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

            <div style={{marginLeft:'-150px'}}>
            <img src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cc04cd1b0eaad0a7c695_Artisans.svg' alt=''/>
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
            <img src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b07ad6a84117d6bd0_Logement%20collectif.svg' alt=''/>
            <p>LOGEMENTS COLLECTIFS</p> 
            <a href='https://isolervosreseaux.com/'
             target='_blank'
            rel='noreferrer'>
            <img height='50px' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f54f5da755d6a2f716fde52_Logo%20Alto.svg' alt=''/>
            </a>
            </div>

            <div>
            <h2 style={{fontSize:'2.5em', fontWeight:'bold', color:'#54565a',
            marginLeft:' -150px'
            }}> Une <em className='highlight'>approche globale</em> de<br/> l'énergie.</h2>
            
             <br/><br/><br/>
            <p style={{marginLeft:' -150px', fontSize:'20px' 
            }}>Avec une entité dédiée à chaque consommateur, à <br/>
            chaque professionnel de la rénovation énergétique, le<br/>
             groupe et ses 5 filiales déploient un savoir-faire unique.</p>
             <br/><br/><br/>
             <Link to='/expertises'><button className='btn-lg btn-info'>En savoir plus</button></Link>
            </div>

          

            </div>
        </div>
        }
        </>
        
    )
}

export default HomeMiddle2

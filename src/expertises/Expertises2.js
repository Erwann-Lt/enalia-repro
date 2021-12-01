import React from 'react'
import useWindowSize from '../useWindowSize'
const Expertises2 = () => {
    const {width}= useWindowSize()
    return (
        <div>
        {width <650 ?
            <div className='container-fluid  '
         
         style={{height:'100vh'
            
              }}>

            <div className='d-flex col justify-content-evenly'>
            <div> 
            <h4 
            style={{color:'#54565a', 
            fontWeight:'bold'}}>
            Notre expertise</h4>
            </div>
            
            <div  >
            <h2 
            style={{color:'#54565a', 
            fontWeight:'bold', marginLeft:'20px', fontSize:'20px'}}>
            L’efficacité énergétique croise
            <span className='highlight'>
            des métiers qui ne  pensaient jamais se rencontrer 
            </span>:
            la finance, clé de 
            voute de tout investissement, la technique, qui permet<br/>
            de dimensionner un projet et d’en garantir les résultats,<br/>
            l’accompagnement humain, nécessaire à toutes les<br/>
            étapes.<br/>
            </h2>
            </div>
            </div>

            <div className='gridr3' style={{
                      marginTop:'50px'
                  }}>
              <div></div>

              <div style={{marginRight:'-100px'}}>
                  <h5 >A travers ses 5 filiales et ses fonctions transverses, le groupe <br/><br/>
                  apprend chaque jour de nouvelles compétences pour<br/><br/> développer 
                  des projets toujours plus ambitieux.
                 </h5>
              </div>

                  <div></div>
               

              </div>
               
        </div>
        
        
            :
            <div className='container-fluid  '
         
         style={{height:'100vh'
            
              }}>

            <div className='d-flex col justify-content-evenly'>
            <div> 
            <h4 
            style={{color:'#54565a', 
            fontWeight:'bold'}}>
            Notre expertise</h4>
            </div>
            
            <div  >
            <h2 
            style={{color:'#54565a', 
            fontWeight:'bold'}}>
            L’efficacité énergétique croise
            <span className='highlight'>
            des métiers qui ne <br/> pensaient jamais se rencontrer :
            </span>
            la finance, clé de<br/>
            voute de tout investissement, la technique, qui permet<br/>
            de dimensionner un projet et d’en garantir les résultats,<br/>
            l’accompagnement humain, nécessaire à toutes les<br/>
            étapes.<br/>
            </h2>
            </div>
            </div>

            <div className='gridr3' style={{
                      marginTop:'50px'
                  }}>
              <div></div>

              <div style={{marginRight:'-200px'}}>
                  <h5 >A travers ses 5 filiales et ses fonctions transverses, le groupe <br/><br/>
                  apprend chaque jour de nouvelles compétences pour<br/><br/> développer 
                  des projets toujours plus ambitieux.
                 </h5>
              </div>

                  <div></div>
               

              </div>
               
        </div>

        
        }
        </div>
        
    )
}

export default Expertises2 

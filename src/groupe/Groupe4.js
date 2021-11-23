import React,{ useState} from 'react'
import { useSpring, animated } from 'react-spring'
 
const Groupe4 = () => {
    
    
    const props= useSpring({ to: { opacity: 1 , transform: "translate(0,20%)"}, 
        from: { opacity: 0.5 ,  transform: "translate(0,10%)" },  
        config: { duration: 200 },
    reset: true })

   
     
    const [anim1, setAnim1]=useState(false)
    const [anim2, setAnim2]=useState(false)
    const [anim3, setAnim3]=useState(false)
    const [anim4, setAnim4]=useState(false)
    const [anim5, setAnim5]=useState(false)

    
    
    return (
        <div className='container' style={{
            height:'100vh',
            marginTop:'100px'
        }}>
       
            <p style={{
                color:'gray',
                fontWeight:'bold'
            }}>Nos marques</p> 
        
            <h2 style={{
                color:'gray',
                fontWeight:'bold'
            }}>
            Toutes les entités du groupe concourent au même objectif,<br/>
            <span className='highlight'> avec des cibles différentes</span>
            </h2>
            <br/><br/>

            <div className='gridr5  '>
                <div   onClick={()=>setAnim1(!anim1)}
                style={{cursor:'pointer'}} >
                 
                    <img 
                    src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1cac97a193751c50e9_Particuliers.svg'
                     alt=''/>

                    <img height='15%'   
                    src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6baa3d2414956deb1ac72b_Pass-renov.svg'
                    alt=''
                    />
                    
                  
                </div>

                <div onClick={()=>setAnim2(!anim2)}
                style={{cursor:'pointer'}}>
                    <img  src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b8ac92e0e0d89b8f7_Entreprises.svg'
                     alt=''
                    />
                    <br/><br/>  
                    <img height='15%'   src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6bdc37a9dacd6227649d5b_Neutrali.svg'
                    alt=''
                    />
                </div>

                <div onClick={()=>setAnim3(!anim3)} 
                style={{cursor:'pointer'}}>
                    <img  src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cc04cd1b0eaad0a7c695_Artisans.svg'
                     alt=''
                    />
                    <img height='15%'   src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6baa3a42c03410eadbcca4_Enr-cert.svg'
                    alt=''
                    />
                </div>

                <div onClick={()=>setAnim4(!anim4)}
                style={{cursor:'pointer'}}>
                    <img  src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6ba480fe2f751a6ffc30d8_Artisan%20local.svg'
                     alt=''
                    />
                    <img height='15%'   src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f7c18934033554a7a1f181b_Abokine%20logo.svg'
                    alt=''
                    />
                </div>

                <div onClick={()=>setAnim5(!anim5)}
                style={{cursor:'pointer'}}>
                    <img  src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47cb1b07ad6a84117d6bd0_Logement%20collectif.svg'
                     alt=''
                    />
                    <br/><br/>
                    <img height='15%'   src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6baa3aafed3e1dcbc3eb19_Alto.svg'
                    alt=''
                    />
                </div>
                
            </div>
            <div className='gridr5' style={{marginTop:'-100px'}}>
                 <div>
                   {anim1 ? 
                     <animated.div style={props}>
                     <p style={{color:'gray'}}>
                     Pass'Renov propose un <br/>
                     service sur mesure aux <br/>
                     particuliers pour les aider à<br/>
                      choisir, financer et réaliser <br/>
                      leurs travaux d’économies<br/>
                       d’énergie.</p>
                     </animated.div>
                   : null
                   }
                       </div>

                       <div>
                       {anim2 ? 
                       <animated.div style={props}>
                     <p style={{color:'gray'}}>
                     Pass'Renov propose un <br/>
                     service sur mesure aux <br/>
                     particuliers pour les aider à<br/>
                      choisir, financer et réaliser <br/>
                      leurs travaux d’économies<br/>
                       d’énergie.</p>
                     </animated.div>
                        : null
                        }
                       </div>
                       <div>
                       {anim3 ? 
                       <animated.div style={props}>
                     <p style={{color:'gray'}}>
                     Pass'Renov propose un <br/>
                     service sur mesure aux <br/>
                     particuliers pour les aider à<br/>
                      choisir, financer et réaliser <br/>
                      leurs travaux d’économies<br/>
                       d’énergie.</p>
                     </animated.div>
                        : null
                        }
                       </div>
                       <div>
                       {anim4 ? 
                       <animated.div style={props}>
                     <p style={{color:'gray'}}>
                     Pass'Renov propose un <br/>
                     service sur mesure aux <br/>
                     particuliers pour les aider à<br/>
                      choisir, financer et réaliser <br/>
                      leurs travaux d’économies<br/>
                       d’énergie.</p>
                     </animated.div>
                        : null
                        }
                       </div>
                       <div>
                       {anim5 ? 
                       <animated.div style={props}>
                     <p style={{color:'gray'}}>
                     Pass'Renov propose un <br/>
                     service sur mesure aux <br/>
                     particuliers pour les aider à<br/>
                      choisir, financer et réaliser <br/>
                      leurs travaux d’économies<br/>
                       d’énergie.</p>
                     </animated.div>
                        : null
                        }
                       </div>
 
                       
            </div>
           

        </div>
    )
}

export default Groupe4

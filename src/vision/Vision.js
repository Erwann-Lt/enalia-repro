import React, {useRef} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Vision2 from './Vision2'
import Vision3 from './Vision3'
import Vision4 from './Vision4'
import useWindowSize from '../useWindowSize'


const Vision = () => {
   const {width}= useWindowSize()
    const myRef = useRef(null)
 

    const executeScroll = () => myRef.current.scrollIntoView()    

    return (
      <>
      {width <650 ?
      <div  >
      <div ref={myRef} style={{marginTop:'100px'}}>
                    <Vision2 />  
                </div>
                <Vision3 />

                <div style={{marginTop:'1300px'}}>
                  <h2 
                  style={{fontSize:'1.5em',
                   fontWeight:'bold',
                    color:'#54565a',
            marginLeft:' 75px'
            }}> Vous souhaitez
            <em className='highlight'>en savoir plus?</em></h2>
                </div>
       
                  <Vision4 />
 
                
        
        </div>
      
      
      :
      
      <div>
        <div className='spring-pic' style={{height:'100vh' }}>

          
    <Parallax pages={5} style={{ marginTop: '100px', left: '0' }}>
<ParallaxLayer   offset={0}   speed={2.5} >
 
        <div className='grid2' style={{marginLeft:'50px'}}>
            <div>
                <h1 style={{marginLeft:'50px', color:'white', fontSize:'70px', fontWeight:'bold'}}>
                Engagés pour l'optimisation énergétique</h1>
            </div>
             
            <div>
            <p style={{marginTop:'350px',marginLeft:'50px', color:'white', fontSize:'15px', fontWeight:'bold'}}>
            Intervenir sur toute la chaîne de <br/>
            valeur énergétique et trouver des<br/>
             solutions d’économie globales.</p>
            </div>
            <div style={{marginTop:'350px',marginLeft:'50px', color:'white', fontSize:'15px', fontWeight:'bold'}} >
            <button  onClick={executeScroll} className='btn-lg btn-info' >Passer l'animation</button>
             </div>
        </div>
</ParallaxLayer>

<ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '' }} />

<ParallaxLayer
  offset={1}
  speed={2.5}
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }}>
  <p>2</p>
  <div   className='justify-content-center align-items-center align-content-center d-flex col text-center'>
            <div className="sun">
            <div className="dot">
            </div>
            
        </div>
        <h1 style={{marginLeft:'-450px'}}>Chaque individu <br/> 
        consomme de l'énergie</h1>
        </div>
        
</ParallaxLayer>

<ParallaxLayer
  offset={2}
  speed={2.5}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p>3</p>
            <div   className='justify-content-center align-items-center align-content-center d-flex col text-center'>
            <div className="sun">
            <div className="dot">
            </div>
            <div className='sun2'>
            <div className="dot">
            </div>
            </div>
            
        </div>
        <h1 style={{color:'white', marginLeft:'-450px'}}>
         Dans un environnement <br/> 
         où tout est conecté</h1>
        </div>
</ParallaxLayer>

<ParallaxLayer
  offset={3}
  speed={2.5}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p>4</p>
            <div   className='justify-content-center align-items-center align-content-center d-flex col text-center'>
            <div className="sun">
            <div className="dot">
            </div>
            <div className='sun3'>
            <div className="dot">
            </div>
            
            </div>
            <div className='sun3'>
            <div className="dot">
            </div>
            
            </div>
            </div>

            <h1 style={{color:'white', marginLeft:'-450px'}}>
         Et où chaque acteur <br/>
         consomme à sa façon <br/> 
          </h1>
        </div>
</ParallaxLayer>

<ParallaxLayer
  offset={4}
  speed={2.5}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p>5</p>
            <div   className='justify-content-center align-items-center align-content-center d-flex col text-center'>
            <h1 style={{color:'white', marginLeft:''}}>
            Réduire les consommations d’énergie, <br/>
            c’est agir sur toutes ces interactions <br/> 
          </h1>
        </div>
</ParallaxLayer>



</Parallax> 
</div>
                <div ref={myRef} style={{marginTop:'800px'}}>
                    <Vision2 />  
                </div>
                <Vision3 />

                <div style={{marginTop:'200px'}}>
                  <h2 style={{fontSize:'2.5em', fontWeight:'bold', color:'#54565a',
            marginLeft:' 200px'
            }}> Vous souhaitez
            <em className='highlight'>en savoir plus?</em></h2>
                </div>
                
                <Vision4 />
        
        </div>
      }
      </>
        
    )
}

export default Vision

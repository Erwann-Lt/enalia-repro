import React from 'react'
 
import { useSpring, animated } from 'react-spring'
 
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Expertises4 = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
      <div style={{ marginTop:'250px', marginBottom:'-800px'}} className='container' >

      <div className='grid2 overflow-hidden' style={{ marginRight:'150px' }}>

      <div>
        <h1>Cas 1 : Alto</h1>
        <p>Analyser. Alto effectue des visites techniques sur 
        site – logement collectif, bâtiment public – pour 
        pouvoir qualifier les travaux à réaliser et donner 
        une première estimation des gains énergétiques 
        attendus.</p>
        <br/><br/>
        <p>Faire. À la manière d’un chef d’orchestre, Alto 
        travaille avec l’ensemble des corps de métiers 
        de la rénovation énergétique et s’assure que le 
        chantier se déroule comme prévu, avec le moins 
        d’inconvénients pour le client, dont il est 
        l’unique intermédiaire.</p>
    </div>
<div  
class=" d-flex justify-content-end"
 onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
   
      </div>

      <div className='grid2 overflow-hidden' style={{ marginRight:' ' }}>
      <div  
class=" d-flex justify-content-end"
 onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card5" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card6" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card7" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card8" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
      <div>
        <h1>Cas 2 : Neutrali</h1>
        <p>Analyser. Neutrali réalise des audits énergétiques en usine,
         où son équipe d’ingénieurs va échanger avec les salariés,
          relever directement des données et les analyser en vue de 
          futures préconisations.</p>
        <br/><br/>
        <p>Préconiser. Neutrali propose plusieurs plans d’actions
         aux acteurs industriels et tertiaires pour les aider à
          planifier leurs opérations d’économies d’énergie sur 
          le long terme.</p>
    </div>

   
      </div>
      <div style={{height:'100vh',marginTop:'-800px',
            marginBottom:'800px',}} className='d-flex row justify-content-center align-items-center align-items-lg-center'>
        <h1 
        style={{
            fontSize:'130px',
            
            opacity:'0.4'
        }}>& aller plus loin</h1>
        <div className='gridr2'>
        <div>
            <p style={{fontWeight:'bold'}} >Emmener l’artisan vers de nouveaux métiers en lien avec les enjeux environnementaux.</p>
            <br/><br/>
            <p>Sans les artisans, nous n’existerions pas. Notre responsabilité est de les aider à s’emparer de la rénovation énergétique, et à s’adapter à un secteur en perpétuelle évolution technique et réglementaire.</p>
        </div>
        <div>
        <p style={{fontWeight:'bold'}} >Emmener l’artisan vers de nouveaux métiers en lien avec les enjeux environnementaux.</p>
            <br/><br/>
            <p>Sans les artisans, nous n’existerions pas. Notre responsabilité est de les aider à s’emparer de la rénovation énergétique, et à s’adapter à un secteur en perpétuelle évolution technique et réglementaire.</p>
        </div>
        </div>
      </div>
    
    </div>
    )
}

export default Expertises4

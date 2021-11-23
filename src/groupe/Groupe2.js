import React from 'react'

const Groupe2 = () => {

    return (
        <div className='container-fluid  '
         
         style={{height:'100vh'
            
              }}>

            <div className='d-flex col justify-content-evenly'>
            <div> 
            <h4 
            style={{color:'gray', 
            fontWeight:'bold'}}>
            Notre mission</h4>
            </div>
            
            <div  >
            <h2 
            style={{color:'gray', 
            fontWeight:'bold'}}>
            Accompagner tous les acteurs de la transition <br/>
            énergétique - décideurs, faiseurs et consommateurs<br/>
            - vers <span className='highlight'>un modèle plus économe en énergie.</span></h2>
            </div>
            </div>

            <div className='gridr3' style={{
                      marginTop:'50px'
                  }}>
              <div></div>

              <div >
                  <h5 >Pour mener à bien notre mission, nous <br/> <br/>
                 développons des expertises sur tous les<br/> <br/>
                 champs de l’énergie et pour tous ses<br/> <br/>
                 acteurs : entreprises, particuliers,<br/> <br/>
                 collectivités. Le groupe accompagne<br/> <br/>
                 aujourd’hui tout l’écosystème de l’efficacité<br/> <br/>
                 énergétique, du diagnostic initial au <br/> <br/>
                 financement de projet.</h5>
              </div>

              <div><h5>
                <span className='highlight'>
                Impliqué dans les débats publics, nous <br/> <br/>
                proposons des solutions concrètes pour <br/> <br/>
                optimiser les politiques d’efficacité <br/> <br/>
                énergétique. La nature singulière de notre <br/> <br/>
                groupe au cœur de la filière de la rénovation<br/> <br/>
                énergétique, nous offre un point de vue<br/> <br/>
                global sur les enjeux du secteur.</span></h5>
              </div>

              </div>
        </div>
    )
}

export default Groupe2 

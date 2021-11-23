import React, {useState} from 'react'

const Expertises3 = () => {

        const [analyser, setAnalyser]= useState(true)
        const [preconiser, setPreconiser]= useState(false)
        const [faire, setFaire]= useState(false)

         const ana=()=>{
            setAnalyser(!analyser)
            setPreconiser(false)
            setFaire(false)
         }

         const preco=()=>{
            setAnalyser(false)
            setPreconiser(true)
            setFaire(false)
         }

         const fai=()=>{
            setAnalyser(false)
            setPreconiser(false)
            setFaire(true)
         }
    return (
        <div className='container' 
        style={{height:'80vh', marginTop:'-200px' }}>
           <div className='gridr3'  >
           <div className='d-flex'
           style={{cursor:'pointer'}}
           onClick={ana}
           >
               <img height='20%' 
               src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4fb141fba79931ef93c21d_Analyser.svg'
                alt=''/>
                <h1>Analyser</h1>
           </div>
           <div className='d-flex'
           style={{cursor:'pointer'}}
           onClick={preco}
           >
               <img height='20%' 
               src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4fb141019ce70f41440370_Preconiser.svg'
                alt=''/>
                <h1>Préconiser</h1>
           </div>
           <div className='d-flex'
           style={{cursor:'pointer'}}
           onClick={fai}
           >
               <img height='20%' 
               src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4fb13e7063cafe2057494a_Faire.svg'
                alt=''/>
                <h1>Faire</h1>
           </div>

           </div>
        <div 
        style={{marginTop:'-150px'}}
        className='d-flex justify-content-center align-content-center align-items-center'>
            {
            analyser ? <div>
            <h1 
            style={{opacity:'0.3', fontSize:'90px'}}
            className='d-flex justify-content-center align-content-center align-items-center'>
            Analyser
            </h1>
            <br/><br/>
            <h1 style={{fontWeight:'bold', fontSize:'35px', color:'#54565a'}}>S’imprégner des lieux, en comprendre les enjeux et les <br/>
            contraintes. Dialoguer avec les utilisateurs du bâtiment. Analyser <br/>
            les consommations énergétiques et les comportements.</h1>
            </div>
            : null
            }
        </div>

        <div 
        style={{marginTop:' '}}
        className='d-flex justify-content-center align-content-center align-items-center'>
            {
            preconiser ? <div>
            <h1 
            style={{opacity:'0.3', fontSize:'90px'}}
            className='d-flex justify-content-center align-content-center align-items-center'>
            Préconiser
            </h1>
            <br/><br/>
            <h1 style={{fontWeight:'bold', fontSize:'35px', color:'#54565a'}}>

            Se fixer des objectifs réalistes, adaptés à l’activité ou aux modes<br/>
            de vie, pour réduire à terme les consommations. Prendre en<br/>
            charge les demandes d’aides pour le compte du bénéficiaire.<br/>
            L’aider à sélectionner le bon artisan, les bons matériaux. Comparer<br/>
            les offres et l’aider à choisir selon son besoin.</h1>
            </div>
            : null
            }
        </div>

        <div 
        style={{marginTop:' '}}
        className='d-flex justify-content-center align-content-center align-items-center'>
            {
            faire ? <div>
            <h1 
            style={{opacity:'0.3', fontSize:'90px'}}
            className='d-flex justify-content-center align-content-center align-items-center'>
            Faire
            </h1>
            <br/><br/>
            <h1 style={{fontWeight:'bold', fontSize:'35px', color:'#54565a'}}>

            Coordonner et s’assurer de la bonne réalisation des travaux.<br/>
            Garantir le respect des délais et le bon versement des aides.<br/>
            </h1>
            </div>
            : null
            }
        </div>
         
        </div>
    )
}

export default Expertises3 

import React, {useState} from 'react'

const Groupe3 = () => {

    const [color, setColor]=useState(true   )
    const [color2, setColor2]=useState(false)
    const [color3, setColor3]=useState(false)
    const [text, setText]=useState('Nos clients et nos partenaires connaissent leur métier mieux que quiconque. Nous les aidons à développer leur activité et réduire leur impact.')
    

    const classy= color ?  'button-groupe' : 'button-groupe2'
    const classy2= color2 ?  'button-groupe' : 'button-groupe2'
    const classy3= color3 ?  'button-groupe' : 'button-groupe2'

    const button1= ()=>{
        setColor(true)
        setText('Nos clients et nos partenaires connaissent leur métier mieux que quiconque. Nous les aidons à développer leur activité et réduire leur impact.')
         setColor2(false)
        setColor3(false)
    }
    const button2= ()=>{
        setColor(false)
        setColor2(true)
        setText('Avec nous, une nouvelle génération d’énergéticiens voit le jour : des acteurs qui font évoluer notre manière de voir et de consommer.')
        setColor3(false)
    }
    const button3= ()=>{
        setColor(false)
        setColor2(false)
        setColor3(true)
        setText('L’énergie de nos collaborateurs explore de nouvelles manières de réduire lempreinte environnementale des activités humaines.')
    }


    return (
        <div className='container-fluid groupe-color'>
            <div className='gridr3'>
            
            <div onClick={button1} style={{cursor:'pointer'}} className={`${classy}`}>
                <h3 >Respecter les forces</h3> 
            </div>


            <div onClick={button2} style={{cursor:'pointer'}} className={`${classy2}`}>
                 <h3 >Rendre visible l'énergie </h3> 
            </div>


            <div onClick={button3} style={{cursor:'pointer'}} className={`${classy3}`}>
                <h3 >Innover utile    </h3> 
            </div>


            </div>
             {color2 || color3? null
             :<h1 style={{marginTop:'-150px',fontSize:'50px', fontWeight:'bold',color:'gray'}}>{text}</h1>
              }

              {color2?<h1 style={{marginTop:'-150px',fontSize:'50px', fontWeight:'bold',color:'gray'}}>{text}</h1> 
             :
              null}

              {color3?<h1 style={{marginTop:'-150px',fontSize:'5    0px', fontWeight:'bold',color:'gray'}}>{text}</h1> 
             :
              null}

        </div>
    )
}

export default Groupe3

import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import useWindowSize from '../useWindowSize'
const Vision3 = () => {
    const {width}=useWindowSize()
    return (
        <>
        {width <650 ?
        null
        :
        <div  >
         <div  style={{height:'100vh' }}>
            <Parallax pages={4} style={{ marginTop: '100px', left: '0' }}>
<ParallaxLayer   offset={0}   speed={2.5} >
 
        <div className='grid2 vision3-pic ' style={{marginLeft:'50px'}}>
            <div className='d-flex justify-content-center align-content-center align-items-center col'>
               <img alt='' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4d166fed627d02bed6c962_Icon%20process%201.svg' />
                <br/>
                <h1 style={{marginLeft:'50px', color:'gray', fontSize:'20px', fontWeight:'bold'}}>
                Notre métier : réduire les 
                <br/> consommations d’énergie
                </h1>
            </div>
                         
        </div>
</ParallaxLayer>

 
<ParallaxLayer   offset={1}   speed={2.5} >
 
        <div className='grid2 vision31-pic ' style={{marginLeft:'50px'}}>
            <div className='d-flex justify-content-center align-content-center align-items-center col'>
               <img alt='' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4d166fe73f8061c234f927_Icon%20process%202.svg' />
                <br/>
                <h1 style={{marginLeft:'50px', color:'gray', fontSize:'20px', fontWeight:'bold'}}>
                Nous aidons à connaître avec
                <br/> précision les consommations

                </h1>
            </div>
             
        </div>
</ParallaxLayer>

<ParallaxLayer   offset={2}   speed={2.5} >
 
        <div className='grid2 vision32-pic ' style={{marginLeft:'50px'}}>
            <div className='d-flex justify-content-center align-content-center align-items-center col'>
               <img alt='' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4d166f8c04fd6c4482cfdf_Icon%20process%203.svg' />
                <br/>
                <h1 style={{marginLeft:'50px', color:'gray', fontSize:'20px', fontWeight:'bold'}}>
                Pour formuler des
                <br/> préconisations réalistes à <br/>
                mettre en œuvre

                </h1>
            </div>
             
        </div>
</ParallaxLayer>

<ParallaxLayer   offset={3}   speed={2.5} >
 
        <div className='grid2 vision33-pic ' style={{marginLeft:'50px'}}>
            <div className='d-flex justify-content-center align-content-center align-items-center col'>
               <img alt='' src='https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4d16735f35d495a042dab2_Icon%20process%204.svg' />
                <br/>
                <h1 style={{marginLeft:'50px', color:'gray', fontSize:'20px', fontWeight:'bold'}}>
                & agir concrètement et
                <br/>durablement sur nos <br/>
                consommations

                </h1>
            </div>
             
        </div>
</ParallaxLayer>


</Parallax> 


</div>
        </div>
        }
        </>
        
    )
}

export default Vision3

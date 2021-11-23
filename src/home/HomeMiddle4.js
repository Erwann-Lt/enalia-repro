import React from 'react'
import { Link } from 'react-router-dom'

const HomeMiddle4 = () => {
    return (
        <div style={{height:'100vh'}}>
             <h2 style={{fontSize:'2.5em', fontWeight:'bold', color:'#54565a',
            marginLeft:' 200px'
            }}> Notre regard sur le secteur. Un<br/>
            oeil 
            <em className='highlight'>curieux</em>.</h2>

            <div className='grid3'>
            <div  style={{
                zIndex:'1000',
                marginTop:'20px', backgroundSize:'200%', height:'600px' ,backgroundRepeat:'no-repeat',
            backgroundImage:'url(https://uploads-ssl.webflow.com/5f4d6f5c3420034337bd5a1e/6079a4aacd9f318b5058ec4c_guillaume-perigois-0NRkVddA2fw-unsplash.jpg)'}}>
             <br/><br/><br/><br/><br/><br/><br/> <br/><br/> 
            <h2 style={{color:'black', fontWeight:'bold', marginLeft:'100px'}}>EUROPE</h2>
            <h4 style={{color:'yellow', fontWeight:'bold', marginLeft:'100px'}}>
            La commision tire un <br/>
            premier bilan des<br/>
            stratégies de rénovation <br/>
            de 13 Etats membres</h4>
            <a href='https://www.enalia.com/blog-posts/commission-bilan-strategies-renovation' target='_blank' rel='noreferrer'>
            <h5 style={{color:'black', fontWeight:'bold', marginLeft:'100px'}}>Lire</h5></a>
            </div>

           
            <div className='home-pic4'  style={{marginTop: '20px', backgroundSize:'100%', height:'300px' ,backgroundRepeat:'no-repeat',
            backgroundImage:'url(https://uploads-ssl.webflow.com/5f4d6f5c3420034337bd5a1e/6011620bff41e92132178c43_Joe_Biden_-_48252462456%20(1).jpg)'}}>
             <br/><br/><br/><br/><br/><br/><br/> <br/><br/> 
            <h2 style={{color:'#7fe3a5', fontWeight:'bold', marginLeft:'80px', marginTop:'-150px'}}>ENVIRONNEMENT</h2>
            <h4 style={{color:'whitesmoke', fontWeight:'bold', marginLeft:'80px'}}>
            Make America<br/>
            green again?<br/> </h4>
            <a href='https://www.enalia.com/blog-posts/joe-biden' target='_blank' rel='noreferrer'>
            <h5 style={{color:'black', fontWeight:'bold', marginLeft:'100px'}}>Lire</h5></a>
            </div>
            
            <div className='home-pic4'  style={{marginTop: '20px', backgroundSize:'100%', height:'300px' ,backgroundRepeat:'no-repeat',
            backgroundImage:'url(https://uploads-ssl.webflow.com/5f4d6f5c3420034337bd5a1e/5fd226459f28454c50eb38ee_Economie%20energie_Enalia.jpg'}}>
             <br/><br/><br/><br/><br/><br/><br/> <br/><br/> 
            <h2 style={{color:'#7fe3a5', fontWeight:'bold', marginLeft:'80px', marginTop:'-150px'}}>TRIBUNE</h2>
            <h4 style={{color:'whitesmoke', fontWeight:'bold', marginLeft:'80px'}}>
            Economiser l'énergie<br/>
            </h4>
            <a href='https://www.enalia.com/blog-posts/economiser-lenergie-doit-etre-la-prochaine-grande-orientation-politique-francaise' target='_blank' rel='noreferrer'>
            <h5 style={{color:'black', fontWeight:'bold', marginLeft:'100px'}}>Lire</h5></a>
            </div>

            <div></div>

            <div className='home-pic4' 
            style={{
                zIndex:'1000',
                marginTop: '120px', backgroundSize:'100%', 
            width:'',height:'300px' ,backgroundRepeat:'no-repeat',
            backgroundImage:'url(https://uploads-ssl.webflow.com/5f4d6f5c3420034337bd5a1e/5f87207b1fcffed57c20230a_La%20naissance%20d-un%20nouveau%20groupe.jpg'}}>
             <br/><br/><br/><br/><br/><br/><br/> <br/><br/> 
            <h2 style={{color:'#7fe3a5', fontWeight:'bold', marginLeft:'80px', marginTop:'-150px'}}>ENALIA</h2>
            <h4 style={{color:'whitesmoke', fontWeight:'bold', marginLeft:'80px'}}>
            La naissance d'un nouveau groupe<br/>
            </h4>
            <a href='https://www.enalia.com/blog-posts/la-naissance-dun-nouveau-groupe' target='_blank' rel='noreferrer'>
            <h5 style={{color:'black', fontWeight:'bold', marginLeft:'100px'}}>Lire</h5></a>
            </div>

            <div className='home-pic4' 
            style={{
                zIndex:'1000',
                marginTop: '120px', backgroundSize:'100%', 
            width:'',height:'300px' ,backgroundRepeat:'no-repeat',
            backgroundImage:'url(https://uploads-ssl.webflow.com/5f4d6f5c3420034337bd5a1e/5f87207b1fcffed57c20230a_La%20naissance%20d-un%20nouveau%20groupe.jpg'}}>
             <br/><br/><br/><br/><br/><br/><br/> <br/><br/> 
            <h2 style={{color:'#7fe3a5', fontWeight:'bold', marginLeft:'80px', marginTop:'-150px'}}>ENALIA</h2>
            <h4 style={{color:'whitesmoke', fontWeight:'bold', marginLeft:'80px'}}>
            La naissance d'un nouveau groupe<br/>
            </h4>
            <a href='https://www.enalia.com/blog-posts/la-naissance-dun-nouveau-groupe' target='_blank' rel='noreferrer'>
            <h5 style={{color:'black', fontWeight:'bold', marginLeft:'100px'}}>Lire</h5></a>
            </div>

                <div></div><div></div><div></div><div></div>

            <div className='d-flex jus justify-content-lg-between'>
             <Link  to='/medias'>
             <button style={{marginTop:'80px', marginLeft:'-20px'}}
              className='btn-lg btn-info'>Tous nos articles</button></Link> 
             <Link  to='/presse'>
             <button style={{marginTop:'80px', marginLeft:'50px'}} 
             className='btn-lg btn-info'>Espace presse</button></Link> 

            </div>

            </div>
        </div>
    )
}

export default HomeMiddle4

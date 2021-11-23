import React from "react";
import {Switch, Route} from 'react-router-dom'
import Carrieres from "./carrieres/Carrieres";
import Contact from "./contact/Contact";
import Expertises from "./expertises/Expertises";
import Footer from "./footer/Footer";
import Groupe from "./groupe/Groupe";
import Home from "./home/Home";
import Medias from "./medias/Medias";
import Presse from "./medias/Presse";
import NavBar from "./nav/NavBar";
import ScrollToTop from "./ScrollToTop";
import Vision from "./vision/Vision";
 

const App=()=> {
  return (
    <div className="container-fluid">
    <nav>
    <NavBar />
    </nav>

    <>
    <ScrollToTop />

    <Switch>
   
    <Route exact path='/'>
    <Home />
    </Route>

    <Route exact path='/vision'>
    <Vision />
    </Route>

    <Route exact path='/contact'>
    <Contact />
    </Route>

    <Route exact path='/medias'>
    <Medias />
    </Route>

    <Route exact path='/presse'>
    <Presse />
    </Route>

    <Route exact path='/carrieres'>
    <Carrieres />
    </Route>

    <Route exact path='/groupe'>
    <Groupe />
    </Route>

    <Route exact path='/expertises'>
    <Expertises />
    </Route>

    </Switch>
  </>


    <footer  >
    <Footer />
    </footer>
    </div>
  );
}

export default App;

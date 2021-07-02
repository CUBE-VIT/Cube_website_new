import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About  from './components/About';
import Domain from './components/Domain';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Stats from './components/Stats';
import Mission from './components/Mission';
import Contact from './components/contact'
import Events from "./components/Events"
import Teams from "./components/Teams"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Home/>
            <About/>
            <Domain/>
            <Footer/>
        </Route>

        <Route exact path="/about">
            <Aboutus/>
            <Stats/>
            <Mission/>
            <Footer/>
        </Route>

        <Route exact path="/contact">
            <Contact/>
       
            <Footer/>
        </Route>

        <Route exact path="/events">
            <Events/>
       
            {/* <Footer/> */}
        </Route>

        <Route exact path="/teams">
            <Teams/>
       
            <Footer/>
        </Route>
      </Switch>

      
    </div>
</Router>
  );
}

export default App;

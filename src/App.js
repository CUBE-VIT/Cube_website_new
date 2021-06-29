import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About  from './components/About';
import Domain from './components/Domain';
import Footer from './components/Footer';

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
      </Switch>
    </div>
</Router>
  );
}

export default App;

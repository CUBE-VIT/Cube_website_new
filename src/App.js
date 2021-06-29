import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path="/">

        </Route>

      </Switch>
    </div>
</Router>
  );
}

export default App;

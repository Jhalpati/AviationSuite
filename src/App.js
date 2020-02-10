import React from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import itemDetail from './itemDetail';
import Airlines from './airlines';
import airlineDetails from './airlineDetails';
import Arrivals from './Arrivals'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/airlines" exact component={Airlines} /> 
      <Route path="/shop/:id" component={itemDetail} />
      <Route path="/airlines/:id" component={airlineDetails}/>
      <Route path="/arrivals" component={Arrivals}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nav from './Nav';
import airports from './airports';
import itemDetail from './itemDetail';
import Airlines from './airlines';
import airlineDetails from './airlineDetails';
import Arrivals from './Arrivals';
import News from './news';
import Advisory from './Advisory';
import CovidDetail from './CovidDetail';
import ER from './Covid';
import NoMatch from './NoMatch';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>

      <Route path="/airports" exact component={airports} />
      <Route path="/airlines" exact component={Airlines} /> 
      <Route path="/airports/:id" component={itemDetail} />
      <Route path="/airlines/:id" exact component={airlineDetails}/>
      <Route path="/news/:id" component={News}/>
      <Route path="/advisory/:countryCode" component={Advisory}/>
      <Route path="/arrivals" component={Arrivals}/>
      <Route path="/covidDetail/:countryName" component={CovidDetail}/>
      <Route path="/ER" component={ER}/>
      <Route path="{NoMatch}" component={NoMatch} />


      </Switch>
    </div>
    </Router>

  );
}

export default App;

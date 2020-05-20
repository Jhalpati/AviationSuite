// Importing required modules, components & files
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./components/App.css";
import Nav from "./components/Nav";
import airports from "./components/airports";
import itemDetail from "./components/itemDetail";
import Airlines from "./components/airlines";
import airlineDetails from "./components/airlineDetails";
import Arrivals from "./components/Arrivals";
import News from "./components/news";
import Advisory from "./components/Advisory";
import CovidDetail from "./components/CovidDetail";
import ER from "./components/Covid";
import NoMatch from "./NoMatch";

// https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart

// Creating a home page component
const homePage = () => {
  return (
    <div>
      <h1>Hello, welcome to Aviation Suite</h1>
      <p>
        Please choose any of the 3 links from the navigation bar to get started
      </p>
    </div>
  );
};

// Main function starts here
function App() {
  return (
    // React Router used for correct routing of components and dynamic routing
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/airports" exact component={airports} />
          <Route path="/airlines" exact component={Airlines} />
          <Route path="/airports/:id" component={itemDetail} />
          <Route path="/airlines/:id" exact component={airlineDetails} />
          <Route path="/news/:id" component={News} />
          <Route path="/advisory/:countryCode" component={Advisory} />
          <Route path="/arrivals" component={Arrivals} />
          <Route path="/covidDetail/:countryName" component={CovidDetail} />
          <Route path="/ER" component={ER} />
          <Route component={homePage} />
        </Switch>
      </div>
      {/* Div below acts a footer */}
      <div className="App">
        <p>
          <b>Developed by Jaykumar Halpati</b>
        </p>
        <footer />
      </div>
    </Router>
  );
}

// App is exported to index.html
export default App;

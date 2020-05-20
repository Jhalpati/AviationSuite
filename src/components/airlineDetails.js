// Importing required modules, components & files
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// airlineDetails funtion starts here
// Match allows parameter transfer from the previous component to be used in this component
function AirlineDetails({ match }) {
    // useEffect hook is used for state management
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  // Variables such as APP_ID & APP_KEY are declared to be used in API's request url
  const [item, setItem] = useState([]);
  const APP_ID = "feaaeb2e";
  const APP_KEY = "36dd3313e18aceaf1eb36129b0c4efce";

  const fetchItem = async () => {
      // fetch() is used to make a request to the API
      // Part of the URL is extracted from match
    const fetchItem = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airlines/rest/v1/json/iata/${match.params.id}?appId=${APP_ID}&appKey=${APP_KEY}`
    );

    // Response received is stored as const item
    const item = await fetchItem.json();
    console.log(item.airlines[0]);
  // Sets item as (item.airlines[0])
    setItem(item.airlines[0]);
  };

  // return() allows data to be rendered 
  return (
    <div className="airport-info">
      <h1>Name: {item.name}</h1>
      <h2>IATA code: {item.iata}</h2>
      <h2>Contact: {item.phoneNumber}</h2>
      <h2>
        <Link to={`/news/${item.name}`}>News about: {item.name}</Link>
      </h2>
    </div>
  );
}

// AirlineDetails is exported to App.js
export default AirlineDetails;

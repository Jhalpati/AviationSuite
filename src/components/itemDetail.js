// Importing required modules, components & files
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Advisory from "./Advisory";

// Item funtion starts here
// Match allows parameters to be passed from a paramter
function Item({ match }) {
  const [items, setItems, item] = useState([]);
  // Variables to be used in API call
  const APP_ID = "feaaeb2e";
  const APP_KEY = "36dd3313e18aceaf1eb36129b0c4efce";

  // useEffect hook is used for state management
  useEffect(() => {
    const fetchItems = async () => {
      // fetch() is used to make a request to the API
      const fetchItems = await fetch(
        // Proxy was used due to a CORS error
        `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/iata/${match.params.id}?appId=${APP_ID}&appKey=${APP_KEY}`
      );

      // Response received is stored as const items
      const items = await fetchItems.json();
      console.log(items.airports[0]);
      // Sets response as items.airports

      setItems(items.airports);
    };

    fetchItems();

    // fetchNews();
  }, []);

  // return() allows data to be rendered
  return (
    <div className="airport-info" >
      {/* Map function is used to loop over API response which as an array of 10 objects */}
      {items.map((data) => (
        <React.Fragment>
        <div key={data.fs}>
          <h1>Name: {data.name}</h1>
          <h2>
            City:{data.city}, {data.countryName}
          </h2>
          <h3>Local time:{data.localTime}</h3>
          <h2>
            {/* Links to other component with data from API response  */}
            <Link to={`/news/${data.name}`}>News about: {data.name}</Link>
          </h2>
          <h2>
            <Link to={`/Advisory/${data.countryCode}/`}>
              Covid-19 advisory for {data.countryName}
            </Link>
          </h2>
          <h2>
            <Link to={`/CovidDetail/${data.countryName}/`}>
              Covid-19 stats of {data.countryName}
            </Link>
          </h2>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
}

// Iem is exported to App.js
export default Item;

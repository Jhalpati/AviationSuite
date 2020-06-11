// Importing required modules, components & files
import React, { useState, useEffect } from "react";

// Advisory funtion starts here
// Match allows parameter transfer from the previous component to be used in this component
function Advisory({ match }) {
  const [items, setItems] = useState([]);
  const code = match.params.countryCode;

  // useEffect hook is used for state management
  useEffect(() => {
    const fetchItems = async () => {
      // fetch() is used to make a request to the API
      // Part of the URL is extracted from match
      const fetchItems = await fetch(
        `https://www.travel-advisory.info/api?countrycode=${match.params.countryCode}`
      );

      // Response received is stored as const items
      const items = await fetchItems.json();
      const url = items.data[code].advisory.source;
      // Sets items as (items.data[code].advisory)
      setItems(items.data[code].advisory);
      var countries1 = url.slice(33);
    };

    fetchItems();
  }, []);

  // return() allows data to be rendered 
  return (
    //Map was not used as only an object was received
    <div className="airport-info">
      <h1>{code} travel advisory</h1>
      <p>Safety score: {items.score}/ 5</p>
      <p>{items.message}</p>
      <p>Updated on {items.updated}</p>

      <a href={items.source} target="_blank">
        Travel advisory for {code}{" "}
      </a>
    </div>
  );
}

// Advisory is exported to App.js
export default Advisory;

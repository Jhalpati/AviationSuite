// Importing required modules, components & files
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// airline funtion starts here
function Airlines() {
 

    // Variables namely APP_ID & APP_KEY are declared to be used in API's request url
    
  const APP_ID = "feaaeb2e";
  const APP_KEY = "36dd3313e18aceaf1eb36129b0c4efce";
// State variables are declared for error handling
  const [data, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("BA");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

      // useEffect hook is used for state management
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(false);

      try {
      // fetch() is used to make a request to the API
        const response = await fetch(
          // Proxy is used before the actual URL, to resolve CORS error
          //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
          `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airlines/rest/v1/json/iata/${query}?appId=${APP_ID}&appKey=${APP_KEY}`
        );

        // Response received is stored as const data
        const data = await response.json();
        console.log(data);
        // Sets item as (data.airlines)
        setItems(data.airlines);
        // Error handling state activates when there is problem fetching the API 
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchItems();
  }, [query]);


  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Function to set Query and resetting the input field
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // return() allows data to be rendered 
  return (
    <div>
      {/* Form for user input */}
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Enter an airline code Ex: BA"
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* Form ends here */}

      {/* Mini components to show feedback based on state */}
      {error && (
        <div style={{ color: `red` }}>
          <h1>An error occurred, while fetching API</h1>
        </div>
      )}

      {loading && (
        <div style={{ color: `green` }}>
          <h1>
            Fetching details of"<strong>{query}</strong>"
          </h1>
        </div>
      )}

        {/* Map function is used to loop over API response which as an array of 10 objects */}
      {data.map((data) => (
        <h1 key={data.fs}>
          {/* Using Link to create a link to the airlineDetails component */}
          <Link to={`/airlines/${data.fs}`}>
            {data.iata}: {data.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}

// airlines is exported to App.js
export default Airlines;

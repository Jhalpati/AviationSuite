// Importing required modules, components & files
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Advisory from "./Advisory";
import {
  Card,
  CssBaseline,
  Container,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import styles from "./CovidDetails.module.css";

// useStyles is used to provide aesthetics to some elements of the component

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// ER funtion starts here
function ER() {
  const [data, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("UK");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect hook is used for state management
  useEffect(() => {
    // fetch() is used to make a request to the API
    const fetchItems = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
          // Query entered by the user
          // No proxy was used in this call, unlike calls in other component
          `https://coronavirus-19-api.herokuapp.com/countries/${query}`
        );

        // Response received is stored as const item
        const data = await response.json();
        // Sets item as (data)
        setItems(data);
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

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // Variable for Material-UI's style usage
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // return() allows data to be rendered
  return (
    <div>
      {/* Form for user input */}
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Enter a Countrys' name Ex: France"
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {/* Functions for error handling */}
      {error && (
        <div style={{ color: `red` }}>
          <h1>An error occurred, while fetching API</h1>
        </div>
      )}

      {loading && (
        <div style={{ color: `green` }}>
          <h1>
            Fetching Covid-19 details of "<strong>{query}</strong>"
          </h1>
        </div>
      )}

      {/* Material UI Typography used so that data displayed becomes responsive */}
      <div className={styles.container}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h3">Name: {data.country}</Typography>
            <Typography variant="h4">Cases:{data.cases}</Typography>
            <Typography variant="h4">Cases today:{data.todayCases}</Typography>
            <Typography variant="h4">Deaths:{data.deaths}</Typography>
            <Typography variant="h4">
              Deaths today:{data.todayDeaths}
            </Typography>
            <Typography variant="h4">Recovered:{data.recovered}</Typography>
            <Typography variant="h4">Active:{data.active}</Typography>
            <Typography variant="h4">Critical:{data.critical}</Typography>
            {/* <Typography variant="h4">First Case:{data.firstCase}</Typography> */}
            <Typography variant="h5">
              Information from
              <a href="https://www.worldometers.info" target="_blank">
                {" "}
                www.worldometers.info
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ER is exported to App.js
export default ER;

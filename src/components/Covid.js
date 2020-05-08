import React, { useState, useEffect } from "react";
// import "./App.css";
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
import axios from "axios";

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

function ER() {
  const APP_ID = "feaaeb2e";
  const APP_KEY = "36dd3313e18aceaf1eb36129b0c4efce";

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("UK");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
          `https://coronavirus-19-api.herokuapp.com/countries/${query}`
        );

        const data = await response.json();
        console.log(data);
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

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
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
            <Typography variant="h4">Critical:{data.Critical}</Typography>
            <Typography variant="h4">First Case:{data.firstCase}</Typography>
            <Typography variant="h5">
              Information from www.worldometers.info
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ER;

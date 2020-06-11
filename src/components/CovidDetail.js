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

// CovidDetail funtion starts here
function CovidDetail({ match }) {
  const [items, setItems, item] = useState([]);
  const APP_ID = "feaaeb2e";
  const APP_KEY = "36dd3313e18aceaf1eb36129b0c4efce";

  // useEffect hook is used for state management
  useEffect(() => {
    const fetchItems = async () => {
      // fetch() is used to make a request to the API
      const fetchItems = await fetch(
        // No proxy was used in this call, unlike calls in other component
        `https://coronavirus-19-api.herokuapp.com/countries/${match.params.countryName}`
      );
      // Response received is stored as const items
      const items = await fetchItems.json();
      // Sets response as items
      setItems(items);
    };

    fetchItems();

    // fetchNews();
  }, []);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // return() allows data to be rendered
  return (
    <div className="airport-info">
      <div className={styles.container}>
        {/* Material UI Typography used so that data displayed becomes responsive */}
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h3">Name: {items.country}</Typography>
            <Typography variant="h4">Cases:{items.cases}</Typography>
            <Typography variant="h4">Cases today:{items.todayCases}</Typography>
            <Typography variant="h4">Deaths:{items.deaths}</Typography>
            <Typography variant="h4">
              Deaths today:{items.todayDeaths}
            </Typography>
            <Typography variant="h4">Recovered:{items.recovered}</Typography>
            <Typography variant="h4">Active:{items.active}</Typography>
            <Typography variant="h4">Critical:{items.critical}</Typography>
            {/* <Typography variant="h4">First Case:{items.firstCase}</Typography> */}
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
export default CovidDetail;

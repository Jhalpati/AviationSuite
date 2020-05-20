// Importing required modules, components & files
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CssBaseline,
  Container,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  MenuItem,
} from "@material-ui/core";

// Nav funtions starts here
function Nav() {
  return (
    <nav>
      {/* Typography and MenuItem element of Material-UI used */}
      <Typography variant="h3">Aviation Suite</Typography>

      <ul className="nav-links">
        <MenuItem>
          {/* Link to main component */}
          <Link to="/airports">Airports</Link>
        </MenuItem>
        {/* <Link to="/about">
                <li>About</li></Link> */}
        <MenuItem>
          <Link to="/airlines">
            <li>Airlines</li>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/ER">
            <li>Covid-19</li>
          </Link>
        </MenuItem>
        {/* <Link to="/arrivals">
                <li>Arrivals</li>
                </Link> */}
      </ul>
    </nav>
  );
}

// ER is exported to App.js
export default Nav;

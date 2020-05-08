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

function Nav() {
  return (
    <nav>
      <Typography variant="h3">Aviation Suite</Typography>

      <ul className="nav-links">
        <MenuItem>
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

export default Nav;

import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
  return (
        <nav>
            <h3>
                Aviation Suite
            </h3>
            <ul className="nav-links">
                {/* <Link to="/about">
                <li>About</li></Link> */}
                <Link to="/shop">
                <li>Airports</li>
                </Link>
                <Link to="/airlines">
                <li>Airlines</li>
                </Link>
                {/* <Link to="/arrivals">
                <li>Arrivals</li>
                </Link> */}

            </ul>
        </nav>
  );
}

export default Nav;

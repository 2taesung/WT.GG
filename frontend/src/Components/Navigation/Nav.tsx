import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap"; 
import { GiHamburgerMenu } from 'react-icons/gi';
import './Nav.css';

function Nav() {
  // const logo = "/image/logo.jpg"

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <div className="nav-logo">
          WT.GG
          {/* <img src={logo} alt="logo" /> */}
        </div>
      </Link>
      <div className="nav-right">
        <Dropdown>
          <Dropdown.Toggle variant="white" id="nav-dropdown-basic">
            <GiHamburgerMenu size="2rem" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/ranking">Ranking</Dropdown.Item>
            <Dropdown.Item href="/board">Community</Dropdown.Item>
            <Dropdown.Item href="/test">Recommend</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Nav;
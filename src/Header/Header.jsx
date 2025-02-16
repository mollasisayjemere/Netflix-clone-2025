import React from 'react'
import styles from './Header.module.css'
import NetflixLogo from "../../src/CommenResoures/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        {" "}
        {/* Dark background, white text, responsive expand */}
        <Container>
          {" "}
          {/* Responsive container */}
          <Navbar.Brand>
            <img
              src={NetflixLogo}
              alt="Netflix Logo"
              width="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
          {/* Hamburger menu for small screens */}
          <Navbar.Collapse id="basic-navbar-nav">
            {" "}
            {/* Collapsible navigation */}
            <Nav className="me-auto">
              {" "}
              {/* Left-aligned navigation items */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tvshows">TV Shows</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#latest">Latest</Nav.Link>
              <Nav.Link href="#mylist">My List</Nav.Link>
              <Nav.Link href="#browse">Browse by Languages</Nav.Link>
            </Nav>
            <Nav>
              {" "}
              {/* Right-aligned navigation items */}
              <Nav.Link>
                <SearchIcon />
              </Nav.Link>
              <Nav.Link>
                <NotificationsNoneIcon />
              </Nav.Link>
              <Nav.Link>
                <AccountBoxIcon />
              </Nav.Link>
              <Nav.Link>
                <ArrowDropDownIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header




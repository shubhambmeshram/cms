import React from "react";
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="javascript:void(0)">CMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link to="home" href="Tiles">Home</Nav.Link>
              <Nav.Link to="opd" href="opd">About Us</Nav.Link> */}
              <NavLink to='/'>home</NavLink>
              <NavLink to='/opd'>OPD</NavLink>
              <NavLink to='/UserData'>UserData</NavLink>
              <NavLink to='/About'>About</NavLink>
              {/* <NavLink to='/Spinner'>Spinner</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

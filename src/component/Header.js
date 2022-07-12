import React from "react";
import { Navbar, Container, Nav, } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">CMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

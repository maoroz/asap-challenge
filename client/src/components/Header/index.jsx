import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React Test App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

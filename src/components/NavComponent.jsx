import { Container, Nav, Navbar, NavbarText } from "react-bootstrap";
import { CodeSlash } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

import ThemeToggler from "./ThemeToggler";

const NavComponent = () => {
  return (
    <header>
      <Navbar expand="md" className="navbar-dark bg-dark fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <CodeSlash width={"2em"} height={"2em"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/product" className="nav-link">
                Product
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <ThemeToggler />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavComponent;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Style's Furniture</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link  to={`/`}>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link  to={`/aboutme`}>About us</Link></Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link  to={`/living`}>Living</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link  to={`/diningroom`}>DiningRoom</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link  to={`/bedroom`}>Bedroom</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
            
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

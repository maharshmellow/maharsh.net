import Container from "react-bootstrap/Container";
import { default as BSNavbar } from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return(
    <Container className="navbar-wrapper" fluid={true}>
      <BSNavbar collapseOnSelect expand="sm">
        <BSNavbar.Brand className="logo">maharsh.</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link target="_blank" href="http://www.github.com/maharshmellow">Github</Nav.Link>
            <Nav.Link target="_blank" href="https://www.linkedin.com/in/maharshpatel/">LinkedIn</Nav.Link>
            <Nav.Link href="mailto:contact@maharsh.net">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </BSNavbar>
    </Container>
  )
}
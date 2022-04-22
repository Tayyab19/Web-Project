import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const SyntaxNav = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container class="container-fluid">
          <Navbar.Brand href="#home">Languages</Navbar.Brand>
          <Nav className=" text-black me-auto">
            <Nav.Link className="text-black">
              <Link to="/syntaxes/html">Html </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/syntaxes/css">CSS</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/syntaxes/javascript">Javascript </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h2 className="text-centre">Laguages Syntaxes</h2>
    </>
  );
};

export default SyntaxNav;

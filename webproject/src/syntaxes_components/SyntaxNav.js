import { Container, Navbar, Nav } from "react-bootstrap";
import Javascript from "./Javascript";
import CSS from "./CSS";
import HTML from "./Html";
import { useState } from "react";

const SyntaxNav = () => {
  const [sID, setsID] = useState("html");
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="container-fluid">
          <Navbar.Brand href="#home">Languages</Navbar.Brand>
          <Nav className=" text-black me-auto">
            <Nav.Link className="text-black">
              <a onClick={() => setsID("html")}>Html </a>
            </Nav.Link>
            <Nav.Link>
              <a onClick={() => setsID("css")}>CSS</a>
            </Nav.Link>
            <Nav.Link>
              <a onClick={() => setsID("javascript")}>Javascript </a>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {sID === "css" ? <CSS /> : null}
      {sID === "javascript" ? <Javascript /> : null}
      {sID === "html" ? <HTML /> : null}
    </>
  );
};

export default SyntaxNav;

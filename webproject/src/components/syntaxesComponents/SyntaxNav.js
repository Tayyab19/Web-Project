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
              <p onClick={() => setsID("html")}>Html </p>
            </Nav.Link>
            <Nav.Link>
              <p onClick={() => setsID("css")}>CSS</p>
            </Nav.Link>
            <Nav.Link>
              <p onClick={() => setsID("javascript")}>Javascript </p>
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

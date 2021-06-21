// import { Link } from "react-router";
import { Nav, Container, Navbar } from "react-bootstrap";
// import { Route, Link } from "react-router-dom";

const Menu = () => {
  const myStyle = {
    paddingBottom: "0px !important",
    paddingTop: "0px;",
  };
  function LoginProfile(props) {
    const isLoggedIn = JSON.parse(sessionStorage.getItem("userData"));
    if (isLoggedIn) {
      return <Nav.Link href="/profile">Profil</Nav.Link>;
    }
    return <Nav.Link href="/login">Logga in</Nav.Link>;
  }
  return (
    <Container className="navbar-nav">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Tripify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Hem</Nav.Link>
            <Nav.Link href="/about">Om oss</Nav.Link>
            <Nav.Link href="/contact">Kontakt</Nav.Link>
            <Nav.Link href="/explore">Upplev</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>

          <Nav>
            <LoginProfile isLoggedIn={false} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header
        style={myStyle}
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-4 border-bottom"
      ></header>
    </Container>
  );
};

export default Menu;

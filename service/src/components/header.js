import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Art Website lol
        </Navbar.Brand>

        <Nav as="ul">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/commission-info">
              Commission Info
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/commission-request">
              Request Here
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

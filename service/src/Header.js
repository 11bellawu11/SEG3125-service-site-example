import logo from './logo.svg';
import './Header.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

function Header() {
  return (
  <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            Art Website lol
          </Navbar.Brand>
          
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">
                Commission Info
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">
                Request Here
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">
                Gallery
              </Nav.Link>
            </Nav.Item>
          </Nav>
          

        </Container>
      </Navbar>
  </>
        
  );
}

export default Header;

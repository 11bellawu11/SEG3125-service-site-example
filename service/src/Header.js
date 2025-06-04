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
          
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link href="/commission-info">
                Commission Info
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link href="/commission-request" >
                Request Commission
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link href="/gallery">
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

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

function Header() {
  return (
  <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            Art Website lol
          </Navbar.Brand>
          
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" href="/commission-info">
                Commission Info
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" href="/commission-request">
                Request Here
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link eventKey="link-3" href="/gallery">
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

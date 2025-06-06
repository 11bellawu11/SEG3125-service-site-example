import './footer.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
        <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
            <div className="container">
            <p className="mb-1">Contact us at <a href="mailto:dummymail@gmail.com">artServiceLol@gmail.com</a></p>
            <p className="mb-0">© 2025 Art Website Lol. Site designed by Bella Wu, Enuma Otiji.</p>
            </div>
        </footer>
    </Container>
  );
}
export default Footer;
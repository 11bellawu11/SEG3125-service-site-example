import Container from 'react-bootstrap/Container';
import './home.css';

function Home() {
  return(
    <Container >
      <Container className="hero-home">
        <h1 className='home-header'>Welcome</h1>
        <p className='home-message'>Art Website Lol is an Art Websit where we do Art Website things</p>
        <div className='home-button request-work' role='button'>Hire us</div>
        <div className='home-button view-work' role='button'>Our works</div>
        <img className='home-hero-img' src='./hero-img.avif' alt='girl'></img>
      </Container>

      <div className="tagline-home" >
        <p>Bring yourself into the world of art — uniquely and
           <span style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem', color: "#D88C9A" }}>
            beautifully</span> .</p>
      </div>

      <div className="services-section">
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem' }}>Our Services</h2>
        <div className="service-cards">
          <div className="card"> {/* Headshot */}</div>
          <div className="card"> {/* Midshot */}</div>
          <div className="card"> {/* Full Body */}</div>
        </div>
      </div>
    </Container>
  );
}
export default Home;
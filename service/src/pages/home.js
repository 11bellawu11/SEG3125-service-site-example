import Container from 'react-bootstrap/Container';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <Container >
      <Container className="hero-home">
        <h1 className='home-header'>Welcome</h1>
        <p className='home-message'>At Art Website Lol, we turn your ideas into custom art,
           whether it’s a headshot or a full body piece.</p>
       
          <Link to="/commission-request" className='home-button request-work'>
            Hire Us
          </Link>
          <Link to="/gallery"  className='home-button view-work'>
           Our Works
          </Link>
        <img className='home-hero-img' src={require('../images/Commission_82.png')} alt='girl'></img>
      </Container>

      <div className="tagline-home" >
        <p>Bring yourself into the world of art — uniquely and
           <span style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem', color: "#D88C9A" }}>
            beautifully</span> .</p>
      </div>

      <div className="services-section">
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem' }}>Our Services</h2>
        <div className="service-cards">
          <div className="service-card headshot"> 
            <img src='./headshot.PNG' alt='headshot art of lady'></img>
            <h2>Headshots</h2>
            <p>A focused portrait from the shoulders up, ideal for profile images, branding, or gifting. Simple, clean, and expressive </p>
            <Link to="/commission-info"  className='home-button request-work'>
              Learn More!
            </Link>
          </div>
          <div className="service-card midshot"> 
            <img src='./midshot.jpg' alt='midshot image'></img>
            <h2>Midshots</h2>
            <p>A half-body illustration from the waist up. Perfect for showcasing clothing, posture, and expression. Suitable for character art, presentations, or promotional use.</p>
            <Link to="/commission-info"  className='home-button request-work'>
              Learn More!
            </Link>
          </div>
          <div className="service-card fullbody"> 
            <img src='./fullbody.png' alt='fullbody drawing'></img>
            <h2>Fullbody</h2>
            <p>A complete illustration capturing the subject from head to toe. Recommended for dynamic poses, full outfits, and detailed character designs. Ideal for reference sheets, storytelling, or standout visuals.</p>
            <Link to="/commission-info"  className='home-button request-work'>
              Learn More!
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Home;
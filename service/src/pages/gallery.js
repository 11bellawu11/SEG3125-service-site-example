import Container from "react-bootstrap/esm/Container";
import styles from './gallery.css';
import HeadshotCarousel from "../components/headshot-carousel";

function Gallery() { 

  return(
    
    <Container class="gallery-body">
      <Container class="container1">
        <h2>Welcome to the Gallery</h2>
        <h4>Here you will find some example works!</h4>
      </Container>

      <Container class="container1">
        
        <Container class="container-images">
        <HeadshotCarousel />
        </Container>
        <Container class="container-images">

        </Container>

        <Container class="container-images">

        </Container>

      </Container>
    </Container>

  );
}
export default Gallery;
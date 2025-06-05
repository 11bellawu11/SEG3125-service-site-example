import Container from "react-bootstrap/esm/Container";
import styles from './gallery.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';


function Gallery() { 
  return(

      <Container class="gallery-body">
        <h2>Welcome to the Gallery</h2>
        <h4>Here you will find example works!</h4>

        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem itemId={1}>
            <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
      </Container>
    
    

  );
}
export default Gallery;
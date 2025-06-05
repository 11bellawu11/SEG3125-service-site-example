import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './gallery.css';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Gallery() { 
  const [index1, setIndex1] = useState(0);

  const handleSelect1 = (selectedIndex) => {
    setIndex1(selectedIndex);
  };


  return(
    <Container class="gallery-body">
      <Container className="container1">
        <h2>Welcome to the Gallery</h2>
        <h4>Here you will find some example works!</h4>
      </Container>

      <Container className="container1">
        <Row className="row1">
          <Col className="col1">
            <h5>
              Headshot drawings!
            </h5>
          </Col>

          <Col className="col1">
              <Carousel activeIndex={index1} onSelect={handleSelect1}>
                  <Carousel.Item>
                      <img src={require('../images/20200307_190940000_iOS.jpg')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={require('../images/20200307_191006000_iOS.jpg')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={require('../images/20200307_191028000_iOS.jpg')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={require('../images/20200324_175234000_iOS.jpg')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
              </Carousel>
          </Col>

        </Row>

      </Container>


    </Container>
    

  );
}
export default Gallery;
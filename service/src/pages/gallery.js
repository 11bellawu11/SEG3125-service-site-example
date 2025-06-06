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

    const [index2, setIndex2] = useState(0);

  const handleSelect2 = (selectedIndex) => {
    setIndex2(selectedIndex);
  };

    const [index3, setIndex3] = useState(0);

  const handleSelect3 = (selectedIndex) => {
    setIndex3(selectedIndex);
  };


  return(
    <Container className="gallery-body">
      <Container className="container2">
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem'}}>Welcome to the Gallery!</h2>
        <h5>Here you will find some example works</h5>
      </Container>

      <Container className="container1">
        <Row className="row1">
          <Col className="col1">
            <h3 style={{fontWeight: "bold"}}>
              Headshot drawings!
            </h3>
            <h5>
              A vibraint anime-styled headshot, good for profile pics!
            </h5>
            <br />
            <h6>
              ⋆˙⟡ 2000x2000 px minimum dimensions ⟡˙⋆<br />
              ⋆˙⟡ 300 DPI, printing quality ⟡˙⋆
            </h6>
          </Col>

          <Col className="col1">
              <Carousel activeIndex={index1} onSelect={handleSelect1}>
                  <Carousel.Item>
                      <img src={require('../images/Commission 75 - Zion-Showcase.png')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img  src={require('../images/20200307_191006000_iOS.jpg')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={require('../images/20240907_175821192_iOS.png')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src={require('../images/20200324_175234000_iOS.jpg')} class="img-fluid" alt="..."></img>
                  </Carousel.Item>
              </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className="container1">
        <Row className="row1">
          <Col className="col1">
            <h3 style={{fontWeight: "bold"}}>
              Halfbody drawings!
            </h3>
            <h5>
              A vibraint anime-styled halfbody illustration, good for prints!
            </h5>
            <br />
            <h6>
              ⋆˙⟡ 3000x2000 px minimum dimensions ⟡˙⋆<br />
              ⋆˙⟡ 300 DPI, printing quality ⟡˙⋆
            </h6>
          </Col>

          <Col className="col1">
            <Carousel activeIndex={index2} onSelect={handleSelect2}>
              <Carousel.Item>
                  <img src={require('../images/FengQing Wedding Zine 1.png')} class="img-fluid" alt="..."></img>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={require('../images/20240104_193355273_iOS.png')} class="img-fluid" alt="..."></img>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={require('../images/20230104_074114062_iOS.png')} class="img-fluid" alt="..."></img>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className="container1">
        <Row className="row1">
          <Col className="col1">
            <h3 style={{fontWeight: "bold"}}>
              Fullbody drawings!
            </h3>
            <h5>
              A vibraint anime-styled fullbody illustration, good for references and prints!
            </h5>
            <br />
            <h6>
              ⋆˙⟡ 4000x3000 px minimum dimensions ⟡˙⋆<br />
              ⋆˙⟡ 300 DPI, printing quality ⟡˙⋆
            </h6>
          </Col>

          <Col className="col1">
            <Carousel activeIndex={index3} onSelect={handleSelect3}>
              <Carousel.Item>
                  <img src={require('../images/Commission 64 - Monoleaff_-Showcase.png')} class="img-fluid" alt="..."></img>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={require('../images/20230624_213355261_iOS.png')} class="img-fluid" alt="..."></img>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={require('../images/Commission 76 - The_Adversary.png')} class="img-fluid" alt="..."></img>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

      </Container>
    </Container>
    

  );
}
export default Gallery;
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './info.css';

function CommissionInfo() {
  return (

    <Container className="info-body">
      <Container className="container2">
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem'}}>Pricing and Terms Of Service</h2>
        <h5>Please read through the TOS at the bottom before commissioning!</h5>
      </Container>

      <Container className="container1">
        <Row className="row1">
          <Col className="col1" style={{textAlign: "left", padding:"5%"}}>
            <p>
              ✦ Fullbody armor and mecha <br />
              ✦ Animals <br />
              ✦ NSFW or suggestive content <br />
            </p>
            <p>
              ✦ Simple color backgrounds are free, more complex backgrounds like scenery are extra depending on the complexity <br />
              ✦ Extra characters or expressions are $10-50 each (depending on the type of commission) <br />
              ✦ Commercial pieces for streaming and branding purposes will have a price increase of +50% <br />
              ✦ If it is a commercial piece where profit will be gained, commission price will also be adjusted to reflect (up to a +300% increase depending on usage) <br />
            </p>
          </Col>
          <Col className="col1">
            <p>
              ☾　__Headshot/bust-up__　☽ <br />
              Sketch only: $5 <br />
              Colored sketch: $7.50 <br />
              Colored and shaded sketch: $10 <br />
              Full color/render: $35 <br />
              <br />
              ☾　__Halfbody/legs-up__　☽ <br />
              Sketch only: $10 <br />
              Colored sketch: $15 <br />
              Colored and shaded sketch: $20 <br />
              Full color/render: $50 <br />
              <br />
              ☾　__Fullbody__　☽ <br />
              Sketch only: $20 <br />
              Colored sketch: $30 <br />
              Colored and shaded sketch: $40 <br />
              Full color/render: $100 <br />
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default CommissionInfo;
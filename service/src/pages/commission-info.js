import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './info.css';

function CommissionInfo() {
  return (

    <Container className="info-body">
      <Container className="container2">
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem'}}>Pricing and Terms Of Service</h2>
        <h5 style={{color: "#D88C9A"}}>Please read through the TOS at the bottom before commissioning!</h5>
      </Container>

      <Container className="container1">
        <Row className="row1">
          <Col className="col1" style={{textAlign: "left", margin:"5%", borderRight: "2px solid #D88C9A"}}>
            <h4 style={{padding: "5%", fontWeight: "bold", textAlign: "center"}}>Basic info</h4>
            <p style={{margin: "5%"}}>
              ✦ Fullbody armor and mecha <br />
              ✦ Animals <br />
              ✦ NSFW or suggestive content <br />
              ✦ Simple color backgrounds are free, more complex backgrounds like scenery are extra depending on the complexity <br />
              ✦ Extra characters or expressions are $10-50 each (depending on the type of commission) <br />
              ✦ Commercial pieces for streaming and branding purposes will have a price increase of +50% <br />
              ✦ If it is a commercial piece where profit will be gained, commission price will also be adjusted to reflect (up to a +300% increase depending on usage) <br />
            </p>
          </Col>
          <Col className="col1" style={{paddingTop: "5%", paddingBottom: "5%"}}>
            <h4 style={{padding: "5%", fontWeight: "bold"}}>Commission prices</h4>
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
      <Container className="container2" style={{textAlign:"left"}}>
        <h4 style={{padding: "5%", fontWeight: "bold", textAlign:"center"}}>Terms of Service</h4>
        <h5>
        ☾　Payment　☽
        </h5>
        <p>
        ✦ Will only work on piece when full payment is recieved, unless there is an agreed-upon payment plan (allowed for big commissions) <br />
        ✦ Payment is done upfront with Paypal or through VGen. <br />
        ✦ Partial payment can be done depending on the size of the commission, however you will not receive the entirety of the commission until it is all paid. <br />
        </p>

        <h5>
        ☾　Refund Policy　☽
        </h5>
        <p>
        ✦ Commissions are refundable in full if you've not been shown any progress. <br />
        ✦ No refunds for finished products. Partial refunds may be considered. <br />
        ✦ Due to my right to deny or cancel commissions, cancellations at my discretion will be given full refunds. <br />
        </p>

        <h5>
        ☾　Artist Rights　☽
        </h5>
        <p>
        ✦ I, the artist, automatically own copyright of any artwork I produce unless stated otherwise. <br />
        ✦ I have the right to promote, publish, distribute, print and sell any artwork I own copyright to. <br />
        ✦ I have the right to decline or cancel any commission at any time. <br />
        ✦ I have the right to retract commissioner rights if my rights and copyright are violated. <br />
        </p>

        <h5>
        ☾　Commissioner Rights　☽ <br />
        </h5>
        <p>
        ✦ Commissioners have the right to use, edit and share copyrighted artwork they have commissioned as long as proper credit is given. <br />
        ✦ May use artwork for personal or promotional purposes without profit as long as proper credit is given. <br />
        </p>
      
        <Container className="container1" style={{placeItems:"center"}}>
          <Link to="/commission-request" className='request-btn'>
            Request Now!
          </Link>
        </Container>
      </Container>

    </Container>
  );
}
export default CommissionInfo;
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './info.css';

function CommissionInfo() {
  return (

    <Container className="info-body">
      <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.5rem', color: "#D88C9A"}}>Welcome to the Gallery!</h2>
      <h5 style={{color: "#D88C9A"}}>Here you will find some example works</h5>
    </Container>

  );
}
export default CommissionInfo;
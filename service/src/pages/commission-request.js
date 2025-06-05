import Container from 'react-bootstrap/Container';
import './commission-request.css';

function CommissionRequest() {
  return (
    <Container className="request-form-container">
      <h2 className="form-title">Request a Commission</h2>
      <form className="request-form">
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Jane Doe" />

        <label>Email</label>
        <input type="email" name="email" placeholder="you@example.com" />

        <label>Commission Type</label>
        <select name="type">
          <option value="">Select one</option>
          <option value="headshot">Headshot</option>
          <option value="midshot">Midshot</option>
          <option value="fullbody">Full Body</option>
        </select>

        <label>Describe your request</label>
        <textarea name="details" rows="2" placeholder="Tell us what you’d like..." />
        <button type="submit" className="submit-button">Submit</button>
        
      </form>
    </Container>
  );
}

export default CommissionRequest;

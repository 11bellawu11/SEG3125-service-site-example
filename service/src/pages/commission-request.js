import Container from 'react-bootstrap/Container';
import './commission-request.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function handlePhoneInput(e) {
  let digits = e.target.value.replace(/\D/g, '');
  if (digits.length > 3 && digits.length <= 6)
    e.target.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
  else if (digits.length > 6)
    e.target.value = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  else
    e.target.value = digits;
}

function CommissionRequest() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <Container className="request-form-container">
      {submitted ? (
        <div className="thank-you-message">
          <h2 className="form-title">Thank you!</h2>
          <p>Your request has been received. We’ll be in touch in 2-3 business days 💌</p>
          <Link to="/"  className='home-button submit-button'>
           Return home
          </Link>
        </div>
      ) : (
        <>
          <h2 className="form-title">Request a Commission</h2>
          <form className="request-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Jane Doe" />

            <label>Email</label>
            <input type="email" name="email" placeholder="you@example.com" />

            <label>Phone Number</label>
            <input type='tel'  inputMode="numeric" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
             placeholder="000-000-0000" onInput={handlePhoneInput}/>
          
            <label>Commission Type</label>
            <select name="type">
              <option value="">Select one</option>
              <option value="headshot">Headshot</option>
              <option value="midshot">Midshot</option>
              <option value="fullbody">Full Body</option>
            </select>

            <label>Describe your request</label>
            <textarea name="details" rows="1" placeholder="Tell us what you’d like..." />

            <label>Show us a reference image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </>
      )}
    </Container>
  );
}

export default CommissionRequest;

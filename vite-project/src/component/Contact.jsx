import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './login.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Perform validation
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      showAlert('Please fill in all fields.');
      return;
    }

    emailjs
      .sendForm('service_t1qg5kb', 'template_i394apx', form.current, {
        publicKey: 'ZykJYTEr-15OxCQOd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showAlert('Message Sent');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          showAlert('Message Sent');
        },
      );
  };

  const showAlert = (message) => {
    alert(message);
  };
  
  return (
    <div className='custom-background'>
      <h1 className="mt-4"> Contact Us</h1>
      <Row className="mt-4">
        <Col xs={12} md={6}>
          <h2>Contact Information</h2>
          <h3>Email:utkarshsingh866@gmail.com</h3>
          <h3>Phone:7007928369</h3>
          <h3>Address:Bhauti,kanpurNagar,India</h3>
        </Col>
        <Col xs={12} md={6}>
          <h3>Contact Form</h3>
          <form ref={form} onSubmit={sendEmail} className='form1'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name="user_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="user_email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
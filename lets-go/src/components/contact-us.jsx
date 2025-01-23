import React, { useState } from 'react';
import contact from '../assets/images/contact-us.jpg';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Disable submit button during submission
    try {
      // Generate a unique ID for each document
      const docRef = doc(db, 'Contact-Us', new Date().getTime().toString());

      await setDoc(docRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(), // Optional: Add a timestamp
      });

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('Error saving contact data:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="container">
      <div className="contact-title text-center">
        <h1>Contact Us</h1>
        <p>For any queries, you can reach out to us at</p>
      </div>
      <div className="contact-form p-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={contact} alt="Contact Us" style={{ maxWidth: '466px' }} />
          </div>
          <div className="col-md-6 col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="form-control" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-control mt-2" disabled={isSubmitting} >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {success && <div className="alert alert-success mt-3">Your message has been sent successfully!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

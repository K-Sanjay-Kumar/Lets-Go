import React from 'react';
import Header from '../constants/header';
import Footer from '../constants/footer';
import contact from '../assets/images/contact-us.jpg'

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='contact-title text-center'x>
          <h1>Contact Us</h1>
          <p>For any queries, you can reach out to us at</p>
        </div>
        <div className='contact-form p-5'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <img src={contact} alt="" style={{maxWidth:'466px'}}/>
            </div>
            <div className='col-md-6 col-12'>
              <form action="" method="post">
                <div className='form-group'>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" className='form-control' rows="5"></textarea>
                </div>
                <button type="submit" className='btn btn-primary form-control mt-2'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
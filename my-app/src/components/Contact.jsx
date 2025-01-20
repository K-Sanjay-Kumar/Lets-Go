import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[a-zA-Z\s]+$/;

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateData = () => {
    let valid = true;

    if (name.trim() === "") {
      setErrors(errors => ({ ...errors, name: "Enter your name here!" }));
      valid = false;
    } else if (!namePattern.test(name)) {
      setErrors(errors => ({ ...errors, name: "Enter a valid name" }));
      valid = false;
    } else {
      setErrors(errors => ({ ...errors, name: "" }));
    }

    if (email.trim() === "") {
      setErrors(errors => ({ ...errors, email: "Enter email address!" }));
      valid = false;
    } else if (!emailPattern.test(email)) {
      setErrors(errors => ({ ...errors, email: "This is not a valid email format" }));
      valid = false;
    } else {
      setErrors(errors => ({ ...errors, email: "" }));
    }

    if (message.trim() === "") {
      setErrors(errors => ({ ...errors, message: "Enter your message" }));
      valid = false;
    } else {
      setErrors(errors => ({ ...errors, message: "" }));
    }

    if (valid) {
      alert("Form submitted successfully!");
      // Handle form submission here
    }
  }

  return (
    <>
      <h1 className="heading">Connect Us Through</h1>
      <div className="image">
        <img src="https://tourly.pt/static/media/contact-us-tourly.68b0ee63.png" alt="" />
        <div className="border w-25 m-auto mt-4 p-4 form">
          <h3>Contact Us</h3>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className="text-danger">{errors.name}</p>
          <div>
            <label htmlFor="useremail">User Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-danger">{errors.email}</p>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <p className="text-danger">{errors.message}</p>
          <br />
          <button className="btn btn-primary w-100" onClick={validateData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;



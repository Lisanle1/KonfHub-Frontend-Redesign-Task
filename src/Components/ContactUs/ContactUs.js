import React from 'react';

const ContactUs = ({ contacts }) => {
  return (
    <div className="contact-us-section">
      <h2>Contact Us</h2>
      {contacts?.map((contact, index) => (
        <div key={index} className="contact">
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;

import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Hubungi Kami</h1>
      
      <div className="contact-card">
        <h2>Yoga Company</h2>
        <div className="contact-details">
          <p>
            <i className="fab fa-whatsapp"></i>
            <span>+62 812-3456-7890</span>
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <span>admin@yogacompany.com</span>
          </p>
          <p className="contact-hours">
            Jam Operasional: Senin - Jumat (09:00 - 17:00 WIB)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
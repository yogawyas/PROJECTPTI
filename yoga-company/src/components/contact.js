import React from 'react';
import '../assets/styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Hubungi Kami</h1>
        <div className="contact-details">
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Jl. Akasia 3 Extension Blok AX 4 No. 2 Taman Royal 3 Kota Tangerang
          </p>
          <p>
            <i className="fas fa-phone"></i>
            +62 812-3456-7890
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            info@yogalaundry.com
          </p>
          <p className="contact-hours">
            Buka Setiap Hari: 08.00 - 20 .00 WIB
          </p>
        </div>
      </div>

      <div className="map-container" data-animate>
        <h2 className="map-title">Lokasi Kami</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3096.367373198618!2d106.65965566420552!3d-6.175858828402203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1736571596886!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ 
            border: 0,
            filter: 'invert(90%) hue-rotate(180deg)'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
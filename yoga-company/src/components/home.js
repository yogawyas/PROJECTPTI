import React from 'react';
import '../assets/styles/mainpages.css';

const Home = () => {
  
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Selamat Datang di Yoga Laundry</h1>
        <p className="tagline">Solusi Laundry Profesional untuk Pakaian Anda</p>
      </section>

      <section className="features-section">
        <h2>Mengapa Memilih Kami?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Kualitas Premium</h3>
            <p>Menggunakan deterjen berkualitas tinggi dan peralatan modern</p>
          </div>
          <div className="feature-card">
            <h3>Layanan Cepat</h3>
            <p>Selesai dalam 24 jam untuk layanan express</p>
          </div>
          <div className="feature-card">
            <h3>Harga Terjangkau</h3>
            <p>Penawaran harga kompetitif dengan kualitas terbaik</p>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <h2>Layanan Kami</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Cuci Reguler</h3>
            <p>Layanan cuci standar dengan perawatan maksimal</p>
          </div>
          <div className="service-item">
            <h3>Cuci Express</h3>
            <p>Layanan cuci kilat untuk kebutuhan mendesak</p>
          </div>
          <div className="service-item">
            <h3>Dry Cleaning</h3>
            <p>Perawatan khusus untuk pakaian formal dan premium</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import '../assets/styles/mainpages.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Yoga Wyas Pramudita",
      role: "Founder & CEO",
      image: "/yogawyas.jpg",
      description: "Pendiri Yoga Laundry dengan visi memberikan layanan laundry terbaik untuk masyarakat."
    },
    {
      id: 2,
      name: "Muhammad Geraldy Fariztito",
      role: "Admin",
      image: "/geraldy.jpg",
      description: "Mengelola operasional harian dan pelayanan pelanggan dengan penuh dedikasi."
    },
    {
      id: 3,
      name: "Daffa Muflih Purnama",
      role: "Senior Laundry Specialist",
      image: "/daffa.jpg",
      description: "Ahli dalam penanganan pakaian premium dan dry cleaning."
    },
    {
      id: 4,
      name: "Reza Rizky",
      role: "Laundry Specialist",
      image: "/rezarizky.jpg",
      description: "Spesialis dalam perawatan dan penyetrikaan pakaian."
    }
  ];

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Tentang Yoga Laundry</h1>
        <div className="about-description">
          <p>
            Yoga Laundry didirikan pada tahun 2023 dengan komitmen untuk memberikan
            layanan laundry berkualitas tinggi dengan harga yang terjangkau. Kami
            memahami bahwa pakaian Anda berharga, dan kami memperlakukannya dengan
            perawatan terbaik.
          </p>
          <p>
            Dengan pengalaman dan dedikasi tim kami, Yoga Laundry telah berkembang
            menjadi salah satu penyedia layanan laundry terpercaya di kota ini.
            Kami menggunakan peralatan modern dan bahan pembersih ramah lingkungan
            untuk hasil terbaik.
          </p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision">
          <h2>Visi</h2>
          <p>Menjadi penyedia layanan laundry terpercaya dengan standar kualitas tertinggi.</p>
        </div>
        <div className="mission">
          <h2>Misi</h2>
          <ul>
            <li>Memberikan layanan laundry profesional dengan hasil sempurna</li>
            <li>Menggunakan teknologi dan bahan ramah lingkungan</li>
            <li>Mengutamakan kepuasan pelanggan dalam setiap layanan</li>
            <li>Mengembangkan tim yang profesional dan berdedikasi</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
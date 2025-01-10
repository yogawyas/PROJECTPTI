import React from 'react';

function Membership() {
  const membershipPlans = [
    {
      id: 1,
      name: "Paket Reguler",
      price: "Rp 199.000/bulan",
      features: [
        "Cuci + Setrika 10kg/bulan",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 2-3 hari",
        "Termasuk pelembut & pewangi",
      ],
      recommended: false
    },
    {
      id: 2,
      name: "Paket Premium",
      price: "Rp 399.000/bulan",
      features: [
        "Cuci + Setrika 25kg/bulan",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 1-2 hari",
        "Termasuk pelembut & pewangi premium",
        "Prioritas pengerjaan",
        "Perawatan khusus pakaian bernilai tinggi"
      ],
      recommended: true
    },
    {
      id: 3,
      name: "Paket Mahasiswa",
      price: "Rp 149.000/bulan",
      features: [
        "Cuci + Setrika 8kg/bulan",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 3-4 hari",
        "Khusus pelajar & mahasiswa",
        "Diskon 15% untuk setiap laundry",
        "Berlaku di area kampus"
      ],
      recommended: false
    },

    {
      id: 4,
      name: "Paket Tahunan",
      price: "Rp 1.990.000/tahun",
      features: [
        "Cuci + Setrika 100kg/tahun",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 2-3 hari",
        "Termasuk pelembut & pewangi premium",
        "Diskon 10% untuk setiap laundry",
        "Perawatan khusus pakaian bernilai tinggi"
      ],
      recommended: false
    }
  ];

  return (
    <div className="membership-container">
      <h1>Paket Membership Laundry</h1>
      <p className="membership-intro">
        Hemat dan praktis dengan berlangganan paket membership bulanan kami
      </p>

      <div className="membership-grid">
        {membershipPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`membership-card ${plan.recommended ? 'recommended' : ''}`}
          >
            {plan.recommended && (
              <div className="recommended-badge">BEST VALUE</div>
            )}
            <h2>{plan.name}</h2>
            <div className="price">{plan.price}</div>
            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="join-button">
              Daftar Sekarang
            </button>
          </div>
        ))}
      </div>

      <div className="membership-note">
        <h3>Syarat dan Ketentuan:</h3>
        <ul>
          <li>Biaya pendaftaran Rp 50.000 (one-time payment)</li>
          <li>Masa aktif membership 30 hari</li>
          <li>Kuota kg tidak dapat diakumulasi ke bulan berikutnya</li>
          <li>Pengambilan & pengantaran gratis dalam radius 5km</li>
          <li>Pembayaran dapat dilakukan via transfer atau e-wallet</li>
          <li>Kelebihan kg akan dikenakan biaya reguler</li>
        </ul>
      </div>
    </div>
  );
}

export default Membership;
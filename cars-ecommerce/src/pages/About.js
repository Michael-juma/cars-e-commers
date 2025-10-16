import React from "react";
import "animate.css"; // Ensure Animate.css is installed via npm or CDN

export default function About() {
  return (
    <section className="container py-5">
      <div className="container mt-4">
        <h2 className="animate__animated animate__fadeInDown">About Us</h2>
        <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
          We connect buyers to premium cars across Kenya with transparent pricing and verified sellers.
        </p>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          Our mission is to simplify car buying and ensure trust and safety for all transactions.
        </p>

        {/* Services */}
        <div className="row g-4 mt-4 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="col-md-6">
            <h5 className="card-title">Our Services</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-truck me-2 text-dark"></i>Nationwide Delivery</li>
              <li><i className="bi bi-gear-wide-connected me-2 text-dark"></i>Car Diagnostics & Inspection</li>
              <li><i className="bi bi-shield-check me-2 text-dark"></i>Verified Listings & Secure Transactions</li>
              <li><i className="bi bi-credit-card me-2 text-dark"></i>Flexible Payment Plans</li>
            </ul>
          </div>
        </div>

        {/* Car Brands */}
        <div className="mt-5 animate__animated animate__fadeInUp animate__delay-3s">
          <h5>Trusted Car Brands</h5>
          <div className="row g-4 mt-3">
            {/* Repeat this block for each brand */}
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png" alt="Toyota Logo" width="50" className="me-3" />
                <h6>Toyota Kenya</h6>
              </div>
              <p>Toyota vehicles are known for reliability and resale value. We offer verified Toyota listings with flexible payment options and delivery.</p>
            </div>
            {/* Add Nissan, Subaru, VW similarly */}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-5 animate__animated animate__fadeInUp animate__delay-4s">
          <h5>What Our Customers Say</h5>
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="card-text">"Smooth experience from start to finish. I found my dream car in just two days!"</p>
                  <footer className="blockquote-footer">Jane M., Nairobi</footer>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="card-text">"The delivery was fast and the car was exactly as listed. Highly recommend!"</p>
                  <footer className="blockquote-footer">David K., Mombasa</footer>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
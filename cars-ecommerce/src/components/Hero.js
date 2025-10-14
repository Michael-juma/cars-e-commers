import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center text-light fade-in" aria-label="Main hero">
      <div className="container text-center">
        <h1 className="display-5 fw-bold slide-up">FIND THE <span className="text-danger">PERFECT</span> CAR FOR YOU</h1>
        <p className="lead text-muted mb-4 slide-up" style={{animationDelay: '120ms'}}>
          Premium car selection, transparent pricing and trusted delivery across Kenya.
        </p>
        <div className="slide-up" style={{animationDelay: '200ms'}}>
          <Link to="/shop" className="btn btn-lg btn-pill btn-danger-pill me-2" aria-label="Browse cars">Browse Cars</Link>
          <Link to="/contact" className="btn btn-lg btn-pill btn-outline-light-pill" aria-label="Contact us">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

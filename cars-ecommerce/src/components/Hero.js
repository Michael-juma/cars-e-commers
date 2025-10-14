import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center text-light">
      <div className="container text-center">
        <h1 className="display-5 fw-bold">FIND THE <span className="text-danger">PERFECT</span> CAR FOR YOU</h1>
        <p className="lead text-muted mb-4">
          Premium car selection, transparent pricing and trusted delivery across Kenya.
        </p>
        <div>
          <Link to="/shop" className="btn btn-danger btn-lg me-2">Browse Cars</Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Obudho's Motors</h5>
            <p className="text-muted">Premium car dealership platform in Kenya.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Support</h6>
            <ul className="list-unstyled text-muted">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p className="text-muted mb-0">South B, Nairobi</p>
            <p className="text-muted">+254 725745754</p>
          </div>
        </div>
        <div className="text-center text-muted small mt-3">&copy; {new Date().getFullYear()} Obudho's Motors. All rights reserved.</div>
      </div>
    </footer>
  );
}

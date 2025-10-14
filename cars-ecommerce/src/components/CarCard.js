import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarCard({ name, price, img, small = false }) {
  return (
    <div className={"card shadow-sm border-0" + (small ? "" : " h-100") }>
      <img
        src={img}
        alt={name}
        className="card-img-top"
        style={{
          height: small ? "120px" : "200px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className={"card-body text-center" + (small ? " py-2" : "") }>
        <h5 className="card-title fw-bold" style={{fontSize: small ? '1rem' : undefined, marginBottom: small ? '0.35rem' : undefined}}>{name}</h5>
        <p className="card-text text-muted mb-2" style={{fontSize: small ? '0.9rem' : undefined}}>
          <i className="bi bi-cash-coin text-success me-1"></i>
          Ksh {price.toLocaleString()}
        </p>
  {!small && <button className="btn btn-primary w-100 rounded-pill btn-pill fade-in" aria-label={`View details for ${name}`}>View Details</button>}
      </div>
    </div>
  );
}

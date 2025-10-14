import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const data = {
  "1": {
    id: "1",
    name: "Mclaren 750S",
    price: 85000000,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
    desc: "High-performance supercar with cutting-edge engineering."
  },
  "2": {
    id: "2",
    name: "BMW X5",
    price: 8500000,
    img: "https://images.unsplash.com/photo-1618541339475-9d4e25f8b3bb?q=80&w=1600&auto=format&fit=crop",
    desc: "Comfortable and powerful family SUV."
  }
};

export default function CarDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const car = data[id] || data["1"];

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-7">
          <img src={car.img} alt={car.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-5">
          <h2>{car.name}</h2>
          <p className="text-muted">Ksh {Number(car.price).toLocaleString()}</p>
          <p>{car.desc}</p>
          <div className="d-grid">
            <button className="btn btn-danger mb-2">Book Now</button>
            <button className="btn btn-outline-secondary" onClick={() => nav(-1)}>Back</button>
          </div>
        </div>
      </div>
    </section>
  );
}

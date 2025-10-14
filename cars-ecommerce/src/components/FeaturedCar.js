import React from "react";
import CarCard from "./CarCard";

const featured = [
  {
    id: "1",
    name: "Mclaren 750S",
    price: 85000000,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c66f9ff1bb90d5bee0f4c2b4a6b8c48"
  },
  {
    id: "2",
    name: "BMW X5",
    price: 8500000,
    img: "https://images.unsplash.com/photo-1618541339475-9d4e25f8b3bb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=048929b4a9d76b9aab2a1c8a4f7d8f2d"
  },
  {
    id: "3",
    name: "Range Rover",
    price: 12000000,
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=773ad7d3a9e3f0c7c2f2b22d9b7d5c48"
  },
];

export default function FeaturedCars({ compact = false }) {
  return (
    <section className={"py-2" + (compact ? "" : " container py-5") } aria-label={compact ? "Featured cars sidebar" : "Featured cars"}>
      {!compact && <h2 className="text-center mb-4">Featured Cars</h2>}
      <div className={(compact ? "d-flex flex-column gap-3" : "row") + " staggered"}>
        {featured.map((c, i) => (
          <div className={compact ? "mb-3 fade-in" : "col-md-4 mb-4 fade-in"} key={c.id} style={{animationDelay: `${i*80}ms`}}>
            <CarCard {...c} small={compact} />
          </div>
        ))}
      </div>
    </section>
  );
}

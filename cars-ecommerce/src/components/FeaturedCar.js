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
    img: "https://i.pinimg.com/1200x/d6/90/ea/d690eadb1f4f1f21ea38d02b16f180ad.jpg"
  },
  {
    id: "3",
    name: "Range Rover",
    price: 12000000,
    img: "https://i.pinimg.com/1200x/06/cf/f2/06cff215d09e66663ad219a6056aef14.jpg"
  },
    {
    id: "4",
    name: "Toyota Land Cruiser",
    price: 15000000,
    img: "https://i.pinimg.com/1200x/41/63/dc/4163dc961768515212883826bfecd6ee.jpg"
  },
  {
    id: "5",
    name: "Mercedes-Benz GLE",
    price: 10500000,
    img: "https://i.pinimg.com/736x/ed/58/34/ed583475e07d5f956fa7637396d78125.jpg"
  },
    {
    id: "6",
    name: "Porsche 911",
    price: 20000000,
    img: "https://i.pinimg.com/736x/1a/e5/c9/1ae5c9e5306c6446331c47e0c3daeeac.jpg"
  },
  {
    id: "7",
    name: "Audi Q7",
    price: 9000000,
    img: "https://i.pinimg.com/736x/5f/79/9a/5f799a42b76fd2bb29e8297bc3823ff2.jpg"
  }
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

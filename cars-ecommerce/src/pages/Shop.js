import React from "react";
import CarCard from "../components/CarCard";

export default function Shop() {
  const cars = [
    {
      id: 1,
      name: "Toyota Land Cruiser",
      price: 8500000,
      img: "https://i.pinimg.com/736x/6c/92/04/6c92049dc35ab8a1fd5e504b7d44bada.jpg",
    },
    {
      id: 2,
      name: "Mercedes-Benz GLE",
      price: 10500000,
      img: "https://i.pinimg.com/736x/2f/de/79/2fde799c27c9ebbc720f09496b2be63d.jpg",
    },
    {
      id: 3,
      name: "BMW X6",
      price: 9700000,
      img: "https://i.pinimg.com/1200x/d8/f4/00/d8f40081b6176ca85a4907830634b503.jpg",
    },
    {
      id: 4,
      name: "Range Rover Sport",
      price: 12500000,
      img: "https://i.pinimg.com/736x/fb/91/ba/fb91ba03e0242d6f7636ee2b8f4835d9.jpg",
    },
    {
      id: 5,
      name: "Mazda CX-5",
      price: 5200000,
      img: "https://i.pinimg.com/1200x/89/e0/50/89e050b9f71c20f3f1e58b3d3f2db9c1.jpg",
    },
    {
      id: 6,
      name: "Nissan X-Trail",
      price: 4800000,
      img: "https://i.pinimg.com/1200x/ab/a0/3a/aba03ab0be5534e9ab30b191ce426a9f.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Our Car Collection</h1>
      <div className="row g-4">
        {cars.map((car) => (
          <div key={car.id} className="col-md-4 col-sm-6">
            <CarCard name={car.name} price={car.price} img={car.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

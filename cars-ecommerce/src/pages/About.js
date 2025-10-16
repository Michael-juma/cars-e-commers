import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import "../styles/About.css";

export default function About() {
  return (
    <section className="container  about-section">
      {/* Intro */}
      <div className="text-center mb-5">
        <h2 className="fw-bold animate__animated animate__fadeInDown">About CarZone Kenya</h2>
        <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
          CarZone Kenya is your trusted online marketplace for buying and selling both new and pre-owned vehicles across Kenya.
        </p>
        <p className="text-secondary animate__animated animate__fadeIn animate__delay-1s">
          We bridge the gap between verified car dealers and customers by ensuring transparent transactions, trusted listings, and secure payments.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Our Mission</h4>
          <p className="text-muted">
            To revolutionize car trading in Kenya by offering a digital-first, trustworthy, and customer-centered platform that connects
            car buyers and sellers nationwide.
          </p>
          <h4 className="fw-bold mt-4">Our Vision</h4>
          <p className="text-muted">
            To become East Africa’s most reliable automotive e-commerce brand, known for innovation, quality service, and integrity.
          </p>
        </div>
        <div className="col-md-6 text-center">
        </div>
      </div>

      {/* Car Brands */}
      <div className="mt-5 text-center">
        <h4 className="fw-bold mb-4">Brands We Work With</h4>
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {[
            {
              name: "Toyota",
              img: "https://i.pinimg.com/1200x/bd/0c/a1/bd0ca17aee6195d89a30a4e33789667f.jpg",
              desc: "Known for reliability and durability, Toyota remains Kenya’s most trusted vehicle brand.",
            },
            {
              name: "Nissan",
              img: "https://i.pinimg.com/1200x/15/4e/c0/154ec0194501da6147407ebd3404bb7d.jpg",
              desc: "Nissan vehicles offer a balance of performance, comfort, and affordability.",
            },
            {
              name: "Subaru",
              img: "https://i.pinimg.com/736x/0c/f1/4c/0cf14c4cba640a73481550d23e8d23ef.jpg",
              desc: "Subaru cars are loved for their power, stability, and AWD performance.",
            },
            {
              name: "Volkswagen",
              img: "https://i.pinimg.com/736x/00/ae/fd/00aefde957666bd6b90316615c3cc498.jpg",
              desc: "German-engineered excellence offering style, safety, and performance.",
            },
            {
              name: "BMW",
              img: "https://i.pinimg.com/736x/26/c2/2c/26c22cb9bedf1e832ef8e4a4eb1ad674.jpg",
              desc: "Luxury and performance vehicles engineered for driving pleasure.",
            },
            {
              name: "Mercedes-Benz",
              img: "https://i.pinimg.com/736x/d2/0c/58/d20c5876a0a13b50fcd6c5ba31c379fc.jpg",
              desc: "Synonymous with elegance, safety, and superior automotive engineering.",
            },
            {
              name: "Mazda",
              img: "https://i.pinimg.com/736x/a4/af/51/a4af51dd814764e3a4cb92a324e7b1cb.jpg",
              desc: "Mazda combines innovation, fuel efficiency, and sporty design.",
            },
            {
              name: "Isuzu",
              img: "https://i.pinimg.com/1200x/03/15/aa/0315aa16e570221e2cd7e76f916b1fd5.jpg",
              desc: "Trusted for powerful pickups and commercial vehicles across Kenya.",
            },
          ].map((brand, index) => (
            <div className="col" key={index}>
              <div className="card brand-card h-100 border-0 shadow-sm">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="card-img-top p-3"
                  style={{ height: "120px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="fw-bold">{brand.name}</h6>
                  <p className="small text-muted">{brand.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-5 text-center">
        <h4 className="fw-bold mb-4">What Our Clients Say</h4>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="fst-italic text-secondary">
                  "CarZone made car buying so easy. Their customer service was top-notch!"
                </p>
                <footer className="blockquote-footer">Mary N., Nairobi</footer>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="fst-italic text-secondary">
                  "I sold my car within a week and got great support from the team."
                </p>
                <footer className="blockquote-footer">George K., Mombasa</footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Button */}
      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-4 join-btn">
          <i className="bi bi-person-plus me-2"></i>Join Our Community
        </button>
      </div>

      {/* Map */}
      <div className="map-container mt-5 rounded shadow-sm overflow-hidden">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8570561752154!2d36.79814447496451!3d-1.3006731356452765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f1a4570a7b%3A0xd6a85c9f3d0e57e6!2sNextgen%20Mall!5e0!3m2!1sen!2ske!4v1695893095620!5m2!1sen!2ske"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

import React from "react";
import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCar";
import RotatingCarVideo from "../components/RotatingCarVideo";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container py-5">
        <div className="home-layout">
          <main>
            {/* Rotating car video animation area */}
            <RotatingCarVideo
              videos={[
                "https://www.shutterstock.com/shutterstock/videos/3675024915/preview/stock-footage-monte-carlo-monaco-september-expensive-cars-parked-near-the-world-famous-casino-facade.webm",
                // Add more video URLs here as needed
              ]}
              interval={12000}
            />
            <section className="services mb-4">
              <h2 className="mb-3">The services offered</h2>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Our offerings include buying and selling cars,
                trade-ins and more.
              </p>

              <div className="row mt-4">
                <div className="col-md-8">
                  <div className="p-4 bg-dark text-light rounded">
                    <h5>Buy a Car</h5>
                    <p className="small text-muted">
                      Browse our latest selection and book a viewing.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-4 bg-secondary text-light rounded">
                    <h6>Sell a Car</h6>
                    <p className="small text-muted">
                      Get a valuation and sell quickly.
                    </p>
                  </div>
                </div>
                {/* Add more services as car dealers does then add a nice button for join us and add map */}
                <div className="col-md-4 mt-4">
                  <div className="card shadow-sm border-0 h-100 text-center">
                    <div className="card-body bg-light rounded-3">
                      <i className="bi bi-cash-coin display-5 text-primary mb-3"></i>
                      <h5 className="fw-bold text-dark">Trade-In</h5>
                      <p className=" small text-dark">
                        Get a fair valuation for your current car and drive home
                        your dream one today.
                      </p>
                      <button className="btn btn-primary btn-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Financing */}
                <div className="col-md-4 mt-4">
                  <div className="card shadow-sm border-0 h-100 text-center">
                    <div className="card-body bg-dark text-light rounded-3">
                      <i className="bi bi-credit-card-2-front display-5 text-warning mb-3"></i>
                      <h5 className="fw-bold">Financing</h5>
                      <p className="text-muted small">
                        Explore flexible payment plans and financing options
                        that fit your budget.
                      </p>
                      <button className="btn btn-warning btn-sm text-dark fw-semibold">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Book a Test Drive */}
                <div className="col-md-4 mt-3">
                  <div className="card shadow-sm border-0 h-100 text-center">
                    <div className="card-body bg-light rounded-3">
                      <i className="bi bi-steering-wheel display-5 text-danger mb-3"></i>
                      <h5 className="fw-bold text-dark">Book a Test Drive</h5>
                      <p className="text-dark small">
                        Experience your preferred model firsthand. Schedule a
                        test drive today!
                      </p>
                      <button className="btn btn-danger btn-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Us CTA */}
              <div className="text-center mt-5">
                <h4 className="fw-bold mb-3">Join Our Community</h4>
                <p className="text-muted mb-4">
                  Register with us to get exclusive access to offers, updates,
                  and premium deals.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-primary btn-lg px-4">
                    Register
                  </button>
                  <button className="btn btn-outline-dark btn-lg px-4">
                    Login
                  </button>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-5">
                <h5 className="text-center mb-3 fw-bold">Find Us</h5>
                <div className="ratio ratio-16x9 rounded-4 shadow-sm">
                  <iframe
                    title="dealership-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.859761492851!2d36.82194691531373!3d-1.2920659990589152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e720d7c001%3A0x6a0ef2f661d19b63!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1696883922461!5m2!1sen!2ske"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </section>
          </main>

          <aside className="right-sidebar">
            <div className="sticky-card sidebar-featured p-3">
              <h6 className="text-center text-light mb-3">Featured Cars</h6>
              <FeaturedCars compact />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

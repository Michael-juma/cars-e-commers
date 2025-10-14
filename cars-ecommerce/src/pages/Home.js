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
                "https://www.shutterstock.com/shutterstock/videos/3675024915/preview/stock-footage-monte-carlo-monaco-september-expensive-cars-parked-near-the-world-famous-casino-facade.webm"
                // Add more video URLs here as needed
              ]}
              interval={12000}
            />
            <section className="services mb-4">
              <h2 className="mb-3">The services offered</h2>
              <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Our offerings include buying and selling cars, trade-ins and more.</p>

              <div className="row mt-4">
                <div className="col-md-8">
                  <div className="p-4 bg-dark text-light rounded">
                    <h5>Buy a Car</h5>
                    <p className="small text-muted">Browse our latest selection and book a viewing.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-4 bg-secondary text-light rounded">
                    <h6>Sell a Car</h6>
                    <p className="small text-muted">Get a valuation and sell quickly.</p>
                  </div>
                </div>
                {/* Add more services as car dealers does then add a nice button for join us and add map */}
                <div className="col-md-4">
                  <div className="p-4 col-md-8 bg-secondary text-light rounded">
                    <h6>Trade-In</h6>
                    <p className="small text-muted">Get a valuation for your current vehicle.</p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="p-4 bg-dark text-light rounded">
                    <h5>Financing</h5>
                    <p className="small text-muted">Explore financing options tailored to you.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-4 bg-secondary text-light rounded">
                    <h6>Book a Test Drive</h6>
              </div>
                    <p className="small text-muted">Experience your dream car firsthand.</p>
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

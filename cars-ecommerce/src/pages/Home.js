import React from "react";
import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCar";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container py-5">
        <div className="home-layout">
          <main>
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

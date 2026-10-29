import React from "react";

function Pricing() {
  return (
    <div className="container mb-0">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 pe-md-5">
          <h2>Unbeatable pricing</h2>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>

        <div className="col-12 col-md-6 ps-md-5">
          <img
            src="../Files/pricing.svg"
            alt="Unbeatable pricing"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;

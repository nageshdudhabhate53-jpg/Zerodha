
import React from "react";
import "./Price.css";

function Hero() {
    return (
        <>
            {/* Page heading */}
            <div
                className="container text-center charges-heading"
            >
                <h2>Charges</h2>
                <h4 className="mt-3 text-secondary">
                    List of all charges and taxes
                </h4>
            </div>

            {/* Pricing sections */}
            <div className="container pricing-section">
                <div className="row justify-content-center">

                    <div className="col-md-4 image-container">
                        <img
                            className="pricing-img"
                            src="/Files/pricing-eq.svg"
                            alt="Equity pricing"
                        />

                        <h3>Free equity delivery</h3>

                        <p>
                            All equity delivery investments (NSE, BSE),
                            are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>

                   
                    <div className="col-md-4 image-container">
                        <img
                            className="pricing-img"
                            src="/Files/intradayTrades.svg"
                            alt="Intraday pricing"
                        />

                        <h3>Intraday and F&amp;O trades</h3>

                        <p>
                            Flat ₹ 20 or 0.03% (whichever is lower) per
                            executed order on intraday trades across
                            equity, currency, and commodity trades.
                            Flat ₹20 on all option trades.
                        </p>
                    </div>

                 
                    <div className="col-md-4 image-container">
                        <img
                            className="pricing-img"
                            src="/Files/pricing-eq.svg"
                            alt="Mutual fund pricing"
                        />

                        <h3>Free direct MF</h3>

                        <p>
                            All direct mutual fund investments are
                            absolutely free — ₹ 0 commissions &amp; DP
                            charges.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Hero;

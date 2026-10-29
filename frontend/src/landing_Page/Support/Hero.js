
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Support.css";

function Hero() {
  return (
    <>
      {/* Search Section */}
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="row">
          <div className="col-10 mx-auto">
            <label
              htmlFor="supportSearch"
              className="form-label d-block mb-2"
              style={{ marginLeft: "60px" }}
            >
              Support Portal
            </label>

            <input
              type="search"
              className="form-control"
              id="supportSearch"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              style={{
                width: "calc(100% - 60px)",
                height: "60px",
                marginLeft: "60px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mt-5 mb-5">
        <div className="row">

          {/* Left Side: Accordion Sections */}
          <div className="col-md-8">
            <Accordion>

              {/* Account Opening */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Account Opening
                </Accordion.Header>

                <Accordion.Body>
                  <ul className="support-links">
                    <li><a href="#">Resident individual</a></li>
                    <li><a href="#">Minor</a></li>
                    <li><a href="#">Non Resident Indian (NRI)</a></li>
                    <li>
                      <a href="#">
                        Company, Partnership, HUF and LLP
                      </a>
                    </li>
                    <li><a href="#">Glossary</a></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* Your Zerodha Account */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Your Zerodha Account
                </Accordion.Header>

                <Accordion.Body>
                  <ul className="support-links">
                    <li><a href="#">Your Profile</a></li>
                    <li><a href="#">Account modification</a></li>
                    <li>
                      <a href="#">
                        Client Master Report (CMR) and Depository
                        Participant (DP)
                      </a>
                    </li>
                    <li><a href="#">Nomination</a></li>
                    <li>
                      <a href="#">
                        Transfer and conversion of securities
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* Kite */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Kite
                </Accordion.Header>

                <Accordion.Body>
                  <ul className="support-links">
                    <li><a href="#">IPO</a></li>
                    <li><a href="#">Trading FAQs</a></li>
                    <li>
                      <a href="#">
                        Margin Trading Facility (MTF) and Margins
                      </a>
                    </li>
                    <li><a href="#">Charts and orders</a></li>
                    <li><a href="#">Alerts and Nudges</a></li>
                    <li><a href="#">General</a></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* Funds */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Funds
                </Accordion.Header>

                <Accordion.Body>
                  <ul className="support-links">
                    <li><a href="#">Add money</a></li>
                    <li><a href="#">Withdraw money</a></li>
                    <li><a href="#">Add bank account</a></li>
                    <li><a href="#">eMandates</a></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* Console */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Console
                </Accordion.Header>

                <Accordion.Body>
                  <ul className="support-links">
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Corporate actions</a></li>
                    <li><a href="#">Funds statements</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Segments</a></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>

          {/* Right Side: Quick Links */}
          <div className="col-md-4">
            <div className="quick-links">

              <div className="quick-links-heading">
                Quick links
              </div>

              <a href="#" className="quick-link-item">
                1. Track account opening
              </a>

              <a href="#" className="quick-link-item">
                2. Track segment activation
              </a>

              <a href="#" className="quick-link-item">
                3. Intraday margins
              </a>

              <a href="#" className="quick-link-item">
                4. Kite user manual
              </a>

              <a href="#" className="quick-link-item">
                5. Learn how to create a ticket
              </a>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;

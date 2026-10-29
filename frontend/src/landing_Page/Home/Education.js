import React from 'react';

function Education() {
    return (
        <div className="row align-items-center">

            <div className="col-6">
                <img
                    src="../Files/education.svg"
                    alt="Education"
                    className="img-fluid ms-5"
                />
            </div>

            <div className="col-6">
                <h2>Free and open market education</h2>

                <p className="col-10">
                    Varsity, the largest online stock market education book
                    in the world covering everything from the basics to
                    advanced trading.
                </p>

                <p className="col-10">
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
            </div>

        </div>
    );
}

export default Education;
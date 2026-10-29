import React from 'react';

function Footer() {
    return ( 
       <div className='container'>
        <div className='row mb-5'>
            <div className='col'>
                <img src='../FIles/logo.svg' style={{width:'100px'}}/>
                <p>
                    &copy; 2010 - 2026, Zerodha Broking Ltd.
All rights reserved.
                </p>
            </div>

            <div className='col'><p>Company</p>
             <a href='' className="footer-link">About</a><br></br>
             <a href='' className="footer-link">Products</a><br></br>
             <a href='' className="footer-link">Pricing</a><br></br>
             <a href='' className="footer-link">Referral programme</a><br></br>
             <a href='' className="footer-link">Careers</a><br></br>
             <a href='' className="footer-link">Zerodha.tech</a><br></br>
             <a href='' className="footer-link">Press & media</a><br></br>
             <a href='' className="footer-link">Zerodha cares (CSR)</a><br></br>

            </div>
            <div className='col'><p>Contact</p>
             <a href='' className="footer-link">Support portal</a><br></br>
             <a href='' className="footer-link">Z-Connect blog</a><br></br>
             <a href='' className="footer-link">List of charges</a><br></br>
             <a href='' className="footer-link">Downloads & resources</a><br></br>
             </div>
            <div className='col'><p>Account</p>
             <a href='' className="footer-link">Open an account</a><br></br>
             <a href='' className="footer-link">Fund transfer</a><br></br>
             <a href='' className="footer-link">60 day challenge</a><br></br>
            </div>
        </div>

        <div className='f-10.4px' fs-4 style={{color: "#9B9B9B", fontSize: "14px"}}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>
        </div>
       </div>
     );
}

export default Footer;
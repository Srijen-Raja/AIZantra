import React from 'react';
import tradixImg from '../assets/Tradix_TX only.png';

const Tradix = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="section-header">
          <h2>TRADIX<sup>®</sup></h2>
          <p className="section-subtext">TRADIX is Aizantra Intelligence's standard B2B supply-chain platform for SMEs. It unifies distributor, retailer, and supplier operations with built-in KYC, unified procurement, inventory management, warehouse operations, and integrated payments—with AI-ready data foundations.</p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <img src={tradixImg} alt="TRADIX product" style={{maxWidth: 380, width: '100%', marginBottom: 16}} />
            <h3>Overview</h3>
            <p>TRADIX is a ready-to-deploy platform designed for SMEs managing complex B2B supply chains. It combines distributor onboarding, retailer management, and supplier coordination into a single unified system.</p>
            <ul>
              <li>Distributor, retailer, and supplier onboarding with KYC</li>
              <li>Unified procurement, sales, inventory, and order management</li>
              <li>Warehouse and fulfillment operations</li>
              <li>Retailer billing, invoicing, and integrated payments</li>
              <li>Analytics with AI-ready data foundations</li>
            </ul>
          </div>

          <div className="card">
            <h3>Why TRADIX</h3>
            <p>TRADIX demonstrates Aizantra's capability to build and operate production-grade SME systems. It serves as both a ready-to-deploy solution and a reference platform that can be customized or extended based on client needs.</p>

            <h3 style={{marginTop: 12}}>Key Benefits</h3>
            <ul>
              <li>Faster time-to-value with proven platform</li>
              <li>Customizable and extensible architecture</li>
              <li>AI-ready data foundations from day one</li>
              <li>Designed for SME operating realities</li>
            </ul>

            <h3 style={{marginTop: 12}}>Get Started</h3>
            <p>Contact our team to explore TRADIX and discuss customization options: <a href="/contact">Book a demo</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tradix;

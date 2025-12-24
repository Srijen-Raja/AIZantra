import React from 'react';
import tradixImg from '../assets/Tradix_TX only.png';

const Tradix = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="section-header">
          <h2>TRADIX</h2>
          <p className="section-subtext">TRADIX is AIZANTRA INTELLIGENCE's flagship analytics + trading insights product built for financial institutions and algorithmic traders. It combines high-frequency signals, robust risk controls, and explainable models to help drive better trading and portfolio outcomes.</p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <img src={tradixImg} alt="TRADIX product" style={{maxWidth: 380, width: '100%', marginBottom: 16}} />
            <h3>Overview</h3>
            <p>TRADIX delivers market signal aggregation, strategy backtesting, and production-grade execution connectors. It is designed for SME teams looking for turnkey analytics, understandable model outputs, and integration flexibility.</p>
            <ul>
              <li>Signal ensemble with risk-aware scoring</li>
              <li>Backtest and walk-forward validation</li>
              <li>Portfolio construction and rebalancing tools</li>
              <li>Integrations with brokers and execution APIs</li>
            </ul>
          </div>

          <div className="card">
            <h3>Key Features</h3>
            <ul>
              <li>Explainable ML signals</li>
              <li>Customizable risk limits and slippage models</li>
              <li>Real-time streaming and historical analysis</li>
              <li>Reporting and compliance-friendly audit trails</li>
            </ul>

            <h3 style={{marginTop: 12}}>Get Started</h3>
            <p>Contact our product team to schedule a demo and pilot: <a href="/contact">Book a demo</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tradix;

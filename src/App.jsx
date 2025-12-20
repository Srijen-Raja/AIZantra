
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import AppRouter from './router.jsx';

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="main-content">
        <ScrollToTop />
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;

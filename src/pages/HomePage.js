import React from 'react';
import Header from '../components/Header'; // Assurez-vous que le chemin est correct
import Home from '../components/Home'; // Assurez-vous que le chemin est correct

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Home />
    </div>
  );
}

export default HomePage;

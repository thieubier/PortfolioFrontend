import React from 'react';
import '../css/Home.css'; // Assurez-vous que le chemin est correct

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">welcome</h1>
      <p className="home-description">
        This is the homepage of my portfolio. Here you can find information about my projects, skills, and more.
      </p>
      
      <section className="image-section">
        <div className="image-box"></div>
        <div className="image-box"></div>
        <div className="image-box"></div>
      </section>

      <section className="text-section">
        <div className="text-box">
          Here is some descriptive text or content that explains more about my projects.
        </div>
        <div className="text-box">
          This is another section of text, perhaps outlining my skills or experience.
        </div>
        <div className="text-box">
          Additional information can be placed here, like a call to action or a personal statement.
        </div>
      </section>
    </div>
  );
}

export default Home;

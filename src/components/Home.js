import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Home.css'; // Assurez-vous que le chemin est correct

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Remplacez 1 et 2 par les IDs des projets que vous souhaitez afficher
        const response1 = await axios.get('https://localhost:7222/api/projects/1');
        const response2 = await axios.get('https://localhost:7222/api/projects/5');
        
        setProjects([response1.data, response2.data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">welcome</h1>
      <p className="home-description">
        This is the homepage of my portfolio. Here you can find information about my projects, skills, and more.
      </p>

      {/* Section About Me */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I’m a passionate software developer with a focus on creating efficient and scalable web applications. With a strong background in .NET and front-end technologies, I love turning ideas into functional and visually appealing products.
        </p>
      </section>
      
      {/* Section Featured Projects */}
      <section className="featured-projects">
        <h2>myprojects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src="" alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
          </div>
          ))}
        </div>
      </section>

      {/* Section Skills */}
      <section className="skills">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>.NET Core</li>
          <li>React</li>
          <li>Entity Framework</li>
          <li>SQL</li>
          <li>RESTful APIs</li>
        </ul>
      </section>

      {/* Section Call to Action */}
      <section className="call-to-action">
        <h2>Interested in Working Together?</h2>
        <a href="/contact" className="cta-button">Contact Me</a>
      </section>
    </div>
  );
}

export default Home;

import React from 'react';
import Header from '../components/Header'; // Mettre à jour le chemin pour Header
import ProjectsList from '../components/ProjectsList'; // Mettre à jour le chemin pour ProjectsList

function ProjectsPage() {
  return (
    <div className="projects-page">
      <Header />
      <main>
        <ProjectsList />
      </main>
    </div>
  );
}

export default ProjectsPage;

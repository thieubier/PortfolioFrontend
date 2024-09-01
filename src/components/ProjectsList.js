import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ProjectsList.css'; // Assurez-vous que le chemin est correct

const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://localhost:7222/api/projects');
                // Transforme toutes les données en minuscules
                const lowercaseProjects = response.data.map(project => ({
                    ...project,
                    title: project.title.toLowerCase(),
                    description: project.description.toLowerCase(),
                    technologies: project.technologies.toLowerCase(),
                    sourceCodeLink: project.sourceCodeLink.toLowerCase()
                }));
                setProjects(lowercaseProjects);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []); 

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <div className="error-message">
                    <p>something went wrong..</p>
                    <p>error: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="projects-container">
            <h1>myprojects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <p className="project-technologies"><strong>technologies:</strong> {project.technologies}</p>
                        <p className="project-link"><a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">source code</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;

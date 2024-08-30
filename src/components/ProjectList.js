import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://localhost:7222/api/projects');
                setProjects(response.data);
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
        <div>
            <h1>Projects List</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies}</p>
                        <p><a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">Source Code</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;

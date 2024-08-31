import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SkillsList = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://localhost:7222/api/skills');
                setSkills(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Skills List</h1>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>
                        <h2>{skill.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;

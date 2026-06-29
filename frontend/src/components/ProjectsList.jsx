import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section className="bg-white p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-4">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsList;
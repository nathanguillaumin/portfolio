import React, { useEffect, useState } from 'react';
import API from '../API';

const Projects = () => {
  const [projects, setProjects] = useState('');

  useEffect(() => {
    API.get('/projects')
      .then(res => res.data)
      .then(data => setProjects(data));
  }, []);

  return (
    <div />
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import API from '../API';
import ProjectCard from './CardProject';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/projects.css'

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    API.get('/projects')
      .then(res => res.data)
      .then(data => setProjects(data.map(project => {
        return {
          id: project.id,
          name: project.name,
          description_fr: project.description_fr,
          description_en: project.description_en,
          url_image: project.url_image,
          link: project.link,
          statut: project.statut,
        };
      })));
  }, []);

  if (!projects) {
    return <div className='loader'><CircularProgress style={{ width: '70px', height: '70px' }} /></div>;
  } else {
  return (
    <>
        <h4>Mes projets</h4>
        <div className='projects-div'>
            {projects.map(p => {
                return <ProjectCard p={p} />
            })}
        </div>
    </>
  );
}
};

export default Projects;

import React, { useState, useEffect } from 'react';
import API from '../API';
import TechnoCard from './TechnoCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/technos.css';

const Technologies = () => {
  const [technologies, setTechnologies] = useState();

  useEffect(() => {
    API.get('/technologies')
      .then(res => res.data)
      .then(data => setTechnologies(data.map(techno => {
        return {
          id: techno.id,
          name: techno.name,
          description_fr: techno.description_fr,
          description_en: techno.description_en,
          url_image: techno.url_image
        };
      })));
  }, []);

  if (!technologies) {
    return <div className='loader'><CircularProgress style={{ width: '70px', height: '70px' }} /></div>;
  } else {
  return (
    <>
        <h4>Mes technologies</h4>
        <div className='technos-div'>
            {technologies.map(t => {
                return <TechnoCard t={t} />
            })}
        </div>
    </>
  );
}
};

export default Technologies;

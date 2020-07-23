import React from 'react';
import { withNamespaces } from 'react-i18next';
import '../styles/intro.css';
import Button from '@material-ui/core/Button';

const Intro = ({ t }) => {
  return (
    <div className='div-intro'>
      <h1>{t('Title Introduction')}</h1>
      <h3>{t('Subtitle Introduction')}</h3>
      <img src={require('../images/nathan.png')} alt='photo_nathan' className='img_nathan' />
      <p>{t('Paragraph Introduction')}</p>
      <p>{t('Question Introduction')}</p>
      <a href='#contact'><Button variant='contained' className='call-to-action'>Contactez-moi</Button></a>
    </div>
  );
};

export default withNamespaces()(Intro);

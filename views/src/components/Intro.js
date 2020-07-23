import React, { useEffect, useState } from 'react';
import API from '../API';
import { withNamespaces } from 'react-i18next';
import '../styles/intro.css';

const Intro = ({t}) => {
    const [test, setTest] = useState('')

    useEffect(() => {
        API.get('/projects')
            .then(res => res.data)
            .then(data => setTest(data))
        
    }, [])


    return (
        <div className='div-intro'>
            <h1>{t('Title Introduction')}</h1>
            <h3>{t('Subtitle Introduction')}</h3>
            <img src={require('../images/nathan.png')} alt='photo_nathan' className='img_nathan'/>
            <p>{t('Paragraph Introduction')}</p>
            <p>{t('Question Introduction')}</p>
        </div>
    );
};

export default withNamespaces()(Intro);
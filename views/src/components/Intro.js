import React from 'react';

import { withNamespaces } from 'react-i18next';

const Intro = ({t}) => {
    return (
        <div>
            <h1>{t('Title Introduction')}</h1>
            <h3>{t('Subtitle Introduction')}</h3>
            <img src={require('../images/nathan.png')} alt='photo_nathan' />
            <p>{t('Paragraph Introduction')}</p>
            <p>{t('Question Introduction')}</p>
        </div>
    );
};

export default withNamespaces()(Intro);
import React, { useState, useEffect } from 'react';
import API from '../API';

const Technologies = () => {
    const [technologies, setTechnologies] = useState('')

    useEffect(() => {
        API.get('/technologies')
            .then(res => res.data)
            .then(data => setTechnologies(data))
        
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Technologies;
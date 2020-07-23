import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/contact.css';
import API from '../API';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post('messages', {...formData})
            .then(res => res.data)
            .then(data => setFormData({
                name: '',
                email: '',
                message: ''
            }))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
            <form id='contact' className='contact-form' noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
                <h3 style={{marginBottom: '30px'}}>Contactez-moi</h3>
                <TextField
                    className='input-contact'
                    id='name'
                    label='Nom'
                    variant='outlined'
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    name='name'
                    required
                />
                <TextField
                    className='input-contact'
                    id='email'
                    label='E-mail'
                    variant='outlined'
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    name='email'
                    type='mail'
                    required
                />
                <TextField
                    className='input-contact'
                    id='message'
                    label='Message'
                    variant='outlined'
                    value={formData.message}
                    onChange={(e) => handleChange(e)}
                    name='message'
                    multiline
                    rows={8}
                    required
                />
                <input className='input-submit input-submit' type='submit'/>
            </form>
    );
};

export default Contact;
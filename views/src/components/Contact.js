import React from 'react';
import { TextField } from '@material-ui/core';
import '../styles/contact.css';

const Contact = () => {

    const handleSubmit = (e) => {
        'hello'
    }

    const handleChange = (e) => {
        'hello'
    }

    return (
            <form id='contact' className='contact-form' noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
                <TextField
                    className='input-contact'
                    id='name'
                    label='Nom'
                    variant='outlined'
                    // value={name}
                    onChange={(e) => handleChange(e)}
                    name='name'
                    required
                />
                <TextField
                    className='input-contact'
                    id='message'
                    label='Message'
                    variant='outlined'
                    // value={name}
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
import React, { useState, useEffect } from 'react';
import API from '../API';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MessageCard from './MessageCard'

const AdminHome = () => {
  const [messages, setMessages] = useState();
  const [validation, setValidation] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [msgValidation, setMsgValidation] = useState('');

  useEffect(() => {
    API.get('/messages')
      .then(res => res.data)
      .then(data => setMessages(data));
  }, []);

  const handlePatch = (id) => {
    //   API.patch('/messages', { id })
    //     .then(response => response.data)
    //   setBookings(messages.filter(b => b.id_booking !== id));
    //   setValidation(true);
    //   setIsValidated(true);
    //   setMsgValidation('La réservation a bien été acceptée et apparaîtra sur votre calendrier de réservation.');
  };

  const handleCloseMui = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setValidation(false);
  };

  function Alert (props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  if (!messages) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}><CircularProgress style={{ width: '50px', height: '50px', margin: '0 auto' }} /></div>;
  } else {
    return (
      <div className='home-container'>
        <h2>Bienvenue {localStorage.getItem('name')}</h2>
        {!messages.length === 0 && <h3 className='home-title'>Vos dernières demandes de réservation</h3>}
        {messages.map(m => {
          return (
            <MessageCard
              key={m.id}
              m={m}
          //     handlePatch={handlePatch}
              setMessages={setMessages}
            />
          );
        }
        )}
        {messages.length === 0 && <p className='no-messages'>Vous n'avez aucune nouvelle demande de réservation</p>}
        <Snackbar open={validation} autoHideDuration={6000} onClose={handleCloseMui}>
          <Alert onClose={handleCloseMui} severity={isValidated ? 'success' : 'error'}>
            {msgValidation}
          </Alert>
        </Snackbar>
      </div>
    );
  }
};

export default AdminHome;

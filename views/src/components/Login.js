import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthContext from '../AuthContext';
import API from '../API';
import { Redirect } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import jwtDecode from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Login() {
  const classes = useStyles();

  const [token, setToken] = useState(localStorage.getItem('authToken'))
  const [id, setId] = useState(localStorage.getItem('id'))
  const [name, setName] = useState(localStorage.getItem('name'))

  const setTokenInLocalStorage = (token) => {
    localStorage.setItem('authToken', token)
    setToken(token)
  }

  const setIdInLocalStorage = (id) => {
    localStorage.setItem('id', id)
    setId(id)
  }

  const setNameInLocalStorage = (name) => {
    localStorage.setItem('name', name)
    setName(name)
  }

  let userNameFromToken = null
  if (token) {
    userNameFromToken = jwtDecode(token).name || null
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [messageForm, setMessageForm] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');
  const [errorForm, setErrorForm] = useState(false);

  const handleSubmit = event => {
    event.preventDefault()
    API.post('/auth/login', {email, password})
      .then(res => res.data)
      .then((data) => {
        setToken(data.token)
        setIdInLocalStorage(data.data.id)
        setNameInLocalStorage(data.data.name)
      })
      .catch(err => {
        console.log(err);
        setMsgAlert('Une erreur est survenue, veuillez essayer à nouveau');
        setErrorForm(true);
        setMessageForm(true);
      })
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  const handleCloseMui = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageForm(false);
  };


  if(!!token){
    return (
      <Redirect
      to={{
        pathname: "/admin"
      }}
    />
    )
  } else {
    return (
        <AuthContext.Provider value={{token, setToken: setTokenInLocalStorage, id, setId: setIdInLocalStorage, name, setName: setNameInLocalStorage}}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Connexion
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mot de passe"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Connexion
                    </Button>
                </form>
                <Snackbar open={messageForm} autoHideDuration={6000} onClose={handleCloseMui}>
                    <Alert onClose={handleCloseMui} severity={!errorForm ? 'success' : 'error'}>
                    {msgAlert}
                    </Alert>
                </Snackbar>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
      </AuthContext.Provider>
    );
  }
}
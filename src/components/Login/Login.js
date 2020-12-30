import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import './Login.css'

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://image.flaticon.com/icons/png/512/2111/2111615.png'
          alt='Slack Logo'
        />
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login

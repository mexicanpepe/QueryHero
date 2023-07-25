/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { auth, provider } from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Auth = ({setIsAuth}) => {

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(cookies.get("auth-token"))

    } catch(error){
      console.error(error);
    }

  }

  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  )
}

export default Auth
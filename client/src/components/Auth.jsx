/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { auth, provider } from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie';
import  styled  from 'styled-components';
import {FcGoogle} from 'react-icons/fc'
const cookies = new Cookies();

const Main = styled.div`
display:flex;
flex-direction: column;
align-items:center;
max-width: 1024px;
margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 100%;
  padding-left: 1rem/* 16px */;
  padding-right: 1rem/* 16px */;
`
const SignIn = styled.div`

`
const TitleDIV = styled.div`

`
const Title = styled.h1`
font-size: 3rem/* 48px */;
`
const Button = styled.button`
  border-radius: 25px;
  padding: 0px 24px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #000;
  background-color: white;

  &:hover {
    background-color: #e5e5e5;
    .google {
      transform: rotate(720deg);
      transition-duration: 0.8s;
    }

    transition: background-color 1.3s ease;
`

const GoogleIcon = styled(FcGoogle)`
  font-size: 38px;
  margin-left: 8px;
`;

const Auth = ({isAuth, setIsAuth}) => {

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
    <Main>
      <TitleDIV>
          <Title>Query Hero</Title>
      </TitleDIV>
      <SignIn>
        <Button className="group" onClick={signInWithGoogle}>
            <GoogleIcon className="google" />
            Continue With Google
        </Button>
      </SignIn>
    </Main>
  )
}

export default Auth
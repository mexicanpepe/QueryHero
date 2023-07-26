/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
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

const TitleDIV = styled.div`
margin-bottom: 50px;
`
const Title = styled.h1`
font-size: 4rem/* 48px */;
font-weight: 700;
${(props) =>
    props.isClicked &&
    `
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background-color: #00cfa6;
      box-shadow: 0px 10px 12px .5px rgba(0, 0, 0,1.5);
      animation: underlineAnimation 1.5s linear forwards;
    }
  `}

  @keyframes underlineAnimation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1.5);
    }
  }
`
const Button = styled.button`
  border-radius: 25px;
  padding: 0px 24px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #000;
  background-color: #f6f6f6;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);

  &.active {
    background-color: #00cfa6;
  }

  &:hover {
    background-color: #00cfa6;
    .google {
      transform: rotate(720deg);
      transition-duration: 0.8s;
    }

    transition: background-color 2s ease;
`

const GoogleIcon = styled(FcGoogle)`
  font-size: 38px;
  margin-left: 8px;
`;

const Auth = ({isAuth, setIsAuth}) => {

  const [isClicked, setIsClicked] = useState(false);

  const signInWithGoogle = async () => {
    try {
      setIsClicked(true);
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
        <Title isClicked={isClicked}>Query Hero</Title>
      </TitleDIV>

      <div>
        <Button
          className={isClicked ? 'google active' : 'google'}
          onClick={signInWithGoogle}
        >
          <GoogleIcon className="google" />
          Continue With Google
        </Button>
      </div>
    </Main>
  )
}

export default Auth
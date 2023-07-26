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
  padding-left: 1rem
  padding-right: 1rem
`

const TitleDIV = styled.div`
margin-bottom: 50px;
`
const Title = styled.h1`
  font-size: ${({ isClicked }) => (isClicked ? '4rem' : '1rem')};
  font-weight: 700;
  color: ${({ isClicked }) => (isClicked ? '#f5f5f5' : 'inherit')};
  transition: font-size 1.5s ease;

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
      background-color: #f5f5f5;
      box-shadow: 0px 10px 12px .5px rgba(0, 0, 0, 1.5);
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
    background-color: #036c5f;
    color: white;
  }

  &:hover {
    background-color: #036c5f;
    color: white;
    .google {
      transform: rotate(1082deg);
      transition-duration: 1.2s;
    }

    transition: background-color 1.7s ease;
`

const GoogleIcon = styled(FcGoogle)`
  font-size: 38px;
  margin-left: 8px;
`;

const Auth = ({ isAuth, setIsAuth, isClicked, handleSignIn }) => {
  return (
    <Main>
      <TitleDIV>
        <Title isClicked={isClicked}>Query Hero</Title>
      </TitleDIV>

      <div>
        <Button
          className={isClicked ? 'google active' : 'google'}
          onClick={handleSignIn}
        >
          <GoogleIcon className="google" />
          Continue With Google
        </Button>
      </div>
    </Main>
  );
};

export default Auth
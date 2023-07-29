/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import Auth from './components/Auth.jsx';
import Cookies from 'universal-cookie';
import DbSelector from './components/DbSelector';
import { auth, provider } from '../src/firebase-config.js';
import { signInWithPopup } from 'firebase/auth';


const cookies = new Cookies();

const Main = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ clicked }) =>
    clicked
      ? 'linear-gradient(to bottom, #5B39D8, #5B39D8,#5B39D8, #FF5370, #FF5370)'
      : 'white'};
  opacity: ${({ clicked }) => (clicked ? 1 : 0)};
  transition: background 6s ease, opacity 2s ease;
  pointer-events: none;
  z-index: -1;
`;

function App() {
  const [isAuth, setIsAuth] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [userName , setUserName] =useState('')
  const [email, setEmail] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('auth-token', result.user.refreshToken);
      setUserName(result.user.displayName)
      setEmail(result.user.email)
      setPhotoUrl(result.user.photoUrl);
      setIsAuth(cookies.get('auth-token'));

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Main>
      <Background clicked={isClicked} />
      {!isAuth ? (
        <Auth
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          isClicked={isClicked}
          handleSignIn={handleSignIn}
          setIsClicked={setIsClicked}
        />
      ) : (
        <DbSelector setIsClicked={setIsClicked} userName={userName} email={email} photoUrl={photoUrl}/>
      )}
    </Main>
  );
}

export default App;


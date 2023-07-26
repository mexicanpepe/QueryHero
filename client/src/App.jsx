/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styled from 'styled-components';
import Auth from './components/Auth.jsx';
import Cookies from 'universal-cookie';
import DbSelector from './components/DbSelector';

const cookies = new Cookies();

const Main = styled.div`
  height: 100vh;
  width:100%;

`


function App() {

  const[isAuth, setIsAuth] = useState('')

  if (!isAuth) {
    return (
      <Main>
        <Auth  isAuth = {isAuth}setIsAuth={setIsAuth}/>
      </Main>
  )
  }
    return (
      <Main>
        <DbSelector />
      </Main>
    )

}

export default App

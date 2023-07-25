/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styled from 'styled-components';
import Postgres from './components/Postgres';
import Auth from './components/Auth.jsx';
import Cookies from 'universal-cookie';

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
        <Auth setIsAuth={setIsAuth}/>
      </Main>
  )
  }
    return (
      <div>
        <Postgres />
      </div>
    )

}

export default App

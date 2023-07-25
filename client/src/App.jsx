/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styled from 'styled-components';
import Postgres from './components/Postgres';
import Auth from './components/Auth.jsx';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {

  const[isAuth, setIsAuth] = useState('')

  if (!isAuth) {
    return (
        <div>
          <Auth setIsAuth={setIsAuth}/>
        </div>
  )
  }
    return (
      <div>
        <Postgres />
      </div>
    )

}

export default App

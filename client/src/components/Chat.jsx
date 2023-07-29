/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {BiLogoPostgresql, BiLogoMongodb} from 'react-icons/bi'
import Options from './Options';

const SelectorDIV = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  align-items: center;
  margin-bottom: -185px;
`

const SelectorBtn = styled.button`
width: 65%;
margin-bottom: 20px;
height: 55px;
font-size: large;
background-color: ${({ db }) => (db === 'postgresql' ? '#0063a56e' : '#4db33d65')};
cursor: pointer;

  &:hover {
    background-color: ${({ db }) => (db === 'postgresql' ? '#0063a5be' : '#4db33dbe')};
    transition: background-color .5s ease;
  }
`
const ChangeDB = styled.p`
  font-size: xx-small;
  cursor: pointer;
`

 export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93%;
  width: 100%;
  background: #fce8f0;
  opacity: .95;
`
const Postgres = styled(BiLogoPostgresql)`
  font-size: 225px;
  color: #0064a5;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
`
const Mongo = styled(BiLogoMongodb)`
  font-size: 225px;
  color: #4DB33D;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
  `

const DbHeader = styled.h1`
color: ${({ db }) => (db === 'postgresql' ? '#0063a5be' : '#4db33dbe')};
margin-bottom: 120px;
`

const Chat = ({db, setSelected, setIsClicked, userName, email, photoUrl}) => {
  const [input, setInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [selectOpt, setSelectOpt] = useState(false);
  const [generateQuery, setGeneratequery] = useState(false);
  const [start, setStart] = useState(false);
  const [create, setCreate] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Submitted", input);

    const aiResponse = await generateAnswer();

    console.log("AI RESPONSE FRM SRVR", aiResponse);

    setAiResponse(aiResponse);
  }


  const generateAnswer = async () => {
    try {
      const response = await axios.post("http://localhost:3005/generate", {
        inputDescription: input,
        userName: userName,
        email: email,
        photoUrl: photoUrl,
        db: db,
      });
      return response.data.response.trim();
    } catch (error) {
      console.error("Error in API call:", error);
      return "";
    }
  };

  const selectorClick = (option) => {
    setSelectOpt(!selectOpt);

    if (option === 'generate') {
      setGeneratequery(true);
      setCreate(false);
      setStart(false);

    } else if (option === 'start') {
      setGeneratequery(false);
      setCreate(false);
      setStart(true);

    } else if (option === 'create') {
      setGeneratequery(false);
      setCreate(true);
      setStart(false);
    }
  }

  const optionsClick = () => {
    setSelectOpt(false)
    setGeneratequery(false);
    setCreate(false);
    setStart(false);
    setAiResponse('');
  }

  const inputChange = (event) => {
    if (db === 'postgresql') {
      if (generateQuery) {
        setInput("Create a query for a postgreSQL DB" + " " + event.target.value)
      }

    } else if (db === 'mongodb') {
        if (generateQuery) {
          setInput("Create a query for a Mongo DB" + " " + event.target.value)
        }
    }
  }

  return (
    <Main db={db}>
      {db === 'postgresql' ? <Postgres /> : <Mongo />}

      {!selectOpt ? (
        <SelectorDIV>
          <DbHeader db={db}>{db}</DbHeader>
          <SelectorBtn db={db} onClick={() => {selectorClick('start')}}>Get Started</SelectorBtn>
          {/* <SelectorBtn db={db} onClick={() => {selectorClick('create')}} >Create Database</SelectorBtn> */}
          <SelectorBtn db={db} onClick={() => {selectorClick('generate')}}>Generate Query</SelectorBtn>
          <ChangeDB onClick={() => {setSelected(false)}}>Change Database?</ChangeDB>
        </SelectorDIV>

      ) : (
         (
          <Options generateQuery={generateQuery} start={start} create={create} aiResponse={aiResponse} db={db} onSubmit={onSubmit} setInput={setInput} optionsClick={optionsClick} inputChange={inputChange}/>
        )
      )}
    </Main>
  );
}

export default Chat
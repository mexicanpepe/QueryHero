/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {FaRegPaperPlane} from 'react-icons/fa'
import {BiLogoPostgresql, BiLogoMongodb} from 'react-icons/bi'


const Form = styled.div`
  padding: 20px;
  border-radius: 5px;
  /* box-shadow: 0px 25px 25px ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')}; */
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
`
const StyledButton = styled.button`
  background-color: ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')};
  color: white;
  padding: 6px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 1.3s ease;

  &:hover {
    background-color: #024f46;
  }
`;
const Backbtn = styled.button`
margin-bottom: 20px;
`

const SelectorDIV = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  align-items: center;
  margin-bottom: -200px;
`

const SelectorBtn = styled.button`
width: 65%;
margin-bottom: 20px;
height: 55px;
font-size: large;
background-color: ${({ db }) => (db === 'PostgreSQL' ? '#0063a56e' : '#4db33d65')};
cursor: pointer;

  &:hover {
    background-color: ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')};
    transition: background-color .5s ease;
  }
`
const Input = styled.input`
  padding-left:35px;
  padding-right:40px;
padding-top: 6px;
padding-bottom: 4px;
  width: 81%;
  margin-left: 30px;
`
const ChangeDB = styled.p`
  font-size: xx-small;
  cursor: pointer;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: white;
  opacity: .8;
`
const Postgres = styled(BiLogoPostgresql)`
  font-size: 120px;
  color: #0064a5;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
`
const Mongo = styled(BiLogoMongodb)`
  font-size: 120px;
  color: #4DB33D;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
  `

const CodeContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background-color: #f7f7f7;
padding: 10px;
border-radius: 4px;
font-family: 'Courier New', monospace;
font-size: 18px;
height:550px;
width:90%;
`;

const DbHeader = styled.h1`
color: ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')};
margin-bottom: 10px;
`

const Chat = ({db, setSelected, setIsClicked}) => {
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
    // setIsClicked(true);
  }

  const generateAnswer = async () => {
    try {
      const response = await axios.post("http://localhost:3005/generate", {
        inputDescription: input
      });
      return response.data.response.trim();
    } catch (error) {
      console.error("Error in API call:", error);
      return "";
    }
  }

  const selectorClick = (option) => {
    setSelectOpt(!selectOpt);

    if (option === 'generate') {
      setGeneratequery(true);
      setCreate(false);
      setStart(false);
    }
  }

  const optionsClick = () => {
    setSelectOpt(false)
    setGeneratequery(false);
    setAiResponse('');
  }

  return (
    <Main db={db}>
      {db === 'PostgreSQL' ? <Postgres /> : <Mongo />}
      <DbHeader db={db}>{db}</DbHeader>

      {!selectOpt ? (
        <SelectorDIV>
          <SelectorBtn db={db}>Get Started</SelectorBtn>
          <SelectorBtn db={db}>Create Database</SelectorBtn>
          <SelectorBtn db={db} onClick={() => {selectorClick('generate')}}>Generate Query</SelectorBtn>
          <ChangeDB onClick={() => {setSelected(false)}}>Change Database?</ChangeDB>
        </SelectorDIV>

      ) : generateQuery ? (
        <>
          <CodeContainer>
              <pre>
               <code>{aiResponse}</code>
              </pre>
          </CodeContainer>

          <Form db={db} onSubmit={onSubmit}>
            <Input onChange={(event) => setInput(event.target.value)} type="text" name="question" placeholder="Generate Query" />
            <StyledButton db={db} onClick={onSubmit}><FaRegPaperPlane /></StyledButton>
          </Form>
          <Backbtn onClick={optionsClick}>Options</Backbtn>
        </>

      ) : null}


    </Main>
  );
}

export default Chat
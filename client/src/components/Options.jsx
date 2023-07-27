/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import styled from 'styled-components'
import {FaRegPaperPlane} from 'react-icons/fa'
import {SiWindows95, SiApple, SiJavascript, SiPython} from 'react-icons/si'
import {IoMdOptions} from 'react-icons/io'
import SetupDisplay from './SetupDisplay'

const CodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  height: 550px;
  width: 90%;
  overflow: auto;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.6);
`;

const Code = styled.code`
  white-space: pre-wrap;
`;

const Form = styled.div`
  padding: 20px;
  border-radius: 5px;
  /* box-shadow: 0px 25px 25px ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')}; */
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
`
const StyledButton = styled.button`
  background-color: ${({ db }) => (db === 'postgresql' ? '#0063a5be' : '#4db33dbe')};
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
const Input = styled.input`
  padding-left:35px;
  padding-right:40px;
padding-top: 6px;
padding-bottom: 4px;
  width: 81%;
  margin-left: 30px;
`
const Setup = styled.h1`
color: ${({ db }) => (db === 'postgresql' ? '#0063a5be' : '#4db33dbe')};
`
const TechDiv = styled.div`
  display: flex;
  flex-direction:row;

`
const Apple = styled(SiApple)`
font-size: 100px;
cursor:pointer;
margin: 45px;
`
const Windows = styled(SiWindows95)`
font-size: 100px;
cursor:pointer;
margin: 45px;
`
const Js = styled(SiJavascript)`
font-size: 100px;
cursor:pointer;
margin: 45px;
`
const Python = styled(SiPython)`
font-size: 100px;
cursor:pointer;
margin: 45px;
`



const Options = ({ generateQuery, start, create, aiResponse, db, onSubmit, setInput, optionsClick, inputChange }) => {
  const [tech, setTech] = useState("operatingSystem");
  const [operatingSystem, setOperatingSystem] = useState('')
  const [language, setLanguage] = useState('')



  const opSystemClick = (pick) => {
    if (tech === "operatingSystem") {
        setOperatingSystem(pick);
        setTech("language");
    } else {
      setLanguage(pick);
      setTech(false);
    }
  }


  if (generateQuery) {
    return (
      <>
        <CodeContainer>
          <pre>
            <Code>{aiResponse}</Code>
          </pre>
        </CodeContainer>

        <Form db={db} onSubmit={onSubmit}>
          <Input onChange={(event) => inputChange(event)} type="text" name="question" placeholder="Generate Query" />
          <StyledButton db={db} onClick={onSubmit}><FaRegPaperPlane /></StyledButton>
        </Form>
        <Backbtn onClick={optionsClick}><IoMdOptions size={17}/></Backbtn>
      </>
    );
  } else if (start) {
    return (
      <>
        <Setup db={db}>Get Started</Setup>
        {tech ? (
          <TechDiv>
            {tech === "operatingSystem" ? (
              <>
                <Apple onClick={() => {opSystemClick("apple")}}/>
                <Windows onClick={() => {opSystemClick("windows")}} />
              </>
            ) : (
              <>
                <Js onClick={() => {opSystemClick("js")}}/>
                <Python onClick={() => {opSystemClick("py")}} />
              </>
            )}
          </TechDiv>
        ) : (
          <>
            <SetupDisplay tech={tech} operatingSystem={operatingSystem} language={language} db={db} setTech={setTech} />
          </>
        )}

        <Backbtn onClick={optionsClick}><IoMdOptions size={17} /></Backbtn>
      </>
    );
  } else if (create) {
    return (
      <>
        create database
        <Backbtn onClick={optionsClick}><IoMdOptions size={17} /></Backbtn>
      </>
    );
  }
};

export default Options
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import {FaRegPaperPlane} from 'react-icons/fa'

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
overflow: scroll;
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
const Input = styled.input`
  padding-left:35px;
  padding-right:40px;
padding-top: 6px;
padding-bottom: 4px;
  width: 81%;
  margin-left: 30px;
`

const Options = ({ generateQuery, start, create, aiResponse, db, onSubmit, setInput, optionsClick, inputChange}) => {

  if (generateQuery) {
    return (
      <>
      <CodeContainer>
          <pre>
           <code>{aiResponse}</code>
          </pre>
      </CodeContainer>

      <Form db={db} onSubmit={onSubmit}>
        <Input onChange={(event) => inputChange(event)} type="text" name="question" placeholder="Generate Query" />
        <StyledButton db={db} onClick={onSubmit}><FaRegPaperPlane /></StyledButton>
      </Form>
      <Backbtn onClick={optionsClick}>Options</Backbtn>
    </>
    )
  } else if (start) {
    return (
      <>get started
      <Backbtn onClick={optionsClick}>Options</Backbtn>
      </>
    )
  } else if (create) {
    return (
      <>create database
      <Backbtn onClick={optionsClick}>Options</Backbtn>
      </>
    )
  }
}

export default Options
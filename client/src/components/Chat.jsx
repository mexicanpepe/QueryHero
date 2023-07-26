/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {FaRegPaperPlane} from 'react-icons/fa'

const StyledButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.9s ease;

  &:hover {
    background-color: #f00da8;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const Chat = ({db}) => {
  const [input, setInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");

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
        inputDescription: input
      });
      return response.data.response.trim();
    } catch (error) {
      console.error("Error in API call:", error);
      return ""; // Return an empty string or handle the error case accordingly
    }
  }

  return (
    <Main>
      <h1>{db}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => setInput(event.target.value)} type="text" name="question" placeholder="Generate Query"></input>
        <StyledButton><FaRegPaperPlane /></StyledButton>
      </form>
      <h1>{aiResponse}</h1>
    </Main>
  );
}

export default Chat
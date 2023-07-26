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
  margin-top: 100px;
`
const StyledButton = styled.button`
  background-color: ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')};
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 1.3s ease;

  &:hover {
    background-color: #024f46;
  }
`;
const Input = styled.input`
  padding: 5px 20px;
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
  height: 93%;
  width: 100%;
  box-shadow: -40px 25px 25px ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')},
              40px 25px 25px ${({ db }) => (db === 'PostgreSQL' ? '#0063a5be' : '#4db33dbe')};
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

const Chat = ({db, setSelected}) => {
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
      return "";
    }
  }

  return (
    <Main db={db}>
      {db === 'PostgreSQL' ? <Postgres /> : <Mongo />}
      <h1>{db}</h1>

      <Form db={db}>
          <Input onChange={(event) => setInput(event.target.value)} type="text" name="question" placeholder="Generate Query">
          </Input>
        <StyledButton db={db} onSubmit={onSubmit}><FaRegPaperPlane /></StyledButton>
      </Form>

      <h1>{aiResponse}</h1>
      <ChangeDB onClick={() => {setSelected(false)}}>Change Database?</ChangeDB>
    </Main>
  );
}

export default Chat
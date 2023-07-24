import { useState } from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f00da8;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content:center;
`

function App() {

  const [input, setInput] = useState("")
  const [aiResponse, setAiResponse] = useState("");

  const onSubmit =  async (event) => {
    event.preventDefault();
    console.log("Form Submitted", input);

    const aiResponse = await generateAnswer()

    console.log("AI RESPONSE FRM SRVR", aiResponse);

    setAiResponse(aiResponse);


  }

  const generateAnswer = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({inputDescription: input })
    })
     const data = await response.json()
     return data.response.trim();
  }

  return (
    <Main>
      <h1> Chat Gpt Api</h1>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => setInput(event.target.value)}type="text" name="question" placeholder="Ask GPT Somthing"></input>
        {/* <input type="submit" value="Generate Response"/> */}
        <StyledButton>BUTTON</StyledButton>
      </form>
      <h1>{aiResponse}</h1>
    </Main>



  )
}

export default App

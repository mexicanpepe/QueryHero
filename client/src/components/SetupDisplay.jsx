/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import {macPythonPost, macJsPost, winPythonPost, winJsPost} from '../Get_Started/SetupPostgres'
import {macJsMongo, winJsMongo, macPythonMongo, winPythonMongo} from '../Get_Started/SetupMongo'


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
  margin-bottom: 18px;
`;

const Code = styled.code`
  white-space: pre-wrap;
`;

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
const SetupDisplay = ({tech, operatingSystem, language, db, setTech}) => {

  const [currentStep, setCurrentStep] = useState(0);
    console.log("Setup key:", operatingSystem);
    console.log("Language key:", language);

    console.log("Current Step:", currentStep);

  const setupSteps = {
    postgresql: {
      apple: {
        js: macJsPost,
        py: macPythonPost,
      },
      windows: {
        js: winJsPost,
        py: winPythonPost,
      },
    },
    mongodb: {
      apple: {
        js: macJsMongo,
        py: macPythonMongo,
      },
      windows: {
        js: winJsMongo,
        py: winPythonMongo,
      },
    },
  };



  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };



  if (operatingSystem && language && db) {
    const currentStepData = setupSteps[db][operatingSystem][language];

    console.log("Current Step Data:", currentStepData);


    if (currentStepData && currentStep < currentStepData.length) {
      return (
        <>
          <h2>{currentStepData[currentStep].title}</h2>
          <p>{currentStepData[currentStep].description}</p>
          <CodeContainer>
            <pre>
              <Code>{currentStepData[currentStep].code.join("\n")}</Code>
            </pre>
          </CodeContainer>
          <StyledButton db={db} onClick={nextStep}>Next Step</StyledButton>
        </>
      );
    } else {
      return (
        <>
          <h2>Setup Completed!</h2>
          <StyledButton db={db} onClick={() => setTech("operatingSystem")}>Start Over</StyledButton>
        </>
      );
    }
  } else {
    return (
      <div>test</div>
    )

  }


}

export default SetupDisplay
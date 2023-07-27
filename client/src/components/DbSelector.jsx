/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState} from 'react'
import  styled  from 'styled-components';
import {BiLogoPostgresql, BiLogoMongodb} from 'react-icons/bi'
import Chat from './Chat';

const Main = styled.div`
display:flex;
flex-direction: column;
align-items:center;
max-width: 1024px;
margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 100%;
  padding-left: 1rem/* 16px */;
  padding-right: 1rem/* 16px */;
`
const Selector = styled.h3`
font-size: 2rem;

`
const Dbs = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
`
const Postgres = styled(BiLogoPostgresql)`
  font-size: 120px;
  color: #0064a5;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;


  &:hover {
    font-size: 225px;
  }
`
const Mongo = styled(BiLogoMongodb)`
  font-size: 120px;
  color: #4DB33D;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;

  &:hover {
    font-size: 225px;
  }
`

const DbSelector = ({setIsClicked}) => {

  const [selected, setSelected] = useState(false)
  const [db, setDb] = useState('')


  const handleSelectDatabase = (database) => {
    setSelected(true);
    setDb(database);
  };

  return (
    <Main>
      {!selected ? (
        <>
          <Dbs>
            <Postgres onClick={() => handleSelectDatabase('postgresql')} />
            <Mongo onClick={() => handleSelectDatabase('mongodb')} />
          </Dbs>

          <div>
            <Selector>Choose Your Database</Selector>
          </div>
        </>
      ) : (
        <Chat db={db} setSelected={setSelected} setIsClicked={setIsClicked}/>
      )}
    </Main>
  );
};


export default DbSelector
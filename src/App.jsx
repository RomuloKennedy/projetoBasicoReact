import React from 'react';
import {change} from './services/catchCat'
import styled from 'styled-components'
import img from './img/1.jpg'
import { useState } from 'react';


const App = () => {

  const [cat,setCatState]  = useState(img);

  return(
    <Div>
      <H1>Choice You Cat </H1>
      <Img id="image" src={cat} alt="cats"/>
      <Button onClick={async()=>{ setCatState(await change()) } }>Change</Button>
    </Div>
  )
}
const Button = styled.button`
height:45px;
width:150px;
margin-top:2em;
background:orangered;
color:white;
border-radius:8px;
font-size:15px;
font-family:Arial, Helvetica, sans-serif;


&&:hover{
    background:orange;
}`

const Img = styled.img`
margin-top:1em;
max-width:500px;
height:600px;

`
const H1 = styled.h1`
margin-top:3em;
font-family:cursive;
`

const Div = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;


`


export default App;

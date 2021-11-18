import React from 'react';
import {Button} from './components/button'
import {change} from './services/catchCat'
import styled from 'styled-components'
import img from './img/1.jpg'


const App = () => {
  return(
    <Div>
      <H1>Choice You Cat </H1>
      <Img src={img} alt="cats"/>
      {Button(change)}
    </Div>
  )
}

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

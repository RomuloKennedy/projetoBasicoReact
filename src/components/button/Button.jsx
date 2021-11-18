import styled from 'styled-components'

export const Button = (change) => {

    return (
        <ButtonStyle onClick={change} >Change Cat</ButtonStyle>
    )
}

const ButtonStyle =  styled.button`
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
}
`;
import React from "react";
import styled from "styled-components";
/*
colors:
green: #0EBE93
dark-blue: #15BC90
orange: #FC763E
yellow:#FCDE8A
brightyellow: #FFFCD2

*/
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CharacterCard = props => (
  <Card key={props.id}>
    <h3>{props.name}</h3>
    <img src={props.image} alt={props.name} />
    <h4>About {props.name}</h4>
    <p>Status: {props.status}</p>
    <p>Gender: {props.gender}</p>
    <p>Species: {props.species}</p>
    <p>Location: {props.location.name}</p>
  </Card>
);
export default CharacterCard;

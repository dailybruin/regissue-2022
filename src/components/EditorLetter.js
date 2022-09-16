import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import BlueBuildings from "../images/BlueBg.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: url(${BlueBuildings});
  background-size: cover;
  margin-top: 4em;
  box-sizing: border-box;

  display: grid;
  grid-template-rows: auto auto;
  row-gap: 2em;
  padding-top: 10em;
  padding-bottom: 7em;
  padding-left: 7em;
  overflow: wrap;
  
  ${mediaQueries.mobile} {
    position: static;
    height: fit-content;
    row-gap: 1em;
    padding: 3em;
  }
`;

const LetterHeader = styled.div`
  width: 35%;
  height: fit-content;
  background-color: #F8D84A;
  font-family: 'Bangers', cursive;
  font-size: 32px;
  line-height: 1.5em;
  border: solid black 4px;
  box-sizing: content-box;
  text-align: left;
  padding-left: 2%;

  ${mediaQueries.mobile} {
    font-size: 18px;
    line-height: 1em;
    width: 90%;
    margin: auto;
    padding: 2% 2%;
  }
`;

const LetterBox = styled.div`
  background-color: #F8D84A;
  width: 50%;
  border: solid black 4px;
  padding: 2% 2%;
  font-size: 24px;
  line-height: 1.5em;
  text-align: left;
  box-sizing: content-box;

  ${mediaQueries.mobile} {
      width: 90%;
      margin: auto;
    }

  p {
    margin-top: 0;
    ${mediaQueries.mobile} {
      font-size: 14px;
      line-height: 1.2em;
    }
  }
`;

export default function EditorLetter(props) {
  return (
    <Container>
          <LetterHeader>
              MEANWHILE... A LETTER FROM THE EDITORS...
          </LetterHeader>
          <LetterBox>
                {props.letter.map((info) => {
                    if (info.type == "text") {
                        return <p>{info.value}</p>;
                    } 
                })}
          </LetterBox>
    </Container>
  );
}
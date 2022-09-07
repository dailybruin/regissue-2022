import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import BlueBuildings from "../images/BlueBg.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BlueBuildings});
  background-size: cover;
  
  ${mediaQueries.mobile} {
    position: static;
    height: 60vh;
  }
`;

const LetterGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 2em;
  width: 45%;
  left: 7em;
  bottom: 7em;
  ${mediaQueries.mobile} {
    position: static;
    margin: auto;
    width: 90%;
    row-gap: 1em;
  }
`

const LetterHeader = styled.div`
  width: 70%;
  height: fit-content;
  background-color: #F8D84A;
  font-family: 'Bangers', cursive;
  font-size: 32px;
  line-height: 1.5em;
  border: solid black 4px;
  ${mediaQueries.mobile} {
    font-size: 18px;
    line-height: 1em;
    width: 85%;
    margin-top: 10%;
  }
`;

const LetterBox = styled.div`
  background-color: #F8D84A;
  width: 100%;
  border: solid black 4px;
`;

const Content = styled.div`
  margin: auto;
  padding: 2% 2%;
  font-size: 24px;
  line-height: 1.5em;
  text-align: left;

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
        <LetterGrid>
          <LetterHeader>
              MEANWHILE... A LETTER FROM THE EDITORS...
          </LetterHeader>
          <LetterBox>
              <Content>
                  {props.letter.map((info) => {
                      if (info.type == "text") {
                          return <p>{info.value}</p>;
                      } 
                  })}
              </Content>
          </LetterBox>
        </LetterGrid>
    </Container>
  );
}
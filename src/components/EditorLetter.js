import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import BlueBuildings from "../images/BlueBuildings.svg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BlueBuildings});
  ${mediaQueries.mobile} {
    width: 90%;
  }
`;

const LetterHeader = styled.div`
    width: 35%;
    height: fit-content;
    background-color: #F8D84A;
    font-family: 'Bangers', cursive;
    font-size: 32px;
    line-height: 36px;
`;

const LetterBox = styled.div`
    background-color: #F8D84A;
    margin-left: 10%;
    width: 40%;
    height: 40%;
`;

const Content = styled.div`
  margin: auto;
  padding: 2% 2%;
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  ${mediaQueries.mobile} {
    font-size: 15px;
  }

  p {
    margin-top: 0;
  }
`;

export default function EditorLetter(props) {
  return (
    <Container>
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
    </Container>
  );
}
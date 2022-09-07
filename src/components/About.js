import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Apply from "../images/apply_quote.svg";

const Container = styled.div`
    background-color: #EA4325;
    width: 100%;
`

const SpeechBubble = styled.img`
    margin: auto;
    text-align: center;
    max-width: 100%;
    padding: 5em;
    box-sizing: border-box;

    ${mediaQueries.mobile} {
        padding: 0em;
    }
`

const Header = styled.div`
    font-family: Bangers;
    font-size: 96px;
    font-weight: 400;
    line-height: 102px;
    text-align: center;
    color: #F8D84A;
    text-shadow: 4px 6px 0px #000000;
    text-transform: uppercase;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 3px;

    ${mediaQueries.mobile} {
        width: 95%;
    }
`


export default function About(props)
{
    return (
        <Container>
            <SpeechBubble src={Apply}/>
            <Header>Daily Bruin Editorial Staff</Header>
        </Container>
    )
    
}
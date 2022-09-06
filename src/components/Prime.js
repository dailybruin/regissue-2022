import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import PrimeHeader from "../images/prime.svg";
import PrimeBg from "../images/prime_dots.svg";
import Card from "./Card";


const Container = styled.div`
    background-color: #F8D84A;
    max-width: 100vw;
    position: relative;
    overflow: hidden;
`;

const Header = styled.img`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 3em;
    z-index: 5;

    display: inline-block;
    max-width: 100%; 
    vertical-align: middle; 
    overflow: hidden; 
`

const Bg = styled.img`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;

    display: inline-block;
    width: 100%; 
    vertical-align: middle; 
    overflow: hidden; 
`

const Grid = styled.div`
    position: relative;
    padding-top: 40em;
    padding-bottom: 5%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    width: 70%;

    ${mediaQueries.mobile} {
        padding-top: 20em;
        width: 95%;
    }
`;

export default function Prime(props)
{
    return (
        <Container>
            <Header src={PrimeHeader}/>
            <Bg src={PrimeBg}/>
            <Grid>
                <Card 
                    article_headline={props.headline}
                    article_byline={props.byline}
                    article_image={props.article_image}
                    article_url={props.article_url} /> 
            </Grid>
        </Container>
    )
    
}
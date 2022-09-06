import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import PrimeBg from "../images/prime.svg";
import Card from "./Card";


const Container = styled.div`
    background: url(${PrimeBg}) no-repeat center center;
    background-size: cover;
    max-width: 100vw;
    min-height: 100vh;
    z-index: -1;
`;

const Grid = styled.div`
    padding-top: 40em;
    padding-bottom: 5%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Prime(props)
{
    return (
        <Container>
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
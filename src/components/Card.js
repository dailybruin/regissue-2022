import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Container = styled.div`
    position: relative;
    border: solid black 6px;
    height: 100%;
    box-sizing: border-box;
    ${mediaQueries.mobile} {
        width: 90vw;
    }
`

const Article = styled.div`
    display: none;
    position: absolute;
    
    ${Container}:hover & {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 15;
        border-top: solid black 6px;
        background-color: white;
    }

    ${mediaQueries.mobile} {
        display: inline-block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 15;
        border-top: solid black 6px;
        background-color: white;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: 8;
    object-fit: cover;
    margin: none;
`

const Headline = styled.a`
    display: block;
    font-family: 'Pangolin';
    font-size: 24px;
    line-height: 1em;
    text-align: center;  
    text-decoration: none;
    color: black;
    padding: 0.3em;
    ${mediaQueries.mobile} {
        font-size: 16px;
        padding: 0.2em;
    }
`

const ByLine = styled.div`
    display: block;
    font-family: 'Bangers', cursive;
    font-size: 22px;
    font-weight: bold;
    line-height: 1em;
    text-align: center;
    letter-spacing: 0.1em;
    padding: 0.4em;
    ${mediaQueries.mobile} {
        font-size: 14px;
        padding-top: 0.1em;
        padding-bottom: 0.5em;
    }
`

export default function ArticleCard(props)
{
    return (
        <Container>
            <a href={props.article_url}><Image src={props.article_image}/></a>
            <Article>
                <Headline href={props.article_url}> {props.article_headline} </Headline>
                <ByLine> By {props.article_byline}</ByLine>
            </Article>
        </Container>
    )
}
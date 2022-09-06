import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Image = styled.img`
    display: block;
    width: 303px;
    height: 290px;
    box-sizing: content-box;
    padding: 10px;
    z-index: 12;
    object-fit: cover;
`

const Headline = styled.a`
    display: block;
    font-family: 'Courier Prime', monospace;
    font-size: 18px;
    font-weight: bold;
    line-height: 1em;
    text-align: center;   
    padding-bottom: 1em;
`

const ByLine = styled.div`
    display: block;
    font-size: 18px;
    font-weight: bold;
    line-height: 1em;
    text-align: center;
`

export default function ArticleCard(props)
{
    const Container = styled.div`
        border: solid black 6px;
        display: grid;
        grid-template-rows: 70% 30%;
        height: fit-content;
        ${mediaQueries.mobile} {
            width: 100%;
        }
    `
    return (
        <Container>
            <a href={props.article_url}><Image src={props.article_image}/></a>
            <div>
                <Headline href={props.article_url}> {props.article_headline} </Headline>
                <ByLine> By {props.article_byline}</ByLine>
            </div>
        </Container>
    )
}
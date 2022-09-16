import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Apply from "../images/apply_quote.svg";

const Container = styled.div`
    background-color: #EA4325;
    width: 100%;
`

const Grid = styled.div`
    width: 80%;
    column-count: 2;
    column-gap: 10em;
    margin: auto;
    break-inside: avoid;

    ${mediaQueries.mobile} {
        column-count: 1;
        width: 90%;
        margin: auto;
    }
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
    padding-bottom: 1em;
    color: #F8D84A;
    text-shadow: 4px 6px 0px #000000;
    text-transform: uppercase;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 3px;

    ${mediaQueries.mobile} {
        width: 95%;
        padding-bottom: 0.7em;
    }
`

const Block = styled.div`
    column-fill: auto;
    font-family: 'Pangolin';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 1em;
    text-align: left;
    padding-bottom: 3em;
    break-inside: avoid;

    ${mediaQueries.mobile} {
        font-size: 18px;
    }
`

const SectionName = styled.div`
    text-transform: uppercase;
    font-family: 'Bangers';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;

    ${mediaQueries.mobile} {
        font-size: 30px;
    }
`

const Management = styled.div`
    font-family: 'Pangolin';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 0.8em;
    text-align: center;
    padding-bottom: 2em;

    ${mediaQueries.mobile} {
        font-size: 18px;
        line-height: 1em;
    }
`

export default function About(props)
{
    console.log(props.staff)
    return (
        <Container>
            <SpeechBubble src={Apply}/>
            <Header>Daily Bruin Editorial Staff</Header>
            <Grid>
                {props.staff.map(section => {
                    if (section.type == 'management') {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.eic}</p>
                                <p>{section.value.me}</p>
                                <p>{section.value.dme}</p>
                            </Block>
                        )
                    }
                    if (section.type == 'news' || section.type == "opinion" || section.type == "arts" || section.type == "sports"
                    || section.type == "data" || section.type == "graphics" || section.type == "photo" || section.type == "bruinwalk" 
                    || section.type == "quad" || section.type == "bruinwalk") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.editor}</p>
                                <p>{section.value.assistant_editors}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "design" || section.type == "social_media") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.director}</p>
                                <p>{section.value.assistant_directors}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "illo") {
                        return (
                            <Block>
                                <SectionName>Illustrations and Cartoons</SectionName>
                                <p>{section.value.directors}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "copy") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.chief}</p>
                                <p>{section.value.assistant_chief}</p>
                                <p>{section.value.editors}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "online") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.assistant_editors}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "video") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.producer}</p>
                                <p>{section.value.assistant_producers}</p>
                                <p>{section.value.podcast_producer}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "outreach") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.director}</p>
                                <p>{section.value.assistant_directors}</p>
                                <p>{section.value.alumni_director}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "prime") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.director}</p>
                                <p>{section.value.content_directors}</p>
                                <p>{section.value.art_director}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "enterprise") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.editor}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "advertising") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.manager}</p>
                                <p>{section.value.ad_exec}</p>
                                <p>{section.value.classified_exec}</p>
                                <p>{section.value.oo_traffic}</p>
                                <p>{section.value.print_traffic}</p>
                                <p>{section.value.social_media}</p>
                                <p>{section.value.intern}</p>
                                <p>{section.value.ad_creatives}</p>
                                <p>{section.value.collections}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "mis") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.cto}</p>
                                <p>{section.value.staff}</p>
                            </Block>
                        )
                    }
                    else if (section.type == "advisors") {
                        return (
                            <Block>
                                <SectionName>{section.type}</SectionName>
                                <p>{section.value.editorial}</p>
                                <p>{section.value.director}</p>
                            </Block>
                        )
                    }
                })}
            </Grid>
        </Container>
    )
    
}



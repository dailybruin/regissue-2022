import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import MultimediaHeader from "../images/multimedia.svg";
import DotsLeft from "../images/dots_left.svg";
import DotsRight from "../images/dots_right.svg";
import DotsTop from "../images/dots_top.svg";
import Card from "./Card";
import { Fragment } from "react";

export default function Multimedia(props) {
  const Container = styled.div`
    position: relative;
    background-color: #376BF6;
    max-width: 100vw;
    overflow: hidden;
  `

  const Header = styled.img`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 1em;
    right: 0;
    top: 3em;
    z-index: 5;

    display: inline-block;
    max-width: 100%; 
    vertical-align: middle; 
    overflow: hidden; 
  `

  const HeaderBackground = styled.img`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;

    display: inline-block;
    max-width: 100%; 
    vertical-align: middle; 
    overflow: hidden; 
  `

  const LSide = styled.img`
    position: absolute;
    top: -4em;
    left: 0;
    z-index: 1;
    height: 100%;
    ${mediaQueries.mobile} {
      display: none;
    }
  `

  const RSide = styled.img`
    position: absolute;
    top: -1em;
    right: 0;
    z-index: 1;
    height: 100%;
    ${mediaQueries.mobile} {
      display: none;
    }
  `

  const Grid = styled.div`
    position: relative;
    width: 95%;
    z-index: 10;
    height: fit-content;
    padding-top: 40em;
    padding-bottom: 5%;
    margin: auto;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr 1fr;
    row-gap: 2em;
    column-gap: 2em;
    grid-template-areas: 
      "one two"
      "three two"
      "four five"
      "four six"
      "seven eight";
  
    ${mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin: auto;
      align-items: center;
      padding-top: 21em;
    }

    .article_one {
      grid-area: one;
      background-color: gray;
    }

    .article_two {
      grid-area: two;
      background-color: pink;
    }

    .article_three {
      grid-area: three;
      background-color: blue;
    }

    .article_four {
      grid-area: four;
      background-color: green;
    }

    .article_five {
      grid-area: five;
      background-color: purple;
    }

    .article_six {
      grid-area: six;
      background-color: orange;
    }

    .article_seven{
      grid-area: seven;
      background-color: lightcoral;
    }

    .article_eight{
      grid-area: eight;
      background-color: lightgreen;
    }
  `;
  
  function buildGrid(data) {
    // `map` over the data, and for each object
    return data.map(item => {
      // Create a class name from the number property
      const articleArea = `article_${item.number}`;
  
      // Return a series of divs contained by a fragment. 
      // Need the fragment instead of a container
      // otherwise we end up with columns instead of rows
      return (
        <Fragment>
          <div class={articleArea}>
            <Card
              article_headline={item.headline}
              article_byline={item.byline}
              article_image={item.article_image}
              article_url={item.article_url}
            />
          </div>
        </Fragment>
      );
    });
  }
  console.log(props.topPad)
  return (
    <Container>
      <HeaderBackground src={DotsTop}/>
      <Header src={MultimediaHeader}/>
      <Grid>
        {buildGrid(props.articles)}
      </Grid>
      <LSide src={DotsLeft}/>
      <RSide src={DotsRight}/>
    </Container>
  );
}
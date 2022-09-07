import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import QuadHeader from "../images/quad.svg";
import QuadT from "../images/quad_top.svg";
import QuadB from "../images/quad_bottom.svg";

import Card from "./Card";
import { Fragment } from "react";

export default function Quad(props) {
  const Container = styled.div`
    background-color: #6ADC44;
    max-width: 100vw;
    position: relative;
    overflow: hidden;
  `

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

  const Top = styled.img`
    position: absolute;
    right: 0;
    z-index: 1;

    display: inline-block;
    width: 100%; 
    vertical-align: middle; 
    overflow: hidden; 
  `

  const Bottom = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;

    display: inline-block;
    width: 100%; 
    vertical-align: middle; 
    overflow: hidden; 
  `

  const Grid = styled.div`
    position: relative;
    z-index: 10;
    width: 95%;
    height: fit-content;
    padding-top: 32em;
    padding-bottom: 5%;
    margin: auto;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 1fr;
    row-gap: 2em;
    column-gap: 2em;
    grid-template-areas: 
      "one two"
      "three two"
      "four five";
  
    ${mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin: auto;
      align-items: center;
      padding-top: 20em;
    }

    .article_one {
      grid-area: one;
    }

    .article_two {
      grid-area: two;
    }

    .article_three {
      grid-area: three;
    }

    .article_four {
      grid-area: four;
    }

    .article_five {
      grid-area: five;
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
      <Header src={QuadHeader} />
      <Top src={QuadT} />
      <Grid>
        {buildGrid(props.articles)}
      </Grid>
      <Bottom src={QuadB} />
    </Container>
  );
}
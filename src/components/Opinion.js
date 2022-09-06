import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import OpinionBg from "../images/opinion.svg";

import Card from "./Card";
import { Fragment } from "react";

export default function Opinion(props) {
  const Container = styled.div`
    background: url(${OpinionBg}) no-repeat center center;
    background-size: cover;
    max-width: 100vw;
  `

  const Grid = styled.div`
    width: 95%;
    height: fit-content;
    padding-top: 40em;
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
      "three four";
  
    ${mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin: auto;
      align-items: center;
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
      <Grid>
        {buildGrid(props.articles)}
      </Grid>
    </Container>
  );
}
import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import Card from "./Card";
import { Fragment } from "react";

export default function News_Sports(props) {
  const Container = styled.div`
    background: url(${props.background}) no-repeat center;
    background-size: cover;
    max-width: 100vw;
  `

  const Grid = styled.div`
    max-width: 95%;
    height: fit-content;
    padding-top: ${props.topPad ? '40em' : '30em'};
    padding-bottom: 5%;
    margin: auto;
    border: red 3px;
    display: grid;
    grid-template-rows: 0.5fr 0.5fr 1fr 0.5fr 0.5fr 1fr;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 2em;
    column-gap: 2em;
    grid-template-areas: 
      "one one one two two two"
      "one one one three three three"
      "four four five five six six"
      "seven seven seven eight eight eight"
      "nine nine nine eight eight eight"
      "ten ten eleven eleven twelve twelve";
  
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

    .article_nine{
      grid-area: nine;
      background-color: lightskyblue;
    }

    .article_ten{
      grid-area: ten;
      background-color: olive;
    }

    .article_eleven{
      grid-area: eleven;
      background-color: aquamarine;
    }

    .article_twelve{
      grid-area: twelve;
      background-color: blueviolet;
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
import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import { HashLink } from "react-router-hash-link";

const StickyContainer = styled.div`
  position: sticky;
  padding-top: 50px;
  top: 0;
  z-index: 100;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 1em;
  justify-content: center;
  width: fit-content;
  max-width: 90vw;
`;

const Page = styled.div`
  font-family: 'Pangolin';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5em;
  color: black;
  text-align: center;
  text-transform: uppercase;
  border: 3px solid black;
  background-color: #F8D84A;
  box-sizing: border-box;
  padding: 2px 10px;

  ${mediaQueries.mobile} {
      font-size: 12px;
      line-height: 1.2em;
  }
`;

export default function NavBar(props) {
  return (
    <StickyContainer>
      <Row>
        <HashLink
          to="#interactive"
          style={{ textDecoration: "none" }}
        >
          <Page style={{ backgroundColor: "#EA4325", color: "white" }}>Interactive</Page>
        </HashLink>

        <HashLink to="#news" style={{ textDecoration: "none" }}>
          <Page>News</Page>
        </HashLink>

        <HashLink to="#sports" style={{ textDecoration: "none" }}>
          <Page>Sports</Page>
        </HashLink>

        <HashLink to="#arts" style={{ textDecoration: "none" }}>
          <Page>Arts</Page>
        </HashLink>

        <HashLink to="#opinion" style={{ textDecoration: "none" }}>
          <Page>Opinion</Page>
        </HashLink>

        <HashLink to="#the-quad" style={{ textDecoration: "none" }}>
          <Page>The Quad</Page>
        </HashLink>

        <HashLink to="#prime" style={{ textDecoration: "none" }}>
          <Page>Prime</Page>
        </HashLink>

        <HashLink to="#multimedia" style={{ textDecoration: "none" }}>
          <Page>Multimedia</Page>
        </HashLink>

        <HashLink to="#about" style={{ textDecoration: "none" }}>
          <Page>About</Page>
        </HashLink>
      </Row>
    </StickyContainer>
  );
}
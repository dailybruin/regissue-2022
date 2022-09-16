import React, { useState, useEffect }from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import { HashLink } from "react-router-hash-link";

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  
  .navbar{
    background-color: transparent;
    box-sizing: border-box;
    padding-top: 50px;
  }

  .navbarChange{
    background-color: transparent;
    box-sizing: border-box;
    padding-top: 50px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 1em;
  justify-content: center;
  width: fit-content;
  max-width: 90vw;

  ${mediaQueries.mobile} {
      justify-content: left;
  }
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
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () =>{
    if (window.innerWidth < 720 && window.scrollY >= 320)
    {
      setColorchange(true);
    }
    else if(window.scrollY >= 1200){
       setColorchange(true);
    }
    else{
       setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <StickyContainer style = {{zIndex: 1011}}>
    <div className={colorChange ? 'navbarChange' : 'navbar'}>
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
    </div>
    </StickyContainer>
  );
}
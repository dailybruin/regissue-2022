import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import './App.css';

import NavBar from "./components/NavBar";
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import EditorLetter from "./components/EditorLetter";
import News_Sports from "./components/News_Sports";
import Arts from "./components/Arts";
import Opinion from "./components/Opinion";
import Quad from "./components/Quad";
import Prime from "./components/Prime";
import Multimedia from "./components/Multimedia";
import About from "./components/About";

import News from "./images/news.svg";
import Sports from "./images/sports.svg"

// TODO: fix backgrounds, set up navbar (make sure landing is rendered first, look at grad issue)
// TODO: set up article card, do ABOUT page

const AppContent = () => {
  const [ data, setData ] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);
  
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.regissue"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  data && console.log(data.prime[0])

  return (
    <>
      {data && (
        <div className="App">
            <Header/>
            <Landing image={data.landing_image} credits={data.landing_credits} setLandingDisplayed={setLandingDisplayed}/>
            {landingDisplayed && (
              <>
                <NavBar style={{ margin: "auto" }} />
                <EditorLetter letter = {data.letter}/>
                <div id="news" >
                  <News_Sports sports={false} header={News} articles={data.news} />
                </div>
                <div id="sports">
                  <News_Sports id="sports" sports={true} header={Sports} articles={data.sports}/>
                </div>
                <div id="arts">
                  <Arts articles={data.arts}/>
                </div>
                <div id="opinion"> 
                  <Opinion articles={data.opinion}/>
                </div>
                <div id="the-quad" >
                  <Quad articles={data.quad}/>
                </div>
                <div id="prime">
                  <Prime articles={data.prime[0]}/>
                </div>
                <div id="multimedia">
                  <Multimedia articles={data.multimedia}/>
                </div>
                <div id="about">
                  <About />
                </div>
                <Footer/>
              </>
            )}
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;

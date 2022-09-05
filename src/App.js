import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import NavBar from "./components/NavBar";
import EditorLetter from "./components/EditorLetter";
import News_Sports from "./components/News_Sports";

import NewsBackground from "./images/news.svg";
import SportsBackground from "./images/sports.svg"

const AppContent = () => {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.regissue"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    <>
      {data && (
        <div className="App">
            <Header/>
            <Landing image = {data.landing_image} credits = {data.landing_credits}/>
            <NavBar style={{ margin: "auto" }} />
            <EditorLetter letter = {data.letter}/>
            <News_Sports id="news" topPad={false} articles={data.news} background={NewsBackground} />
            <News_Sports id="sports" topPad={true} articles={data.sports} background={SportsBackground} />
            <Footer/>
          
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

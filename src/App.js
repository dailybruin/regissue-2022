import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import EditorLetter from "./components/EditorLetter";

function App() {
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
            <EditorLetter letter = {data.letter}/>
            <Footer/>
          
        </div>
      )}
    </>
  );
}

export default App;

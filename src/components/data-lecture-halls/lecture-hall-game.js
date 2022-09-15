// import React from "react";
import React, { StrictMode, useEffect, useRef, useState } from 'react'
import { Map, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./map.css"
import L from "leaflet";
import { config } from "./index";
import Pin from "./blue-pin-1.svg";
import Quiz from "./quiz.js";
import SortableList, { SortableItem } from 'react-easy-sort';
import {arrayMoveImmutable} from 'array-move';
// import "./quiz.css";

export const pin = new L.Icon({
  iconUrl: Pin,
  iconSize: [25, 25],
});
const MyMap = () => {
  const [lat, setLat] = useState(34.07162238659867);
  const [long, setLong] = useState(-118.44415583155065);
  const [zoom, setZoom] = useState(16);
  const [correct, setCorrect] = useState(new Array(10).fill(false));
  const [items, setItems] = React.useState([ 
    'Fowler Museum A103B',
    'Dodd Hall 147',
    'Moore Hall 100',
    'Kaplan Hall A51',
    'La Kretz Hall 110',
    'Young Hall CS50',
    'Rolfe Hall 1200',
    'Franz Hall 1178',
    'Broad Art Center 2160E',
    'Haines Hall 39',
  ]);


  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex))
  }

  function checkAnswer() {
    const initialValue = 0;
    
    let correct_answers = [];
      config.locations.map((loc, index) =>{
      correct_answers.push(items[index]=== loc.name);
      })

    let sum = correct_answers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
      );
    console.log(sum)
    setCorrect(correct_answers);
    console.log(correct)

    if (sum === 10) { 
      alert("Congratulations! You correctly ordered all the lecture halls. Use the map to learn more about each lecture hall location.");
    
    } else {
      alert(`You have gotten ${sum} out of 10 answers correct. The locations you have correct will be shown on the map.`);
    }
  }

 function showAnswers() {
  const correctAnswers = [
      'Moore Hall 100',
      'Haines Hall 39',
      'Broad Art Center 2160E',
      'Dodd Hall 147',
      'La Kretz Hall 110',
      'Young Hall CS50',
      'Fowler Museum A103B',
      'Franz Hall 1178',
      'Rolfe Hall 1200',
      'Kaplan Hall A51',
    ];
  setItems(correctAnswers)
  setCorrect(new Array(10).fill(true))
 } 
    return (
      <div id = "interactive-container">
        <h1 id = "header">Quiz: UCLA’s Top 10 Largest Lecture Halls</h1>
        <p id="trivia-text">
          Drag and drop the lecture halls below into the correct order by size. 
          The largest should be at the top. When you have placed all the lecture halls check your answers. 
          A map with the locations of the buildings you've ordered correctly will display.  
        </p>
            <div id = "quiz-container">
              <>
                <SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
                  {items.map((item, index) => (
                    <SortableItem key={item}>
                      <div className="item">{item}</div>
                    </SortableItem>
                  ))}
                </SortableList>
                <button onClick={checkAnswer} variant="check">Check your answers!</button>    
                <button onClick={showAnswers} variant="show">Show answers</button>
                </>
            </div>

            

      <div id = "map">
        <Map 
          center={[lat, long]} 
          zoom= {zoom}
          style={{ width: '100%', height: '100%'}}
          minZoom={15}
          maxBounds={[[34.08125, -118.45774], [34.062, -118.4362]]}
        >
          <TileLayer
            attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {config.locations.map((loc, index) => { 
            return (<Marker
                key={loc.name}
                position={[loc.lat, loc.long]}
                opacity = { correct[index]? 1: 0}
                icon={pin}
            >
              <Popup>
                <p className = "pin-header">{loc.name}</p>
                <p>{loc.text}</p>
                </Popup>
              </Marker>);
        })}
        </Map>
      </div>
      </div>
    )
  }


export default MyMap;
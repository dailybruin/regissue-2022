// import React from "react";
import React, { StrictMode, useEffect, useRef, useState } from 'react'
import { Map, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./map.css"
import L from "leaflet";
import { config } from "./index";
import Pin from "./blue-pin-1.svg";
import Quiz from "./quiz.js";

export const pin = new L.Icon({
  iconUrl: Pin,
  iconSize: [25, 25],
});
const MyMap = () => {
  const [lat, setLat] = useState(34.07162238659867);
  const [long, setLong] = useState(-118.44415583155065);
  const [zoom, setZoom] = useState(16);
  const [correct, setCorrect] = useState(new Array(10).fill(false));

    return (
      <div id = "interactive-container">
        <h1 id = "header">Quiz: UCLA’s Top 10 Largest Lecture Halls</h1>
        <p id="trivia-text">
                  Drag and drop the lecture halls below into the correct order by size. 
                  The largest should be at the top. When you have placed all the lecture halls, 
                  a map with the locations of the buildings for the top 10 largest ones will 
                  be displayed. 
              </p>
            <div id = "quiz-container">
              <Quiz
                correct = {setCorrect}/>
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
            {console.log(correct)}
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
      <div>text</div>
      </div>
      </div>
    )
  }


export default MyMap;
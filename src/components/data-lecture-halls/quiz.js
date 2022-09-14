import React from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import {arrayMoveImmutable} from 'array-move';
import "./quiz.css";
import { config } from "./index";

const Quiz = () => {
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
	let correct = []
    config.locations.map((loc, index) =>{
		correct.push(items[index]=== loc.name);
	})

	if (JSON.stringify(correctAnswers) == JSON.stringify(items)) { 
      alert("Correct :)");
	  
    } else {
      alert("Try Again...");
    }
  }

// will implement soon!  - priya 
 function showAnswers() {
   alert("This isn't working yet :( Come back later..");
   return false;
 } 

  return (
    <>
    <SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
      {items.map((item) => (
        <SortableItem key={item}>
          <div className="item">{item}</div>
        </SortableItem>
      ))}
    </SortableList>
    <button onClick={checkAnswer} variant="check">Check your answers!</button>    
    <button onClick={showAnswers} variant="show">Show answers</button>
    </>
  )
}

export default Quiz 

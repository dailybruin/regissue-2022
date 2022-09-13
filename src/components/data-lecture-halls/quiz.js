import React from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import {arrayMoveImmutable} from 'array-move';

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
    const [correctAnswers] = [
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
// this is just here so it automatically is pushed as correct
// correct so we can connect the map showing up when the button alerts 'correct'
// i will fix this part asap sorryyy
    if (2 === 2) { 
      alert("Correct :)");
    } else {
      alert("Try Again...");
      console.log(correctAnswers)
    }
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
    <button onClick={checkAnswer}></button>    
    </>
  )
}

export default Quiz 

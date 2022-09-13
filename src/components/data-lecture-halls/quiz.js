import React, { Component } from "react";
import Sortable from "react-sortablejs";


function Quiz()
 { const [lectureHalls, setBlocks] = usestate ([
		{
			id: 1,
			text: 'Moore Hall 100',
		  },
		  {
			id: 2,
			text: 'Haines Hall 39',
		  },
		  {
			id: 3,
			text: 'Broad Art Center 2160E',
		  },
		  {
			id: 4,
			text: 'Dodd Hall 147',
		  },
		  {
			id: 5,
			text: 'La Kretz Hall 110',
		  },
		  {
			id: 6,
			text: 'Young Hall CS50',
		  },
		  {
			id: 7,
			text: 'Fowler Museum A103B',
		  },
		  {
			id: 7,
			text: 'Franz Hall 1178',
		  },
		  {
			id: 7,
			text: 'Rolfe Hall 1200',
		  },
		  {
			id: 7,
			text: 'Kaplan Hall A51',
		  },
		]);

		function checkAnswer() {
			const li = document.querySelectorAll("#lectureHalls li");
			let answers = new Array();
			li.forEach(function (text) {
			  answers.push(text.innerHTML);
			});
			if (JSON.stringify(correctAnswers) === JSON.stringify(answers)) {
			  alert("Correct! ");
			} else {
			  alert("Not quite...");
			}
		  };
		  

	return (
		<div className="trivia-container">
            <h1 className = "header">Quiz: UCLA’s Top 10 Largest Lecture Halls</h1>
            <h1 className="trivia-text">
                        Drag and drop the lecture halls below into the correct order by size. 
                        The largest should be at the top. When you have placed all the lecture halls, 
                        a map with the locations of the buildings for the top 10 largest ones will 
                        be displayed. 
            </h1>
		  	<ReactSortable list={lectureHalls} setList={setBlocks} >
			{lectureHalls.map((block, blockIndex) => (
			  <BlockWrapper
				key={block.id}
				block={block}
				blockIndex={[blockIndex]}
				setBlocks={setBlocks}
			  />
			))}
		  </ReactSortable>
		  <button onclick="checkAnswer()">Check your answers!</button>
		</div>
	  );

}

export default Quiz;




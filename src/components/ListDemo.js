import React from "react";
import Card from "./Card"

const numbers = [1, 2, 3, 4, 5, 6];

// Hardoced below, just for reference
// export const listItems = [
//   <li>1</li>,
//   <li>2</li>,
//   <li>3</li>,
//   <li>4</li>,
//   <li>5</li>,
// ];

const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

export const listItems = numbers.map((oneNumber, index) => <li key={index}>{oneNumber}</li>)

export const MoviesList = ( ) =>{
  return(
    <ul>
      { movies.map((oneMovie,index) => 
        <Card key={index} title={oneMovie.title} director={oneMovie.director} />) 
      }
    </ul>
  )
}
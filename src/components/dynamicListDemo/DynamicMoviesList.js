import React, { Component } from "react";
import ImprovedCard from './ImprovedCard'

class DynamicMoviesList extends Component{
  constructor(){
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola" },
        { title: "Star Wars", director: "Rian Johnson" },
        { title: "The Shawshank Redemption", director: "Frank Darabont" }
      ]
    }
  }

  deleteMovieHandler = (movieIndex) =>{
    
  }

  render(){
    console.log(this.state.movies);
    return(
      <div>
        {
            this.state.movies.map((oneMovie, index) => {
              return <ImprovedCard key={index} {...oneMovie}/>
            })
        }
      </div>
    )
  }
}

export default DynamicMoviesList;
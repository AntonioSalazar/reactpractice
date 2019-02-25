import React, { Component } from "react";

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

  render(){
    console.log(this.state.movies);
    return(
      <div>
        {
            this.state.movies.map((oneMovie, index) => {

            })
        }
      </div>
    )
  }
}

export default DynamicMoviesList;
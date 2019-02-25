import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import { listItems, MoviesList } from "./components/ListDemo"
import DynamycMoviesList from "./components/dynamicListDemo/DynamicMoviesList"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ul className="list-style">{ listItems }</ul>
        <div>
          <MoviesList />
        </div>
          <hr/>
          <DynamycMoviesList />
      </div>
    );
  }
}

export default App;

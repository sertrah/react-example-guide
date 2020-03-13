import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-flexbox-grid';

import Cards from './containers/cards';
import SearchBar from './containers/searchBar';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SearchBar />
        <Cards />
      </>
    );
  }
}

export default App;

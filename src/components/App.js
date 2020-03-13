import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-flexbox-grid';

import Cards from './containers/cards';
import CustomInput from './elements/custom-Input/input';
import CustomBtn from './elements/button/button';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <>
        <Grid fluid>
          <Row>
            <CustomInput />
            <CustomBtn />
          </Row>
        </Grid>
        <Cards />
      </>
    );
  }
}

export default App;

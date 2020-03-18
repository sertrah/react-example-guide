import React from 'react';
import {
    compose
  } from 'recompose';
import './button.css';


/*
CustomBtn.contextType = ThemeContext;
export default CustomBtn; */

const CustomBtn = ({handleButtonAction}) => {
  return (
    <React.Fragment>
    <a className="btn-gradient red mini"  onClick={handleButtonAction} >Buscar</a>
    </React.Fragment>

)
}
  
  export default compose()(CustomBtn);
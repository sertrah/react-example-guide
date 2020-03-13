import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import './input.css';



const CustomInput = ({handleInputValue}) => {
  return (
  <div className="form__group field">
    <input type="input" className="form__field"
      onChange={handleInputValue}

      placeholder="Name" name="name" id='name' required />
    <label htmlFor="name" className="form__label">Name</label>
  </div>
)}

export default compose()(CustomInput);
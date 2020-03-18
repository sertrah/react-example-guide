import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import CustomInput from './../../elements/custom-Input/input';
import CustomBtn from './../../elements/button/button';
import './searchBar.css';

import {
    compose,
    withState,
    withHandlers,
} from 'recompose';

function searchBar({ actionButton, handleInputValue, searchValue }) {
    return (
        <Grid fluid className="searchbar_container">
            <Row center="xs">
                <CustomInput handleInputValue={ handleInputValue.bind(this)} />
                <CustomBtn handleButtonAction={ ()=> actionButton(searchValue) } />
            </Row>
        </Grid>
    );
}

const enhance = compose(
    withState('searchValue', 'setSearchValue', null),
    withHandlers({
        handleInputValue: props => ({target}) => {
            props.setSearchValue(target.value);
        }
    })
)

export default enhance(searchBar); 

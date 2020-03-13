import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CustomInput from './../../elements/custom-Input/input';
import CustomBtn from './../../elements/button/button';

import {
    compose,
    withState,
    withHandlers,
} from 'recompose';


function searchBar({ searchValue, handleInputValue }) {
    return (
        <Grid fluid>
            <Row>
                <CustomInput handleInputValue={ handleInputValue.bind(this)} />
                <CustomBtn />
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

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './character.css';
import { connect, useDispatch } from "react-redux";
import { constants } from './../../../types/character';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {
  useParams
} from "react-router-dom";
import { getCharacter } from '../../../selectors/character';

function CharacterPage({ character, getCharacterBySearch, resetState }) {
  let { id } = useParams();
  useFetching(() => getCharacterBySearch(id), () => resetState());
  console.log(character['data']);
  return (
    character['data'] ? <div className="character-container" >
      <div className="avatar-contaienr" >
        <img className="" alt="character" src={`${character.data.thumbnail.path}/portrait_incredible.jpg`} />
      </div>
      <div className="descrip-container">
        <h1>{character.data.name} </h1>
        <h2>about</h2>
        <p>{character.data.description || 'confidential information'}</p>
        <a className="link_hehe" href="{character.data.urls[0].url}">More info...</a>
        <div className="related-container">
          <Grid fluid className="searchbar_container">
            <Row center="xs">
              <Col xs={6} md={4} sm={4}>
                <h2>Comics ({character.data.comics.available}) </h2>
              </Col>
              <Col xs={6} md={4} sm={4}>
                <h2>Series ({character.data.series.available}) </h2>
              </Col>
              <Col xs={6} md={4} sm={4}>
                <h2>stories ({character.data.stories.available}) </h2>
              </Col>
              <Col xs={6} md={4} sm={4}>
                <h2>events ({character.data.events.available}) </h2>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>

    </div> : <h1> upsidupsi.... no se ha podido cargar la info mi fai</h1>
  );
}

const useFetching = (fetchActionCharacter, resetState) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActionCharacter());
    return () => { // When the component will dead
      dispatch(resetState());
    }
  }, [])
}

const mapStateToProps = (state) => {
  return { character: getCharacter(state) }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacterBySearch: characerID => dispatch({ type: constants.FETCH_CHARACTER_BY_ID, characerID }),
    resetState: () => dispatch({ type: constants.RESET_CHARACTER })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);


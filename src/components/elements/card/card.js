import React from 'react';
import { Col } from 'react-flexbox-grid';
import './card.css';

import {
  compose,
  withState,
  withHandlers,
} from 'recompose';

import {
  Link
} from "react-router-dom";

function Card({ focused,  handleClick, characterInfo }) {
  return (
    <Col xs={12} md={4} sm={6}>
      <article className="material-card Red">
        <h2>
          <span>{characterInfo.name}</span>
          <strong>
            <i className="fa fa-fw fa-star"></i>ID:
            {characterInfo.id}
          </strong>
        </h2>
        <div className="mc-content">
          <div className="img-container">
            <a className="c-preview">
              <div className="c-preview__img" style={{ background: `#000 url(${characterInfo.thumbnail.path}/portrait_incredible.jpg) no-repeat` }}></div>
            </a>
          </div>
        </div>
        <Link className="mc-btn-action" to={`/character/${characterInfo.id}`}>⮕</Link>
      </article>
    </Col>
  );
}

const enhance = compose(
  withState('focused', 'setFocused', false),
  withHandlers({
    handleClick: props => event => {
      props.setFocused(!props.focused)
    },
  })
)

export default enhance(Card); 

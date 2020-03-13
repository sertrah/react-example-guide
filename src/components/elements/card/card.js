import React from 'react';
import { Col } from 'react-flexbox-grid';
import './card.css';

import {
  compose,
  withState,
  withHandlers,
} from 'recompose';


function Card({focused, handleClick, characterInfo}) {
  return (
    <Col xs={12} md={4} sm={6}>
      <article className="material-card Red">
        <h2>
          <span>{characterInfo.name}</span>
          <strong>
            <i className="fa fa-fw fa-star"></i>
            The Deer Hunter
                    </strong>
        </h2>
        <div className="mc-content">
          <div className="img-container">
            <img className=""  src={`${characterInfo.thumbnail.path}/portrait_incredible.jpg`} />
          </div>
        </div>
        <a className="mc-btn-action">
          <i className="fa fa-bars"></i>
        </a>
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

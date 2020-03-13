import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import './input.css';


const withOwnerInState = withState('owner', 'setOwner', '');
const withRepoInState = withState('repo', 'setRepo', '');
const withCommitsInState = withState('commitsNumber', 'setCommitsNumber', 0);

const withExtendedHandlers = withHandlers({
  handleOwnerInputValue: ({
    owner,
    setOwner,
  }) => ({ target }) => {
    setOwner(target.value);
  },
  handleRepoInputValue: ({
    repo,
    setRepo,
  }) => ({ target }) => {
    setRepo(target.value);
  },
  handleCommitsInputValue: ({
    commitsNumber,
    setCommitsNumber,
  }) => ({ target }) => {
    setCommitsNumber(target.value);
  },
  handleKeyPress: ({
    owner,
    repo,
    commitsNumber,
  }) => (event) => {
    if (event.key == 'Enter') {
      console.log(event);
    }
  },
});

const CustomInput = ({
  owner,
  repo,
  commitsNumber,
  handleOwnerInputValue,
  handleRepoInputValue,
  handleCommitsInputValue,
  handleKeyPress,
}) => (
    <div className="form__group field">
      <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
      <label htmlFor="name" className="form__label">Name</label>
    </div>
  )

export default compose(
  withCommitsInState,
  withOwnerInState,
  withRepoInState,
  withExtendedHandlers,
)(CustomInput);
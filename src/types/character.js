/**
 * Action types
 */
const FETCH_CHARACTER_BY_ID = 'FETCH_CHARACTER_BY_ID';
const FETCH_CHARACTER_BY_ID_SUCCESS = 'FETCH_CHARACTER_BY_ID_SUCCESS';
const FETCH_CHARACTER_BY_ID_ERROR = 'FETCH_CHARACTER_BY_ID_ERROR';
const RESET_CHARACTER = 'RESET_CHARACTER';


export const constants = {
  FETCH_CHARACTER_BY_ID,
  FETCH_CHARACTER_BY_ID_SUCCESS,
  FETCH_CHARACTER_BY_ID_ERROR,
  RESET_CHARACTER,
};


function fetchCharacterByID(character) {
  return {
    type: FETCH_CHARACTER_BY_ID_SUCCESS,
    payload: character
  }
}

export const characterActions = { fetchCharacterByID }
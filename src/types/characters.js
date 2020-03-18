/**
 * Action types
 */
const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';
const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';
const SEARCH_CHARACTERS_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
const SEARCH_CHARACTERS_ERROR = 'SEARCH_CHARACTERS_ERROR';


export const constants = {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  SEARCH_CHARACTERS,
  SEARCH_CHARACTERS_SUCCESS,
  SEARCH_CHARACTERS_ERROR
};


function searchCharacter(characters) {
  return {
    type: SEARCH_CHARACTERS_SUCCESS,
    payload: characters
  }
}

function fetchCharacters(characters) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
  }
}

export const characterActions = { searchCharacter, fetchCharacters }
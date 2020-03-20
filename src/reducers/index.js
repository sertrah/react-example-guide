import { combineReducers } from 'redux';
import * as fromCharacters from './characters';
import * as fromCharacter from './character';
/* import { routerReducer } from 'react-router-redux';
 import { createSelector } from 'reselect'
*/

export default combineReducers({
  characters: fromCharacters.reducer,
  character: fromCharacter.reducer,
});


/**
 * selectors
 
export const getQuotes = state => state.quotes;
export const getQuotesArray = createSelector(getQuotes, fromQuotes.getQuotesArray);*/

/* import { createSelector } from 'reselect'
 */
import { constants } from './../types/character';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_CHARACTER_BY_ID: {
      return { ...state, isLoading: true };
    }
    case constants.FETCH_CHARACTER_BY_ID_SUCCESS: {
      return { ...state, data: action.payload[0], error: null, isLoading: false };
    }

    case constants.FETCH_CHARACTER_BY_ID_ERROR: {
      return { ...state, error: "ERRORCITO", isLoading: false };
    }
    case constants.RESET_CHARACTER: {
      return initialState;
    }
    default:
      return state;
  }
}

/**
 * Selectors
       const entities = Object.assign({}, state.entities, {[quote._id]: quote});


const getIds = state => state.ids;
const getEntities = state => state.entities;
export const getQuotesArray = createSelector([getIds, getEntities], (ids, entities) => ids.map(id => entities[id]));
*/
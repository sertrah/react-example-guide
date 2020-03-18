
/* import { createSelector } from 'reselect'
 */
import { constants } from './../types/characters';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_CHARACTERS: {
      return { ...state, isLoading: true };
    }
    case constants.FETCH_CHARACTERS_SUCCESS: {
      return { ...state, data: action.payload, error: null, isLoading: false };
    }

    case constants.FETCH_CHARACTERS_ERROR: {
      return { ...state, error: "ERRORCITO", isLoading: false };
    }

    case constants.SEARCH_CHARACTERS: {
      return { ...state, isLoading: true };
    }
    case constants.SEARCH_CHARACTERS_SUCCESS: {
      return { ...state, data: action.payload, error: null, isLoading: false };
    }

    case constants.SEARCH_CHARACTERS_ERROR: {
      return { ...state, error: "ERRORCITO", isLoading: false };
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
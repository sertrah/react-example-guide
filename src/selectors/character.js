import { createSelector } from 'reselect'

const getCharactersFromState = state => state.characters
const getCharacterFromState = state => state.character

export const getCharacterList = createSelector(
  [getCharactersFromState],
  (characters) => {
    return characters;
  }
)

export const getCharacter = createSelector(
  [getCharacterFromState],
  (character) => {
    return character;
  }
)
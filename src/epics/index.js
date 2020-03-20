import { combineEpics } from "redux-observable";

import { fetchCharacters, searchCharacter } from "./characters";
import { searchCharacterByID } from "./character";

const epics = combineEpics(
    fetchCharacters,
    searchCharacter,
    searchCharacterByID
);

export default epics;
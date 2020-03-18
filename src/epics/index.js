import { combineEpics } from "redux-observable";

import {fetchCharacters,searchCharacter} from "./characters";

const epics = combineEpics(
    fetchCharacters,
    searchCharacter
);

export default epics;
import { fromFetch } from 'rxjs/fetch';
import { constants, characterActions } from '../types/character';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';


export const searchCharacterByID = (action$) =>
  action$.pipe(
    ofType(constants.FETCH_CHARACTER_BY_ID),
    tap(console.log),
    map((payload) => payload.characerID),
    switchMap((characerID) =>
      fromFetch(`${process.env.REACT_APP_MARVEL_ENDPOINT}/${characerID}?apikey=${process.env.REACT_APP_MARVEL_API_KEY}`).pipe(
        switchMap(ajaxRes => ajaxRes.json()),
        map((x) => x.data.results),
        map(characterActions.fetchCharacterByID),
        catchError( () => of({
          type: constants.FETCH_CHARACTER_BY_ID_ERROR,
          payload: "error.xhr.response"
        }))
      )
    )
  );

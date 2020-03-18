import { fromFetch } from 'rxjs/fetch';
import { constants, characterActions } from '../types/characters';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';


export const fetchCharacters = (action$) =>
  action$
    .pipe(
      ofType(constants.FETCH_CHARACTERS),
      tap(console.log)
      , switchMap(() =>
        fromFetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=b29f36da9c918420ce72c408fef392a7`).pipe(
          switchMap(ajaxRes => ajaxRes.json()),
          map((x) => x.data.results),
          map(characterActions.fetchCharacters),
          catchError(error => of({
            type: constants.FETCH_CHARACTERS_ERROR,
            payload: "error.xhr.response"
          }))
        )
      )
    )
  ;

export const searchCharacter = (action$) =>
  action$.pipe(
    ofType(constants.SEARCH_CHARACTERS),
    tap(console.log),
    map((payload) => payload.searchValue),
    switchMap((searchValue) =>
      fromFetch(`https://gateway.marvel.com:443/v1/public/characters/${searchValue}?apikey=b29f36da9c918420ce72c408fef392a7`).pipe(
        switchMap(ajaxRes => ajaxRes.json()),
        map((x) => x.data.results),
        map(characterActions.searchCharacter),
        catchError(error => of({
          type: constants.SEARCH_CHARACTERS_ERROR,
          payload: "error.xhr.response"
        }))
      )
    )
  );

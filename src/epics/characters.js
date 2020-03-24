import { fromFetch } from 'rxjs/fetch';
import { constants, charactersActions } from '../types/characters';
import { catchError, switchMap, map, tap, shareReplay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { showLoading } from './../utils/shared-service';


let characterCache$ = null;

function getCharacters() {
  if (!characterCache$) {
    characterCache$ = requestCharacters().pipe(
      shareReplay(1)
    )
  }
  return characterCache$
}

function requestCharacters() {
  return fromFetch(`${process.env.REACT_APP_MARVEL_ENDPOINT}?apikey=${process.env.REACT_APP_MARVEL_API_KEY}`).pipe(
    switchMap(ajaxRes => ajaxRes.json()),
    map((x) => x.data.results)
  );
}

export const fetchCharacters = (action$) =>
  action$
    .pipe(
      ofType(constants.FETCH_CHARACTERS),
      tap(()=> showLoading (true))
      , switchMap(() =>
        getCharacters().pipe(
          map(charactersActions.fetchCharacters),
          catchError(() => of({
            type: constants.FETCH_CHARACTERS_ERROR,
            payload: "error.xhr.response"
          })),
          tap(()=> showLoading (false))
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
      fromFetch(`${process.env.REACT_APP_MARVEL_ENDPOINT}?nameStartsWith=${searchValue}&limit=10&offset=0&apikey=${process.env.REACT_APP_MARVEL_API_KEY}`).pipe(
        switchMap(ajaxRes => ajaxRes.json()),
        map((x) => x.data.results),
        map(charactersActions.searchCharacter),
        catchError(() => of({
          type: constants.SEARCH_CHARACTERS_ERROR,
          payload: "error.xhr.response"
        }))
      )
    )
  );

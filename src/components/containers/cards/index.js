import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import Card from './../../elements/card/card';

import { componentFromStreamWithConfig } from 'recompose';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const componentFromStream = componentFromStreamWithConfig({
    fromESObservable: from,
    toESObservable: stream => stream
});


export default componentFromStream(props$ => {
    console.log('props$', props$);
  /*   const request$ = fromFetch('https://gateway.marvel.com:443/v1/public/characters?apikey=b29f36da9c918420ce72c408fef392a7');
    return request$.pipe(
        switchMap((res) => res.json()),
        map((x) => x.data.results), */

    return props$.pipe(
        tap(console.log),
        map((characters) => characters.characters["data"]),
        map(x => {
            console.log("[3]", x);
            return (
                <Grid fluid>
                    <Row>
                      { x ? x.map((data, index) => (
                            <Card
                                key={index}
                                characterInfo={data}
                            />
                        )) :  <p>no data</p>}
                    </Row>
                </Grid>
            )
        })
    )
})


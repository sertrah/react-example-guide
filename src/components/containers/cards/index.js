import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import Card from './../../elements/card/card';

import { componentFromStreamWithConfig } from 'recompose';
import { from } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';


const componentFromStream = componentFromStreamWithConfig({
    fromESObservable: from,
    toESObservable: stream => stream
});


export default componentFromStream(props$ => {

    const request$ = fromFetch('https://gateway.marvel.com:443/v1/public/characters?apikey=b29f36da9c918420ce72c408fef392a7');

    return request$.pipe(
        switchMap((res) => res.json()),
        map((x) => x.data.results),
        map(x => (
            <Grid fluid>
                <Row>
                    {x.map((data, index) => (
                        <Card
                            key={index}
                            characterInfo={data}
                        />
                    ))}
                </Row>
            </Grid>
        ))
    )
})


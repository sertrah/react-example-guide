import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import Card from './../../elements/card/card';

import { componentFromStreamWithConfig } from 'recompose';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


const componentFromStream = componentFromStreamWithConfig({
    fromESObservable: from,
    toESObservable: stream => stream
});


export default componentFromStream(props$ => {
    return props$.pipe(
        map((characters) => characters.characters["data"]),
        map(x => {
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


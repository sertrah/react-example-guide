This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

the purpose with this project is to use the libraries that are used in the industry and with the best practices to serve as a guide for a real project

### Getting started

    ## Libs

    "react": "^16.13.0",
    "react-dom": "^16.13.0",
    "react-flexbox-grid": "^2.1.2",
    "react-intl": "^4.1.1",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.1.2",
    "recompose": "^0.30.0",
    "redux": "^3.7.2",
    "redux-observable": "^1.2.0",
    "reselect": "^4.0.0",
    "rxjs": "^6.5.4"
## Recomponse

[1] We create a function return html code
```

function htmlCode({ myCustomState, setmyCustomState,  handleClick }) {
  return ( <html>... </html>)
}

```
[2] Use to **compose** multiple higher-order components into a single higher-order component.  

 ```
const enhance = compose( 
  withState('myCustomState', 'setmyCustomState', false),  // --> High Order Component available from recompose lib
  withHandlers({ // --> High Order Component available from recompose lib
    handleClick: props => event => {
      props.setFocused(!props.focused)
    },
  })
)
 ```
> **withState** to set a state
> **withHandlers** to create the functions to use in my component

[3] And finally we put all together :D and we could use normally like a react component. 

```
enhance(htmlCode)
```

---


## Internationalization React + intl

[1] Install react-intl to your project

`npm install --save react-intl`

[2] create a folder named 'translations' inside src and then create ur translation file with the extension '.json'

``` 
{
    "app.learn-react-link": "Lerne React."
}

``` 

[3] Wrap your app with IntlProvider

``` 
import {IntlProvider} from "react-intl";

import messages_de from "...src/translations/de.json";
import messages_es from "...src/translations/es.json";

const messages = {
  'de': messages_de,
  'es': messages_es
};

ReactDOM.render(
    <IntlProvider locale='es' messages='messages['es']'>
        <App/>
    </IntlProvider>,
    document.getElementById('root')
); 
```
> **locale**: default lenguage

[4] And finally. where we will text translate
> We could use a diferent way depending our type of data [>react-intl documentation<](https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md)

```

<h1> 
    <FormattedMessage id="app.learn-react-link" defaultMessage="Default message if we dont identify any lengauge" description="bar" />;
</h1>

```
> **id**: 'app.learn-react-link'  will be our id when react-intl try to know whats word must be used  to translate the text



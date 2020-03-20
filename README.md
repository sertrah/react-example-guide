This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

the purpose with this project is to use the libraries that are used in the industry and with the best practices to serve as a guide for a real project


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



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './components/App';
import CharacterPage from './components/pages/characterPage';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom'
import { store } from './storeConfig';
import { createBrowserHistory } from "history";



const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route exact path="/" component={App} />
      <Route exact path="/character/:id" component={CharacterPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

/* ReactDOM.render(<App />, document.getElementById('root'));
 */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

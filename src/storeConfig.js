import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from './epics';
import rootReducers from './reducers';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState) {
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
  );
  // create store
  return createStore(
    rootReducers,
    initialState,
    enhancer
  );
}

const store = configureStore();

epicMiddleware.run(rootEpic);

export { store };
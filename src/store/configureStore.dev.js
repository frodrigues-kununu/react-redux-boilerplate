import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
//import { routerMiddleware } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
// import api from '../middleware/api';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools/DevTools';

import rootSaga from '../sagas/rootSaga';

export default function configureStore(initialState) {
  // const routingMiddleware = routerMiddleware();

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const history = createBrowserHistory();

  //configure store, add thunk and saga
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        thunk,
        routerMiddleware(history),
        createLogger(),
      ),
      DevTools.instrument(),
    ),
  );

  //run the saga
  sagaMiddleware.run(rootSaga);

  //return the story and the created history
  return {
    store,
    history,
  };
}

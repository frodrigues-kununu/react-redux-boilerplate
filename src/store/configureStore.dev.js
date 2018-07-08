import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
//import { routerMiddleware } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import api from '../middleware/api';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools/DevTools';

export default function configureStore(initialState) {
  // const routingMiddleware = routerMiddleware();

  const history = createBrowserHistory();

  //return the story and the created history
  return {
    store: createStore(
      connectRouter(history)(rootReducer),
      initialState,
      compose(
        applyMiddleware(
          thunk,
          routerMiddleware(history),
          createLogger(),
        ),
        DevTools.instrument(),
      ),
    ),
    history,
  };
}

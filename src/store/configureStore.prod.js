import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import api from '../middleware/api';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const routingMiddleware = routerMiddleware(browserHistory);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, routingMiddleware),
  );
}

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { testReducer } from './testReducer';


const rootReducer = combineReducers({
  routing,
  testReducer
});

export default rootReducer;

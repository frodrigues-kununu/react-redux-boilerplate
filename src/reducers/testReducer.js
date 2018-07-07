import * as ActionTypes from '../actions/appActions';

function testReducer(state = { path: '' }, action) {
  switch (action.type) {
    case ActionTypes.TEST_ACTION:
      return state;

    default:
      return state;
  }
}

export default testReducer;

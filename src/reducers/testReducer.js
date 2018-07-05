'use strict';

import * as ActionTypes from '../actions';

//general settings, TODO: load from localStorage?
export function testReducer(state = { path: '' }, action) {
    switch (action.type) {
        case ActionTypes.TEST_ACTION:
            return state;

        default:
            return state;
    }
}
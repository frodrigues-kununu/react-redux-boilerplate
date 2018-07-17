import { all } from 'redux-saga/effects';
import user from './userSaga';

export default function* rootSaga() {
  yield all([
    user(),
  ]);
}

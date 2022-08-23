import {all} from 'redux-saga/effects';
import {watcherLocation} from '../sagas/locationSaga';
export default function* reduxSaga() {
  yield all([...watcherLocation]);
}
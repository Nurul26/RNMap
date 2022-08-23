import {combineReducers} from 'redux';
import MapReducer from './MapReducer';

const appReducer = combineReducers({
  locations: MapReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

import { combineReducers } from 'redux';
import navigator from './navigator';
import sidebar from './sidebar';

let rootReducer =combineReducers({
  navigator,
  sidebar
});

export default rootReducer;

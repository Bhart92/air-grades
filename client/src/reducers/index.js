import { combineReducers } from 'redux';
import alert from './alert';
import cityData from './cityData';
import states from './states';
import cities from './cities';

export default combineReducers({
    alert,
    cityData,
    states,
    cities
});
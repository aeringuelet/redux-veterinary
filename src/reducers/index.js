import { combineReducers } from 'redux';
import appointmentsReducers from './appointmentsReducer';

export default combineReducers({
    appointments: appointmentsReducers
});
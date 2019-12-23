import { combineReducers } from 'redux';
import appointmentsReducers from './appointmentsReducer';
import validationReducer from './validationReducer';

export default combineReducers({
    appointments: appointmentsReducers,
    error: validationReducer
});
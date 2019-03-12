import { combineReducers } from 'redux';

import results from './results';
import questions from './questions';

const rootReducer = combineReducers({ 
	results,
	questions,
	final 	: (state = {}) => state
});

export default rootReducer;
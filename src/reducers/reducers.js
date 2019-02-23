import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import results from './results';
import questions from './questions';

const rootReducer = combineReducers({ 
	results,
	questions,
	intro 	: (state = {}) => state,
	routing : routerReducer
});

export default rootReducer;
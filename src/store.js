import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/reducers';

import { survey } from './data/survey';

const defaultState = {
	results 	: survey.results,
	questions 	: survey.questions,
	intro 		: survey.intro
};

const store = createStore(rootReducer, defaultState);

export default store;
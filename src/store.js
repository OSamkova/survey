import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/reducers';

import { results } from './data/results';
import { questions } from './data/questions';
import { intro }     from './data/intro';

const defaultState = {
	results,
	questions,
	intro
};

const store = createStore(rootReducer, defaultState);

export default store;
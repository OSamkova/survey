import { createStore } from 'redux';
import rootReducer from '../_reducers/reducers';

import { survey } from '../data/survey';


const questions = survey.questions ? survey.questions : [];
questions.forEach(question => {
	question && question.options && question.options.sort(() => 0.5 - Math.random());
});

const defaultState = {
	results 	: survey.results,
	questions 	: questions,
	final 		: {}
};

const store = createStore( rootReducer, defaultState );

export default store;
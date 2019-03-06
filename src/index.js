import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import SurveyResult from './components/SurveyResult';
import * as serviceWorker from './serviceWorker';

import store 	from './store';

import './css/style.sass';

const router = (
	<Provider store = {store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={App} />
				<Route exact path="/result" component={SurveyResult} />
			</div>
		</BrowserRouter>
	</Provider>
);

render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

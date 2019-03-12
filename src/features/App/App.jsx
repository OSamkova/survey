import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../../_helpers/history';
import { Survey } from '../Survey/Survey';
import { SurveyResult } from '../SurveyResult/SurveyResult';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Survey}/>
                    <Route className='test' path="/result" component={SurveyResult} />
                </Switch>
            </Router>
        );
    }
}

export default App;
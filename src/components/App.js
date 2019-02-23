import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Survey 	from './Survey';

const mapStateToProps = (state) => ({
	questions : state.questions,
	intro 	  : state.intro
})

const mapDispatchToProps = (dispatch) => (
	bindActionCreators(actionCreators, dispatch)
)

const App = connect(mapStateToProps, mapDispatchToProps)(Survey);

export default App;
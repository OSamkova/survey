import React from 'react';
import { connect } from 'react-redux';

class SurveyResult extends React.Component {
	render() {
		const { results } = this.props;
		const { final } = results;

		return <div className='survey'>
					{ final
						? 
						<div className='result-container'>
							<div className='result-item subtitle'>
								{final.title}
							</div>
							<div className='result-item body'>
								{final.description}
							</div>
						</div>
						: null
					}
				</div>
	}
}

function mapStateToProps(state) {
    const { results } = state;
    return {
        results
    };
}

const connectedSurveyResult = connect(mapStateToProps)(SurveyResult);
export { connectedSurveyResult as SurveyResult }; 
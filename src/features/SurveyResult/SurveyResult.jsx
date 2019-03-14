import React from 'react';
import { connect } from 'react-redux';

class SurveyResult extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	width : window.innerWidth
        }
        this.onResize = this.onResize.bind( this );
    }

    componentDidMount() {
    	window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        this.setState({ width: window.innerWidth });
    }

	render() {
		const { results } = this.props;
		const { final } = results;

		return <div className={`survey ${this.state.width > 760 ? 'medium-screen' : 'small-screen'}`}>
					{ final
						? <div className='result-container question-container'>
							<div className='result-text'>
								<div className='subtitle'>
									{final.title}
								</div>
								<div className='body'>
									{final.description}
								</div>
							</div>
							<div className='result-image image-container'>
								<img 
									className 	= 'image-option' 
									src 		= { final.url } 
									alt 		= ''
								/>
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
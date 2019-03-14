import React from 'react';
import Question from '../Question/Question';
import { connect } from 'react-redux';
import * as Actions from '../../_actions/actionCreators';
import { history } from '../../_helpers/history';

const Intro = () => (
	<div className='intro-container'>
		<div className='intro title'>
			In Which 'Game of Thrones' House Do You Belong?
		</div>
		<div className='intro subtitle'>
			Learn where your allegiance lies!
		</div>
	</div>
)

const CustomButton = ({ onClick, title, active, name }) => (
	<div className={`${name ? name : ''} custom-button-container`}>
		<div 
			className = 'custom-button'
			onClick   = { active ? () => onClick() : null }
		>
			<span className={`custom-button-label ${active ? 'enabled' : 'disabled'}`}>{title}</span>
		</div>
	</div>
)

class Survey extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	questionIndex 		: -1,
        	questionComplete 	: false,
        	width 				: window.innerWidth
        }
        this.onResize = this.onResize.bind( this );
    }

    componentDidMount() {
    	window.addEventListener('resize', this.onResize);
    }

    componentDidUpdate(prevProps, preState) {
    	if(prevProps !== this.props) {
    		const { questions } = this.props;
    		const { questionIndex } = this.state;

    		const options = questions && questions[questionIndex] && questions[questionIndex].options ? questions[questionIndex].options : [];
    		
    		const found = options.findIndex(o => o.selected === true);

    		if( found !== -1 ) {
    			this.setState({ questionComplete: true });
    		} else {
    			this.setState({ questionComplete: false });
    		}
    	}
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        this.setState({ width: window.innerWidth });
    }

    validate(selected) {
    	// are there any unanswered questions
    	const found = selected.findIndex( q => q.options.length === 0 );

    	if( found !== -1 ) return false;

    	return true;
    }

    onSelect(index, house, points) {
    	this.props.dispatch(Actions.selectOption(index, house, points));
    }

    onSubmit() {
    	const selected = this.props.questions && this.props.questions.map(question => {
    		const options = question.options.filter( option => option.selected === true );
    		return { ...question, options }
    	});

    	if(this.validate(selected)) {
    		this.props.dispatch(Actions.submit(selected));
    	}
    }

    nextQuestion() {
    	const questionIndex = this.state.questionIndex + 1;
    	this.setState({ questionIndex });
    	history.push(`/question`);
    }

    previousQuestion() {
    	const questionIndex = this.state.questionIndex - 1;
    	this.setState({ questionIndex });
    	history.push(`/question`);
    }

	render() {
		const { questions } = this.props;
		const { questionIndex } = this.state;

		return (
			<div className={`survey ${this.state.width > 760 ? 'medium-screen' : 'small-screen'}`}>
				{ questionIndex && questionIndex < 0
					? <div className='questions-container'>
					 	<Intro /> 
					 	<CustomButton
							title 	= 'Start'
							onClick = { this.nextQuestion.bind(this) }
							active  = { true }
							name 	= 'submit'
						/>
					  </div>
					: <div className='questions-container'>
							<Question
								index 	= { questionIndex }
								data 	= { questions[questionIndex] }
								onSelect= { this.onSelect.bind(this) }
								key 	= { questionIndex }
							/>
							{ questionIndex >= questions.length - 1
								? <CustomButton
										title 	= 'Submit'
										onClick = { this.onSubmit.bind(this) }
										active  = { this.state.questionComplete }
										name 	= 'submit'
									/>
								: <div className='buttons-container'>
									<CustomButton
										title 	= 'Previous'
										onClick = { this.previousQuestion.bind(this) }
										active  = { true }
									/>
									<CustomButton
										title 	= 'Next'
										onClick = { this.nextQuestion.bind(this) }
										active 	= { this.state.questionComplete }
									/>
								  </div>
							}
					  </div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
    const { questions } = state;
    return {
        questions
    };
}

const connectedSurvey = connect(mapStateToProps)(Survey);
export { connectedSurvey as Survey }; 


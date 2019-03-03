import React from 'react';
import Question from './Question';

class Survey extends React.Component {
	constructor(props) {
        super(props);
    }

    validate(selected) {
    	// are there any unanswered questions
    	const found = selected.findIndex( q => q.options.length === 0 );

    	if( found !== -1 ) return false;

    	return true;
    }

    onSelect(index, house, points) {
    	this.props.selectOption(index, house, points);
    }

    onSubmit() {
    	const selected = this.props.questions && this.props.questions.map(question => {
    		const options = question.options.filter( option => option.selected === true );
    		return { ...question, options }
    	});

    	if(this.validate(selected))
    		this.props.submit(selected);
    }

	render() {
		const { questions, intro, results } = this.props;

		const items = questions && questions.map((data, index) => 
			<Question 
				index 	= { index }
				data 	= { data } 
				onSelect= { this.onSelect.bind(this) } 
				key 	= { index }
			/>
		);

		return (
			<div className='survey'>
				<div className='into-container'>
					<div className='intro-title'>
						{intro.title}
					</div>
					<div className='intro-subtitle'>
						{intro.subtitle}
					</div>
				</div>
				<div className='questions-container medium-screen'>
					{items}
				</div>
				<div className='submit-button-container'>
					<div 
						className = 'custom-button-container'
						onClick   = { this.onSubmit.bind(this) }
					>
						<span className='custom-button-label'>Submit</span>
					</div>
				</div>
				{ results && results.final
					? <div className='result-container'>
							<div className='result-title'>
								{results.final.title}
							</div>
							<div className='result-body'>
								{results.final.description}
							</div>
						</div>
					: null
				}
			</div>
		)
	}
}

export default Survey;
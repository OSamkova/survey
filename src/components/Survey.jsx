import React from 'react';
import Question from './Question';

class Survey extends React.Component {
	constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind( this );
    }

    onSelect(index, house, points) {
    	this.props.selectOption(index, house, points);
    }

	render() {
		const { intro, questions } = this.props;
		const items = questions && questions.map((data, index) => 
			<Question 
				index 	= {index}
				data 	= {data} 
				onSelect= {this.onSelect} 
				key 	= {index}
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
			</div>
		)
	}
}

export default Survey;
import React from 'react';
import Check from '../../img/icons/Check';
import QuestionDropdown from './QuestionDropdown';

const getQuestion = (index, data, onSelect) => {
	if(data.type === 'images') 
		return <QuestionImage
					index 	 = {index} 
					data     = {data}
					onSelect = {onSelect}
				/>

	if(data.type === 'dropdown') 
		return <QuestionDropdown
					index 	 = {index} 
					data     = {data}
					onSelect = {onSelect}
					headerTitle = {'Select an answer'}
				/>

	return <QuestionCustomInput
				index 	 = {index} 
				data     = {data}
				onSelect = {onSelect}
			/>
}

const Question = ({index, data, onSelect}) => {
	const qs = getQuestion(index, data, onSelect);
	return (
		<div className={`question question-${data.type}`}>
			<div className='question-title'>
				{data.title}
			</div>
			<div className='question-body'>
				{qs}
			</div>
		</div>
	)
}

export default Question;

const QuestionImage = ({ index, data, onSelect }) => {
	let { options, points } = data;
	return options ? options.map((option, i) => {
		return <div key={i} className='question-body-image-item'>
					<div className={ `${option.selected ? 'selected' : ''} image-container` }>
						<img 
							className 	= 'image-option' 
							src 		= { option.url } 
							onClick 	= { () => onSelect(index, option.house, points) }
							alt 		= ''
						/>
						<Check width={80} height={80}/>
					</div>
				</div>
	}) : null;
}

const QuestionCustomInput = ({ index, data, onSelect }) => {
	let { options, points, type } = data;
	const containerClass = `custom-${type === 'checkbox' || type === 'radio' ? 'input' : 'button'}-container question-body-${type}-item`;
	const innerClass = `custom-${type === 'checkbox' || type === 'radio' ? 'input' : 'button'}-label ${type}-item-label`;

	return options ? options.map((option, i) => {
		return <div 
					key 		= { i } 
					className 	= { `${containerClass} ${option.selected === true ? 'selected' : ''}` } 
				>	
					<span 
						className 	= { innerClass }
						onClick 	= { () => onSelect(index, option.house, points) }
					>
						{ option.title }
					</span>
				</div>
	}) : null;
}

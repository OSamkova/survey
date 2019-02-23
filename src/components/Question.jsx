import React from 'react';
import Check from '../img/icons/Check';
import QuestionDropdown from './QuestionDropdown';

const getQuestion = (index, options, points, onSelect) => ({
	radio 	: <QuestionRadio
					index 	 = {index} 
					options  = {options}
					points   = {points}
					onSelect = {onSelect}
				/>,

	images 	: <QuestionImage
					index 	 = {index} 
					options  = {options}
					points   = {points}
					onSelect = {onSelect}
				/>,

	dropdown: <QuestionDropdown
					index 	 	= {index} 
					options  	= {options}
					points   	= {points}
					onSelect 	= {onSelect}
					headerTitle = {'Select an answer'}
				/>,

	checkbox: <QuestionCheckbox
					index 	 = {index} 
					options  = {options}
					points   = {points}
					onSelect = {onSelect}
				/>,

	buttons : <QuestionButtons
					index 	 = {index} 
					options  = {options}
					points   = {points}
					onSelect = {onSelect}
				/>
});

const Question = ({index, data, onSelect}) => {
	const qs = getQuestion(index, data.options, data.points, onSelect)[data.type];
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

const QuestionRadio = ({ index, options, points, onSelect }) => {
	return options ? options.map((option, i) => {
		return <div 
					key 		= {i} 
					className 	= 'custom-input-container question-body-radio-item' 
					onClick 	= {() => onSelect(index, option.house, points)}
				>	
					<input
						className 	= 'custom-input radio-item-input'
						type 		= 'radio'
						checked 	= { option.selected !== undefined ? option.selected : false }
						onChange 	= {() => {}}
					/>
					<label className='custom-label radio-item-label'>
						{option.title}
					</label>
				</div>
	}) : null;
}

const QuestionImage = ({ index, options, points, onSelect }) => {
	return options ? options.map((option, i) => {
		return <div key={i} className='question-body-image-item'>
					<div className={`${option.selected ? 'selected' : ''} image-container`}>
						<img 
							className 	= 'image-option' 
							src 		= {option.url} 
							onClick 	= {() => onSelect(index, option.house, points)}
						/>
						<Check width={80} height={80}/>
					</div>
				</div>
	}) : null;
}

const QuestionCheckbox = ({index, options, points, onSelect}) => {
	return options ? options.map((option, i) => {
		return <div 
					key 		= {i} 
					className 	= { `custom-input-container question-body-checkbox-item ${option.selected === true ? 'selected' : ''}` }
					onClick 	= {() => onSelect(index, option.house, points)}
				>
					<input
						className 	= { `custom-input checkbox-item-input` }
						type 		= 'checkbox'
						checked 	= { option.selected !== undefined ? option.selected : false }
						onChange 	= { () => {} }
					/>
					<label className='custom-label checkbox-item-label'>
						{ option.title }
					</label>
				</div>
	}) : null;
}

const QuestionButtons = ({index, options, points, onSelect}) => {
	return options ? options.map((option, i) => {
		return <div 
					key 		= {i} 
					className 	= 'question-body-buttons-item custom-button'
				>
					<div 
						className 	= 'custom-button-text'
						onClick 	= { () => onSelect(index, option.house, points) }
					>
						{ option.title }
					</div>
				</div>
	}) : null;
}


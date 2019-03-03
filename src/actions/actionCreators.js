export const SELECT_OPTION 	= 'SELECT_OPTION';
export const SUBMIT 		= 'SUBMIT';

export function selectOption(index, house, points) {
	return {
		type : 'SELECT_OPTION',
		index,
		house,
		points
	}
}

export function submit(selected) {
	return {
		type : 'SUBMIT',
		selected
	}
}
export const SELECT_OPTION = 'SELECT_OPTION';

export function selectOption(index, house, points) {
	return {
		type : 'SELECT_OPTION',
		index,
		house,
		points
	}
}
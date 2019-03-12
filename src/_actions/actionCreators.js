import { SELECT_OPTION, SUBMIT } from '../_constants/constants';
import { history } from '../_helpers/history';

export function selectOption(index, house, points) {
	return {
		type : SELECT_OPTION,
		index,
		house,
		points
	}
}

export function submit(selected) {	
	history.push('/result');
	return {
			type : SUBMIT,
			selected
		}
}
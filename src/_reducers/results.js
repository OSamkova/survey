import cloneDeep from 'lodash/cloneDeep';
import { SUBMIT } from '../_constants/constants';

const refresh = (result) => {
	Object.keys(result).forEach(house => {
		result[house].total = 0;
	})
}

const results = (state = [], action) => {
	switch(action.type) {
		case SUBMIT :
			const { selected } = action;
			let result = cloneDeep(state);
			refresh(result);

			// calculate total points for each house
			selected.forEach(question => {
				question.options.forEach(option => {
					if ( result.hasOwnProperty(option.house) ) {
						result[ option.house ].total += question.points;
					}
				})
			});

			// find the house that got max points
			const house = Object.keys(result).reduce((a, b) => result[a].total > result[b].total ? a : b);

			result.final = result[house];
			console.log(result)
			return result;
     
		default:
			return state;
	}
}

export default results;
function questions(state = [], action) {
	switch(action.type) {
		case 'SELECT_OPTION' :
			// const {house, points} = action;
			// state[house].total += points;

			return state;
     
		default:
			return state;
	}
}

export default questions;
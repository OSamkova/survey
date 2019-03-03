function questions(state = [], action) {
    switch(action.type) {
        case 'SELECT_OPTION' :
            const {index, house} = action;
            let options = state[index] && state[index].options ? state[index].options.map(option => {
                return {...option, selected: option.house === house ? true : false };
            }) : [];

            return [
                ...state.slice(0,index), // before the one we are updating
                {...state[index], options},
                ...state.slice(index + 1), // after the one we are updating
            ];

        default:
            return state;
    }
}

export default questions;
import React from 'react';
import Check from '../img/icons/Check';
import SortUp from '../img/icons/SortUp';
import SortDown from '../img/icons/SortDown';

class QuestionDropdown extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			listOpen: false,
			headerTitle: this.props.headerTitle
		}
		this.handleClickOutside = this.handleClickOutside.bind( this );
		this.toggleList = this.toggleList.bind( this );
		this.selectItem = this.selectItem.bind( this );
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
    	document.removeEventListener('click', this.handleClickOutside, true);
    }

	handleClickOutside(e) {
		if (this.state.listOpen) {
            var el = this.refs.dropdown;
            if (el && !el.contains(e.target)) {
                this.setState({ listOpen: false });
            }
        }
	}

	toggleList() {
		this.setState(prevState => ({
			listOpen: !prevState.listOpen
		}))
	}

	selectItem(index, option, points) {
		this.props.onSelect(index, option.house, points);
		this.toggleList();
		this.setState({ headerTitle: option.title });
	}

    render() {
    	const { index, options, points } = this.props;
    	const { listOpen, headerTitle } = this.state;
		return (
					<div className='dropdown-container custom-button' ref='dropdown'>
						<div 
							className 	= 'dropdown-header  custom-button-text' 
							onClick 	= { () => this.toggleList() }
						>
							<div className='dropdown-header-title'>{headerTitle}</div>
							{ listOpen 
								? <SortUp width={15} height={15} /> 
								: <SortDown width={15} height={15} /> 
							}
						</div>
						{ listOpen && <ul className='dropdown-list'>
							{ options && options.map((option, i) => {
									return <li 
												key 		= {i} 
												className 	= 'dropdown-list-item'
												onClick 	= {() => this.selectItem(index, option, points)}
											>{option.title} { option.selected ? <Check width={15} height={15} /> : null}</li>
								})
							}
						</ul> }
					</div>
		)
    }
}

export default QuestionDropdown;
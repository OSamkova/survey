import React from 'react';
import Check from '../../img/icons/Check';

class QuestionDropdown extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			listOpen 	: false,
			headerTitle : this.props.headerTitle,
			selected 	: false
		}
		this.handleClickOutside = this.handleClickOutside.bind( this );
		this.toggleList = this.toggleList.bind( this );
		this.selectItem = this.selectItem.bind( this );
		this.setTitle 	= this.setTitle.bind( this );
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
        this.setTitle();  
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

	setTitle() {
		const { data } = this.props;
        const { options } = data;
        const found = options.findIndex( option => option.selected === true);
        if( found !== -1 ) 
        	this.setState({ 
        		headerTitle: options[found].title,
        		selected : true 
        	});
	}

	toggleList() {
		this.setState(prevState => ({
			listOpen: !prevState.listOpen
		}))
	}

	selectItem(index, option, points) {
		this.props.onSelect(index, option.house, points);
		this.toggleList();
		this.setState({ headerTitle: option.title, selected: true });
	}

    render() {
    	const { index, data } = this.props;
    	const { options, points } = data;
    	const { listOpen, headerTitle, selected } = this.state;

		return (
					<div className={ `dropdown-container custom-button ${selected ? 'selected' : ''}` } ref='dropdown'>
						<div 
							className 	= 'dropdown-header custom-button-label' 
							onClick 	= { () => this.toggleList() }
						>
							<span className='dropdown-header-title'>{headerTitle}</span>
							<span className='arrow-container'><i className={ `arrow ${listOpen ? 'up' : 'down'}` }/></span>
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
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		//always manipulate state with this.setState after the default state is set in the constructor function
		return (
			<div className="search-bar">
			<input 
			value={this.state.term}
			onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;
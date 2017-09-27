import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		//always manipulate state with this.setState after the default state is set in the constructor function
		return (
			<div>
			<input onChange={event => this.setState({ term: event.target.value })} />;
			Value of the input: {this.state.term}
			</div>
		);
	}

}

export default SearchBar;
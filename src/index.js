import React, { Component } from 'react';
//reactJS has split into 2 libraries: react and react-dom
//to render something to the DOM, we need react-dom library.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const keys = require("../config/keys.js");
const API_KEY = keys.youtubeAPIkey;




class App extends Component {
	constructor(props) {
		super(props);

		//set default state
		this.state = { videos: [] };


		//we want the YTSearch data to be stored in the state of App
		//YTSearch is in the constructor because we want the user to see videos immediately
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });

		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}



//Insert this component into the DOM 
//App is a class. To render App to the DOM, we need to make an instance of the App class. To do this, we enclose App with a < /> tag
//the second argument in render() is a target location to render at. Otherwise, it does not know where to render the component and throws an error
ReactDOM.render(<App />, document.querySelector('.container')); 
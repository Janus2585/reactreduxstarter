import React, { Component } from 'react';
//reactJS has split into 2 libraries: react and react-dom
//to render something to the DOM, we need react-dom library.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const keys = require("../config/keys.js");
const API_KEY = keys.youtubeAPIkey;




class App extends Component {
	constructor(props) {
		super(props);

		//set default state
		this.state = { 
			videos: [],
			selectedVideo: null 
		};


		//we want the YTSearch data to be stored in the state of App
		//videoSearch() is called in the constructor because we want the user to see videos immediately
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos, //same as videos: videos
				selectedVideo: videos[0]
			});

		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}



//Insert this component into the DOM 
//App is a class. To render App to the DOM, we need to make an instance of the App class. To do this, we enclose App with a < /> tag
//the second argument in render() is a target location to render at. Otherwise, it does not know where to render the component and throws an error
ReactDOM.render(<App />, document.querySelector('.container')); 
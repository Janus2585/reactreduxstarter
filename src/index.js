import React from 'react';
//reactJS has split into 2 libraries: react and react-dom
//to render something to the DOM, we need react-dom library.
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const keys = require("../config/keys.js");
const API_KEY = keys.youtubeAPIkey;
console.log(API_KEY);

//Create a new component. This component should produce
//some HTML

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}



//Insert this component into the DOM 
//App is a class. To render App to the DOM, we need to make an instance of the App class. To do this, we enclose App with a < /> tag
//the second argument in render() is a target location to render at. Otherwise, it does not know where to render the component and throws an error
ReactDOM.render(<App />, document.querySelector('.container')); 
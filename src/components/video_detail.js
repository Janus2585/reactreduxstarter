import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;

	//backticks ` are used if you want to inject a javascript variable into the string
	//this line is the same as
	//const url = "https://www.youtube.com/embed/" + videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;


	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div className="detailsTitle">{video.snippet.title}</div>
				<div className="detailsDescription">{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
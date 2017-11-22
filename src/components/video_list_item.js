import React from 'react';


const VideoListItem = ({video}) => {

    //ES6 surgar lets me replace above (props) then below. comment out.  Instead I can just put in {video} now sets a variable video and gets the prop value for video.
    //const video = props.video;

    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
            <li className='list-group-item' >
                <div className='video-list media'>
                    <div className='media-left'>
                        <image className="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>

            </li>
        );



};

export default VideoListItem;
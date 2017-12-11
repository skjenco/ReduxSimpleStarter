import React from 'react';

const VideoDetail = ({video}) => {  //again this is a trick of getting all the props you get just video prop

    if(!video){
        return <div>loading....</div>;
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;  //btw the other way to do this is string interpelation using tick
                                    //So  `......... ${}`
                                    //Example `https://www.youtube.com/embed/$videoId}`

    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                {console.log(url)}


                <iframe className="embed-responsive-item"  width="420" height="315" frameborder="0"  src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );

};

export default VideoDetail;
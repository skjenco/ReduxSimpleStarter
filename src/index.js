import React, {Component} from 'react';  //How we can use React
import ReactDOM from 'react-dom';
import  YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//youtube api key

import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyANmYAtFZWVSvu2erxCcQDuijWQKnCAm3k';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        videos: [],
        selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'how the west was won'}, (videos) => {
      this.setState(
          {
              videos:videos,
              selectedVideo:videos[0]
          }

          );  //Again syntax short cut {videos:videos} Do this because the object name 'video' and the variable 'video is the same name.
    });

  }


  render()
  {
    return (
        <div>
          <SearchBar />
         <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
              onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
              videos={this.state.videos} />
        </div>

    );
  }


}



//Take this compents generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

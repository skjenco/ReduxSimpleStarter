import React, {Component} from 'react';  //How we can use React
import ReactDOM from 'react-dom';
import  YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//youtube api key
const API_KEY = 'AIzaSyANmYAtFZWVSvu2erxCcQDuijWQKnCAm3k'

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'Gary Herbert'}, (videos) => {
      this.setState({ videos});  //Again syntax short cut {videos:videos} Do this because the object name 'video' and the variable 'video is the same name.
    });

  }


  render()
  {
    return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>

    );
  }


}



//Take this compents generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

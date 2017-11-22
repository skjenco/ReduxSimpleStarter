import React, {Component} from 'react';  //How we can use React
import ReactDOM from 'react-dom';
import  YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyANmYAtFZWVSvu2erxCcQDuijWQKnCAm3k'


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {videos: [] };

  }


  render()
  {
    return (
        <div>
          <SearchBar />
        </div>

    );
  }


}



//Take this compents generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';  //How we can use React
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyANmYAtFZWVSvu2erxCcQDuijWQKnCAm3k'

//Create a new compenent.  Idea hear is to produce html
//New Component.  Code that produces html


const App = () => {   //Often called the fat arrow in Es6 it replace the function.  "this" behaves different
    return (
        <div>
            <SearchBar />
        </div>
    );
}


//Take this compents generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
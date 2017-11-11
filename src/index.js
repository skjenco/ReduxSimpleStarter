import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/my_component';

const App = () => {
  return (
    <div>Search: <SearchBar /></div>
  );

}

ReactDOM.render(<App />, document.getElementById('rootElement'));

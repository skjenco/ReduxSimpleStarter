import React from 'react';  //How we can use React
import ReactDOM from 'react-dom';


//Create a new compenent.  Idea hear is to produce html
//New Component.  Code that produces html


const App = () => {   //Often called the fat arrow in Es6 it replace the function.  "this" behaves different
    return <div>Working with the fat arrow</div>;
}


//Take this compents generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
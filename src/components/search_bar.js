import React, {Component} from 'react';  // by doing this it pulls of Compnent by calling component so const Component = React.Component;



class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
             <div>
                 <input onChange={(event) => this.setState({term: event.target.value})} />
                 Value of the input : {this.state.term}

            </div>
        );
    }



}



export default SearchBar;

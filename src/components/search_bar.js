import React, {Component} from 'react';  // by doing this it pulls of Compnent by calling component so const Component = React.Component;



class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
             <div className="search-bar">
                 <input value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }


    onInputChange(term) {
        this.setState({term:term});
        this.props.onSearchTermChange(term);


    }


}



export default SearchBar;

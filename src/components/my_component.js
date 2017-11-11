import React from 'react';


class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {output: ''}
    };



    render(){
        return(
            <div>
              <input value={this.state.output}  onChange={(e) =>{this.setState({output: e.target.value})}  } />
              <h2>{this.state.output}</h2>
            </div>
        );
    }

}
export default  SearchBar

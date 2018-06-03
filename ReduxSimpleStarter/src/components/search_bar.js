import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return ( 
            <div>
                <input
                    value={this.state.term} // Controlled input [S01L19]
                    onChange={this.onInputChange.bind(this)}
                />
            </div>
        );
    }

    onInputChange(event) {
        const value = event.target.value;
        console.log(value);
        this.setState({ term: event.target.value });
    }
}

export default SearchBar;
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBarValue: ''
    };
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ searchBarValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onInputChange.bind(this)}
          value={this.state.searchBarValue}
        />
        {this.state.searchBarValue}
      </div>
    );
  }
}

export default SearchBar;

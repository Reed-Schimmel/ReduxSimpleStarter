import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBarValue: ''
    };
  }

  onInputChange(searchBarValue) {
    this.setState({ searchBarValue });
    this.props.onSearchTermChange(searchBarValue);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.searchBarValue}
        />
      </div>
    );
  }
}

export default SearchBar;

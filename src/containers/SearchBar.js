import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // this.onInputChange = this.onInputChange.bind(this);
  }

  _onInputChange = (event) => {
    const term = event.target.value;
    // console.log(term);
    this.setState({ term });
  }

  _onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this._onFormSubmit}>
        <input
          placeholder="get a five-dat forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this._onInputChange}
        />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);

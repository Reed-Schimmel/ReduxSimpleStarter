import React, { Component } from 'react';

import Project1 from './Project1';
import Project2 from './Project2';
import SearchBar from '../containers/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        {/* <Project1 /> */}
        {/* <Project2 /> */}
      </div>
    );
  }
}

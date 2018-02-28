import React, { Component } from 'react';

import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

export default class App extends Component {
  render() {
    return (
      <div>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    );
  }
}

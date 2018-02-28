import React from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default () => {
  return (
    <div>
        <SearchBar />
        <WeatherList />
    </div>
  );
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  _renderWeather = (cityData) => {
    if (!cityData) return;

    const { city, list } = cityData;
    const temps = list.map(weather => weather.main.temp);
    const pressures = list.map(weather => weather.main.pressure);
    const humidities = list.map(weather => weather.main.humidity);
    // console.log(temps);
    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        <td><Chart data={temps} color="orange" units="F" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => { 
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);

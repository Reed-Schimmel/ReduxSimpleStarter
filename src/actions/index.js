import axios from 'axios';
import {
  SELECT_BOOK,
  FETCH_WEATHER
} from './types';

const WEATHER_API_KEY = '4bd91ad3577fa394e4642c408fd5a909';
const WEATHER_API_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const selectBook = book => {
  return {
    type: SELECT_BOOK,
    payload: book
  };
};

export const fetchWeather = city => {
  const url = `${WEATHER_API_ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

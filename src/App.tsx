import React from 'react';
import './App.css';
import { Search } from './components/search/Search';
import { GEO_API_URL, WEATHER_API_URL, WEATHER_API_KEY, geoApiOptions } from './api';
import { CurrentWeather } from './components/current-weather/CurrentWeather';

function App() {

  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [forecastWeather, setForecastWeather] = React.useState(null);

  const loadOptions = (inputValue: string) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then(res => res.json())
      .then(json => {
        return {
          options: json.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`
            }
          })
        }
      })
      .catch(err => console.error('error:' + err));
  }

  const onHandleSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async response => {
        const currentWeatherResponse = await response[0].json();
        const forecastWeatherResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...currentWeatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastWeatherResponse });
      })
      .catch(error => console.log(error))
  }

  console.log(currentWeather)
  console.log(forecastWeather);

  return (
    <div className="container">
      <Search
        loadOptions={loadOptions}
        onSearchChange={onHandleSearchChange}
      />
      {currentWeather && <CurrentWeather />}
    </div>
  );
}

export default App;

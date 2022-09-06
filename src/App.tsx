import React from 'react';
import './App.css';
import { Search } from './components/search/Search';
import { GEO_API_URL, geoApiOptions } from './api';

function App() {

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
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search
        loadOptions={loadOptions}
        onSearchChange={onHandleSearchChange}
      />
    </div>
  );
}

export default App;

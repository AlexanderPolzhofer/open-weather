export const GEO_API_URL: string = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL: string = 'https://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY: string | undefined = process.env.REACT_WEATHER_API_KEY;

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd347e19500msh01fe56559b72defp1a7d78jsn897bfe958df2',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};
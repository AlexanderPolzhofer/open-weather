import React from 'react';
import './CurrentWeather.css';

interface CurrentWeatherProps {
    data: any;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {

    return (
        <div className='weather'>
            <div className='weather__top'>
                <div>
                    <p className='weather__top--city'>{data.city}</p>
                    <p className='weather__top--description'>{data.weather[0].description}</p>
                </div>
                <img alt='weather' className='weather__icon' src={`${process.env.PUBLIC_URL}/icons/${data.icon}.png`} />
            </div>
            <div className='weather__bottom'>
                <p className='weather__bottom--temperature'>{`${Math.round(data.main.temp)}°C`}</p>
                <div className='weather__bottom--details'>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Details</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Feels like</span>
                        <span className='weather__bottom--parameter-value'>{`${Math.round(data.main.feels_like)}°C`}</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Wind</span>
                        <span className='weather__bottom--parameter-value'>{`${data.wind.speed} m/s`}</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Humidity</span>
                        <span className='weather__bottom--parameter-value'>{`${data.main.humidity} %`}</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Pressure</span>
                        <span className='weather__bottom--parameter-value'>{`${data.main.pressur} hPa`}</span>
                    </div>
                </div>
            </div>
        </div>)
}
import React from 'react';
import './CurrentWeather.css';

interface CurrentWeatherProps {

}

export const CurrentWeather: React.FC<CurrentWeatherProps> = () => {

    return (
        <div className='weather'>
            <div className='weather__top'>
                <div>
                    <p className='weather__top--city'>Vienna</p>
                    <p className='weather__top--description'>sunny</p>
                </div>
                <img alt='weather' className='weather__icon' src={`${process.env.PUBLIC_URL}/icons/01d.png`} />
            </div>
            <div className='weather__bottom'>
                <p className='weather__bottom--temperature'>20°C</p>
                <div className='weather__bottom--details'>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Details</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Feels like</span>
                        <span className='weather__bottom--parameter-value'>22°C</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Wind</span>
                        <span className='weather__bottom--parameter-value'>2m/s</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Humidity</span>
                        <span className='weather__bottom--parameter-value'>15%</span>
                    </div>
                    <div className='weather__bottom--parameter-row'>
                        <span className='weather__bottom--parameter-label'>Pressure</span>
                        <span className='weather__bottom--parameter-value'>15 hPa</span>
                    </div>
                </div>
            </div>
        </div>)
}
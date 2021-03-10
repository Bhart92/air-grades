import React from 'react';
import { connect } from 'react-redux';

const WeatherTable = ({cityData}) => {
    const {data} = cityData;

    return <div className='results-body--pollution-box'>
    <div className='pollution-box'>
        <div className='pollution-box--title'><span>Temperature</span></div>
            <div className='pollution-box--data temperature'>
            <p>{data && (data.current.weather.tp * 9/5) + 32}&deg;F</p>
            <p>{data && data.current.weather.tp}&deg;C</p>
            </div>
        </div>
            <div className='pollution-box'>
            <div className='pollution-box--title'><span>Humidity</span></div>
            <div className='pollution-box--data'>
                <span>
                    {data && `${data.current.weather.hu}%`}
                </span>
            </div>
        </div> 
    <div className='pollution-box weather-data'>
        <div className='pollution-box--title'><span>Current Weather</span></div>
            <div className='pollution-box--data'> 
                {data && data.current.weather.ic === '01d' && <img src={`/assets/01d.png`} />} 
                {data && data.current.weather.ic === '01n' && <img src={`/assets/01n.png`} />} 
                {data && data.current.weather.ic === '02d' && <img src={`/assets/02d.png`} />} 
                {data && data.current.weather.ic === '02n' && <img src={`/assets/02n.png`} />} 
                {data && data.current.weather.ic === '03d' && <img src={`/assets/03d.png`} />} 
                {data && data.current.weather.ic === '03n' && <img src={`/assets/03d.png`} />} 
                {data && data.current.weather.ic === '04d' && <img src={`/assets/04d.png`} />} 
                {data && data.current.weather.ic === '04n' && <img src={`/assets/04d.png`} />} 
                {data && data.current.weather.ic === '09d' && <img src={`/assets/09d.png`} />} 
                {data && data.current.weather.ic === '09n' && <img src={`/assets/09d.png`} />} 
                {data && data.current.weather.ic === '10d' && <img src={`/assets/10d.png`} />} 
                {data && data.current.weather.ic === '10n' && <img src={`/assets/10d.png`} />} 
                {data && data.current.weather.ic === '11d' && <img src={`/assets/11d.png`} />} 
                {data && data.current.weather.ic === '11n' && <img src={`/assets/11d.png`} />} 
                {data && data.current.weather.ic === '13d' && <img src={`/assets/13d.png`} />}
                {data && data.current.weather.ic === '13n' && <img src={`/assets/13d.png`} />}  
                {data && data.current.weather.ic === `50d` && <img src={`/assets/50d.png`} />} 
                {data && data.current.weather.ic === `50n` && <img src={`/assets/50d.png`} />}  
                <span className='weather-desc'>      
                    {data && data.current.weather.ic === '01d' && `Clear Sky`}
                    {data && data.current.weather.ic === '01n' && `Clear Sky`}
                    {data && data.current.weather.ic === '02d' && `Some Clouds`}
                    {data && data.current.weather.ic === '02n' && `Some Clouds`}
                    {data && data.current.weather.ic === '03d' && `Scattered Clouds`}
                    {data && data.current.weather.ic === '03n' && `Scattered Clouds`}
                    {data && data.current.weather.ic === '04d' && `Broken Clouds`}
                    {data && data.current.weather.ic === '04n' && `Broken Clouds`}
                    {data && data.current.weather.ic === '09d' && `Shower Rain`}
                    {data && data.current.weather.ic === '09n' && `Shower Rain`}
                    {data && data.current.weather.ic === '10d' && `Rain`}  
                    {data && data.current.weather.ic === '10n' && `Rain`}                                
                    {data && data.current.weather.ic === '11d' && `Thunderstorm`} 
                    {data && data.current.weather.ic === '11n' && `Thunderstorm`}                                                               
                    {data && data.current.weather.ic === '13d' && `Snow`}  
                    {data && data.current.weather.ic === '13n' && `Snow`}                                                              
                    {data && data.current.weather.ic === '50d' && `Mist`} 
                    {data && data.current.weather.ic === '50n' && `Mist`}                                                               
                </span>
            </div>
        </div>
    </div>
};
const mapStateToProps = state => ({
    cityData: state.cityData
  });
export default connect(mapStateToProps)(WeatherTable);
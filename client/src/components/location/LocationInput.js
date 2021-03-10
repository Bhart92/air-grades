import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {getCityData, getGPSData, clearFilters, getSupportedStates, getSupportedCities} from '../../actions/data';

const LocationInput = ({clearFilters, getGPSData, getCityData, getSupportedStates, getSupportedCities, states, cities}) => {

const [selectedCity, setCity] = useState('');
const [selectedState, setState] = useState('');
const [selectedCountry, setCountry] = useState();

const onCityChange = async (e) => {
    setCity(e.target.value);
    getCityData(e.target.value, selectedState, selectedCountry);
};
const onStateChange = (e) => {
    setState(e.target.value);
    getSupportedCities(selectedCountry, e.target.value);
};
const onCountryChange = (e) => {
    setCountry(e.target.value);
    getSupportedStates(e.target.value);
};
function clearAllFilters() {
    clearFilters();
};
const countries = ['Afghanistan', 'Australia', 'Austria', 'Bahamas', 'Bahrain', 'Bangladesh', 'Belgium', 
                    'Bulgaria', 'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Cyprus', 'Czech Republic', 
                    'Democratic Republic of the Congo', 'Denmark', 'Ecuador', 'Ethiopia', 'Finland', 'France', 
                    'Germany', 'Ghana', 'Guatemala', 'Hungary', 'India', 'Indonesia', 'Iran', 'Ireland',
                    'Israel', 'Italy', 'Ivory Coast', 'Japan', 'Jordan' , 'Kazakhstan', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 
                    'Luxembourg', 'Malaysia', 'Malta', 'Mexico', 'Mongolia', 'Myanmar', 'Nepal', 'Netherlands', 
                    'New Zealand', 'Nigeria', 'North Macedonia', 'Norway', 'Peru', 'Poland', 'Portugal', 'Puerto Rico', 
                    'Russia', 'Serbia', 'Singapore', 'Slovakia', 'South Africa', 'South Korea', 'Spain', 
                    'Sri Lanka', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Thailand', 
                    'Turkey', 'U.S. Virgin Islands', 'USA', 'Uganda', 'Ukraine', 
                    'United Arab Emirates', 'United Kingdom', 'Uzbekistan', 'Vietnam'];
    return (
        <div className='location-input'>
            <h1>Check your air quality</h1>
            <span>Input Location</span>
            <div className='input-container'>
                <select defaultValue={'DEFAULT'} onChange={(e) => onCountryChange(e)}>
                    <option value='DEFAULT'> -- select an option -- </option>
                        {countries.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>;
                        })}
                </select>
            </div>

            <div className='input-container'>
                <select disabled={states.length === 0} defaultValue={'DEFAULT'} onChange={(e) => onStateChange(e)}>
                    <option value='DEFAULT'> -- select an option -- </option>
                        {states.map((item, index) => {
                            return <option key={index} value={item.state}>{item.state}</option>;
                        })}
                </select>
            </div>

            <div className='input-container'>
                <select disabled={cities.length === 0} defaultValue={'DEFAULT'} onChange={(e) => onCityChange(e)}>
                    <option value='DEFAULT'> -- select an option -- </option>
                        {cities.map((item, index) => {
                            return <option key={index} value={item.city}>{item.city}</option>;
                        })}
                </select>
            </div>
            <div className='location-input--btn-container'>
                <span className='location-btn' onClick={() => getGPSData()}>Get Location</span>
                <span className='refresh' onClick={() => clearAllFilters()}>Clear Search</span>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    states: state.states,
    cities: state.cities
  });
export default connect(mapStateToProps, {clearFilters, getGPSData, getCityData, getSupportedStates, getSupportedCities})(LocationInput);
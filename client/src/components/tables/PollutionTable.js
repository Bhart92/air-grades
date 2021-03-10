import React from 'react';
import { connect } from 'react-redux';

const PollutionTable = ({cityData}) => {
    const {data} = cityData;

    return (
        <div className='results-body--pollution-box'>
            <div className='pollution-box'>
                <div className='pollution-box--title'><span>Air Pollution Levels</span></div>
                <div className='pollution-box--data'>
                    <span>
                        {data && data.current.pollution.aqius <= 50 && `Good`}
                        {data && data.current.pollution.aqius > 50 && data.current.pollution.aqius < 101 && `Moderately Healthy`}
                        {data && data.current.pollution.aqius > 100 && data.current.pollution.aqius < 151 && `Unhealthy for sensitive groups`}
                        {data && data.current.pollution.aqius > 151 && data.current.pollution.aqius < 201 && `Unhealthy`}
                        {data && data.current.pollution.aqius > 201 && data.current.pollution.aqius < 301 && `Very Unhealthy`}
                        {data && data.current.pollution.aqius > 301 && `Downright Hazardous`}
                    </span>
                </div>
            </div>
            <div className='pollution-box'>
            <div className='pollution-box--title'><span>Air Quality Index</span></div>
                <div className='pollution-box--data'><span>{data && `${data && data.current.pollution.aqius} US AQI`}</span></div>
            </div>
            <div className='pollution-box'>
            <div className='pollution-box--title'><span>Description of Air Quality</span></div>
                <div className='pollution-box--data'>
                    {data && data.current.pollution.aqius <= 50 && `Air quality is satisfactory, and air pollution poses little or no risk.`}
                    {data && data.current.pollution.aqius > 50 && data.current.pollution.aqius < 101 && `Air quality is acceptable. However, there may be a risk for some people, 
                        particularly those who are unusually sensitive to air pollution.`}
                    {data && data.current.pollution.aqius > 100 && data.current.pollution.aqius < 151 && `Members of sensitive groups may experience health effects. The general 
                        public is less likely to be affected.`}
                    {data && data.current.pollution.aqius > 151 && data.current.pollution.aqius < 201 && `Some members of the general public may experience health effects; members of 
                        sensitive groups may experience more serious health effects.`}
                    {data && data.current.pollution.aqius > 201 && data.current.pollution.aqius < 301 && `Health alert: The risk of health effects is increased for everyone.`}
                    {data && data.current.pollution.aqius > 301 && `Health warning of emergency conditions: everyone is more likely to be affected.`}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    cityData: state.cityData
  });
export default connect(mapStateToProps)(PollutionTable);
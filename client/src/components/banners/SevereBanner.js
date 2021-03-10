import React from 'react';
import { connect } from 'react-redux';
const SevereBanner = ({cityData}) => {
    return (
        <div className='results--city-header sensitive' id='severe-banner'>
            <div className='results--city-rating'>
                <div className='city-rating-box' id='severe-rating'>
                    <div className='rating-box--title'>
                        <span>US AQI</span>
                    </div>
                    <div className='rating-box--num'>
                        <span>{cityData && cityData.data.current.pollution.aqius}</span>
                    </div>
                </div>
                <div className='results--city-info'>
                    <div className='city-info-condition'>
                        <div className='condition-title'>
                            <span>AQI INDEX</span>
                        </div>
                        <div className='condition-rating'>
                            <span>Hazardous</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='results--city-icon'>
                <i className="far fa-dizzy"></i>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    cityData: state.cityData
  });
export default connect(mapStateToProps)(SevereBanner);
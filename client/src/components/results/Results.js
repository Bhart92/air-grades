import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ResultsHeader from './ResultsHeader';
import ResultsBody from './ResultsBody';
import TitleBanner from '../banners//TitleBanner';

const Results = ({cityData}) => {
    const {data} = cityData;
    return (
            <div className='results-container'>
                {!data ? (<Fragment></Fragment>) : (<Fragment><TitleBanner /></Fragment>)}
                <div className='results--city-AQI'>
                    <ResultsHeader/>
                    <Fragment>
                        <ResultsBody />
                    </Fragment>
                </div>
            </div>
        );
};
const mapStateToProps = state => ({
    cityData: state.cityData
  });
export default connect(mapStateToProps)(Results);
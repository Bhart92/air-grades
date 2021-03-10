import React, { Fragment } from 'react';
import Results from '../results/Results';
import { connect } from 'react-redux';
import LocationInput from '../location/LocationInput';
import Alert from '../alert/Alert';
const MainContainer = ({cityData}) => {
    return <Fragment>
        <Alert />
        {cityData.data ? (
            <Fragment>
                <div className='main-container results'>
                    <Results />
                </div>
            </Fragment>
            ) : (
            <Fragment>
                <div className='main-container'>
                    <LocationInput />
                </div>
            </Fragment>
            )
        }
        <div className='main-container--credits'>
            <a href='https://www.freepik.com/vectors/people'>People vector created by brgfx - www.freepik.com</a>
            <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>
        </div>
        </Fragment>
};
const mapStateToProps = state => ({
    cityData: state.cityData
  });
export default connect(mapStateToProps)(MainContainer);
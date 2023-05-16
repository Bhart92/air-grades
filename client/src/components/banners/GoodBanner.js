import React from "react";
import { connect } from "react-redux";

const GoodBanner = ({ cityData }) => {
  return (
    <div className="results--city-header good">
      <div className="results--city-rating">
        <div className="city-rating-box">
          <div className="rating-box--title">
            <span>US AQI</span>
          </div>
          <div className="rating-box--num">
            <span>
              {cityData.data && cityData.data.current.pollution.aqius}
            </span>
          </div>
        </div>
        <div className="results--city-info">
          <div className="city-info-condition">
            <div className="condition-title">
              <span>AQI INDEX</span>
            </div>
            <div className="condition-rating">
              <span>Good</span>
            </div>
          </div>
        </div>
      </div>
      <div className="results--city-icon">
        <i className="far fa-smile"></i>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cityData: state.cityData,
});
export default connect(mapStateToProps)(GoodBanner);

import React from "react";
import { connect } from "react-redux";
const TitleBanner = ({ cityData }) => {
  const { data } = cityData;
  return (
    <div className="results-body--title">
      <div>
        <h1>Overview |&nbsp;</h1> <span> {data && data.country}</span>
      </div>

      <h2>
        Air Quality in {data && data.city}, {data && data.state}
      </h2>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cityData: state.cityData,
});
export default connect(mapStateToProps)(TitleBanner);

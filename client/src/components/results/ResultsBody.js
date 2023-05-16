import React, { Fragment } from "react";
import { connect } from "react-redux";
import LocationInput from "../location/LocationInput";
import PollutionTable from "../tables/PollutionTable";
import WeatherTable from "../tables/WeatherTable";

const ResultsBody = ({ cityData }) => {
  const { data } = cityData;
  return data === undefined ? (
    <LocationInput />
  ) : (
    <div className="results--body-container">
      <Fragment>
        <PollutionTable />
      </Fragment>
      <Fragment>
        <WeatherTable />
      </Fragment>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cityData: state.cityData,
});
export default connect(mapStateToProps)(ResultsBody);

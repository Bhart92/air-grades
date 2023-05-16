import React, { Fragment } from "react";
import { connect } from "react-redux";
import GoodBanner from "../banners/GoodBanner";
import ModBanner from "../banners/ModBanner";
import BadBanner from "../banners/BadBanner";
import VeryBadBanner from "../banners/VeryBadBanner";
import SevereBanner from "../banners/SevereBanner";
import SensitiveBanner from "../banners/SensitiveBanner";

const ResultsHeader = ({ cityData }) => {
  const { data } = cityData;
  return (
    <Fragment>
      {data && data.current.pollution.aqius <= 50 && <GoodBanner />}
      {data &&
        data.current.pollution.aqius > 50 &&
        data.current.pollution.aqius < 101 && <ModBanner />}
      {data &&
        data.current.pollution.aqius > 100 &&
        data.current.pollution.aqius < 151 && <SensitiveBanner />}
      {data &&
        data.current.pollution.aqius > 151 &&
        data.current.pollution.aqius < 201 && <BadBanner />}
      {data &&
        data.current.pollution.aqius > 201 &&
        data.current.pollution.aqius < 301 && <VeryBadBanner />}
      {data && data.current.pollution.aqius > 301 && <SevereBanner />}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  cityData: state.cityData,
});
export default connect(mapStateToProps)(ResultsHeader);

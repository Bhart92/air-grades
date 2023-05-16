import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const About = () => {
  return (
    <div className="main-container results">
      <div className="about-section">
        <div className="about--title">
          <h2>What is the AQI?</h2>
        </div>
        <div className="about--description">
          <p>
            Developed by the United States Environmental Protections Agency in
            the 1970s - the Air Quality Index (AQI) is a simple and uniform
            utility for reporting and determining the daily air quality
            conditions.{" "}
          </p>
          <p>
            The AQI measures four major air pollutants: Ground-level ozone,
            particle pollution, carbon monoxide, and sulfur dioxide.
          </p>
        </div>
        <div className="about--title">
          <h2>How Does it Work?</h2>
        </div>
        <div className="about--description">
          <p>
            The Air Quality Index operates on a sliding scale. Ranging from 0 -
            500 this scale determines the condition of the air in a given area
            and gauges the potential health affects it may have on the
            population.
          </p>
          <div className="img-container">
            <SRLWrapper>
              <img src="/assets/aqi.jpg" alt="Air Quality Index Graphic" />
            </SRLWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

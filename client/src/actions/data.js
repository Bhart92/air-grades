import {
  GET_CITY_DATA,
  GET_SUPPORTED_COUNTRIES,
  GET_SUPPORTED_STATES,
  GET_SUPPORTED_CITIES,
  CLEAR_FILTERS,
} from "./types";
import { setAlert } from "./alert";
import axios from "axios";
require("dotenv").config();

export const getCityData = (city, state, country) => async (dispatch) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const res = await axios.get(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${process.env.REACT_APP_IQ}`
    );

    const { data } = res.data;
    dispatch({
      type: GET_CITY_DATA,
      data,
    });
  } catch (error) {
    dispatch(
      setAlert(
        `Sorry, something went wrong. Please refresh page try again.`,
        "danger"
      )
    );
  }
};

export const getGPSData = () => async (dispatch) => {
  try {
    const showPosition = (position) => {
      const getData = async () => {
        const res = await axios.get(
          `https://api.airvisual.com/v2/nearest_city?lat={${position.coords.latitude}}&lon={${position.coords.longitude}}&key=${process.env.REACT_APP_IQ}`
        );
        const { data } = res.data;
        dispatch({
          type: GET_CITY_DATA,
          data,
        });
      };
      getData();
    };
    if (navigator) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      dispatch(setAlert(`Sorry, your geolocation is not on.`, "danger"));
    }
  } catch (error) {
    dispatch(
      setAlert(
        `Sorry, something went wrong. Please refresh page try again.`,
        "danger"
      )
    );
  }
};

export const getSupportedCountries = () => async (dispatch) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const res = await axios.get(
      `https://api.airvisual.com/v2/countries?key=${process.env.REACT_APP_IQ}`
    );

    const { data } = res.data;
    dispatch({
      type: GET_SUPPORTED_COUNTRIES,
      data,
    });
  } catch (error) {
    dispatch(setAlert(`Sorry, that area is not indexed.`, "danger"));
  }
};

export const getSupportedStates = (country) => async (dispatch) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const res = await axios.get(
      `https://api.airvisual.com/v2/states?country=${country}&key=${process.env.REACT_APP_IQ}`
    );

    const { data } = res.data;
    dispatch({
      type: GET_SUPPORTED_STATES,
      data,
    });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(`Sorry, that area is not indexed.`, "danger"));
  }
};

export const getSupportedCities = (country, state) => async (dispatch) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const res = await axios.get(
      `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${process.env.REACT_APP_IQ}`
    );

    const { data } = res.data;

    dispatch({
      type: GET_SUPPORTED_CITIES,
      data,
    });
  } catch (err) {
    dispatch(setAlert(`Sorry, that area is not indexed.`, "danger"));
  }
};

export const clearFilters = () => async (dispatch) => {
  dispatch({
    type: CLEAR_FILTERS,
  });
};

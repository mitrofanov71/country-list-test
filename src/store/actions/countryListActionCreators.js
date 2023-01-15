import {
  CLEAR_ERROR,
  DISABLE_LOADING,
  ENABLE_LOADING,
  FETCH_COUNTRY_SUCCESS,
  SET_SELECTED_COUNTRY,
  SHOW_ERROR,
} from './countryListActions';

export const showError = (error) => ({ type: SHOW_ERROR, payload: error });
export const clearError = () => ({ type: CLEAR_ERROR });
export const fetchCountrySuccess = (data) => ({ type: FETCH_COUNTRY_SUCCESS, payload: data });
export const enableLoading = () => ({ type: ENABLE_LOADING });
export const disableLoading = () => ({ type: DISABLE_LOADING });
export const setSelectedCountry = (id) => ({ type: SET_SELECTED_COUNTRY, payload: id });
export const resetSelectedCountry = () => ({ type: SET_SELECTED_COUNTRY, payload: null });

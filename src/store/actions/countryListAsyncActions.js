import {
  addCountry, changeCountry, getCountry, removeCountry,
} from '../../api/countryList';
import { fetchCountrySuccess, showError } from './countryListActionCreators';

import makeRequest from '../../utils/requestHelper';

export const fetchCountry = () => async (dispatch) => {
  makeRequest(dispatch, async () => {
    const result = await getCountry();
    if (result.data && result.status === 200) {
      dispatch(fetchCountrySuccess(result.data));
    } else {
      dispatch(showError('Что-то пошло не так!'));
    }
  });
};

export const removeCountryAction = (id) => async (dispatch) => {
  makeRequest(dispatch, async () => {
    const result = await removeCountry(id);
    if (result.status === 200) {
      dispatch(fetchCountry());
    } else {
      dispatch(showError('Что-то пошло не так!'));
    }
  });
};

export const addCountryAction = (data) => async (dispatch) => {
  makeRequest(dispatch, async () => {
    const result = await addCountry(data);
    if (result.status === 201) {
      dispatch(fetchCountry());
    } else {
      dispatch(showError('Что-то пошло не так!'));
    }
  });
};

export const changeCountryAction = (data) => async (dispatch) => {
  makeRequest(dispatch, async () => {
    const result = await changeCountry(data);
    if (result.status === 200) {
      dispatch(fetchCountry());
    } else {
      dispatch(showError('Что-то пошло не так!'));
    }
  });
};

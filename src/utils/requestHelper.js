import {
  disableLoading,
  enableLoading,
  showError,
} from '../store/actions/countryListActionCreators';

const makeRequest = (dispatch, request) => {
  dispatch(enableLoading());
  try {
    request();
  } catch (e) {
    dispatch(showError(e.message));
  }
  dispatch(disableLoading());
};

export default makeRequest;

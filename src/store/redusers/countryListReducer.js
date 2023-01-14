import {
    CLEAR_ERROR,
    DISABLE_LOADING,
    ENABLE_LOADING,
    FETCH_COUNTRY_SUCCESS,
    SET_SELECTED_COUNTRY,
    SHOW_ERROR
} from "../actions/countryListActions";

const initialState = {
    list: [],
    selectedCountry: null,
    loading: false,
    error: null,
}

export const countryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case SET_SELECTED_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }
        case SHOW_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        case ENABLE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case DISABLE_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}
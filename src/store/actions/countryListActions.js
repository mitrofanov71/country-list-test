import {addCountry, changeCountry, getCountry, removeCountry} from "../../api/countryList";

export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const ENABLE_LOADING = 'ENABLE_LOADING'
export const DISABLE_LOADING = 'DISABLE_LOADING'
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY'

export const showError = (error) => ({type: SHOW_ERROR, payload: error})
export const clearError = () => ({type: CLEAR_ERROR})
export const fetchCountrySuccess = (data) => ({type: FETCH_COUNTRY_SUCCESS, payload: data})
export const enableLoading = () => ({type: ENABLE_LOADING})
export const disableLoading = () => ({type: DISABLE_LOADING})
export const setSelectedCountry = (id) => {console.log('id', id);return {type: SET_SELECTED_COUNTRY, payload: id}}
export const resetSelectedCountry = () => ({type: SET_SELECTED_COUNTRY, payload: null})

export const fetchCountry = () => {
    return async dispatch => {
        dispatch(enableLoading())
        try {
           const result = await getCountry()
           if (result.data && result.status === 200) {
               dispatch(fetchCountrySuccess(result.data))
           } else {
               dispatch(showError('Что-то пошло не так!'))
           }
        } catch (e) {
            dispatch(showError(e.message))
        }
        dispatch(disableLoading())
    }
}

export const removeCountryAction = (id) => {
    return async dispatch => {
        dispatch(enableLoading())
        try {
            const result = await removeCountry(id)
            if (result.status === 200) {
                dispatch(fetchCountry())
            } else {
                dispatch(showError('Что-то пошло не так!'))
            }
        } catch (e) {
            dispatch(showError(e.message))
        }
        dispatch(disableLoading())
    }
}

export const addCountryAction = (data) => {
    return async dispatch => {
        dispatch(enableLoading())
        try {
            const result = await addCountry(data)
            console.log(result)
            if (result.status === 201) {
                dispatch(fetchCountry())
            } else {
                dispatch(showError('Что-то пошло не так!'))
            }
        } catch (e) {
            dispatch(showError(e.message))
        }
        dispatch(disableLoading())
    }
}

export const changeCountryAction = (data) => {
    return async dispatch => {
        dispatch(enableLoading())
        try {
            const result = await changeCountry(data)
            console.log(result)
            if (result.status === 201) {
                dispatch(fetchCountry())
            } else {
                dispatch(showError('Что-то пошло не так!'))
            }
        } catch (e) {
            dispatch(showError(e.message))
        }
        dispatch(disableLoading())
    }
}

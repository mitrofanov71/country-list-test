import {fetchCountry, showError} from "../store/actions/countryListActions";

export const makeRequest = async (request, onSucces, onError) => {
    try {
        const result = await request
        console.log(result)
        if (result.status === 201) {
            dispatch(fetchCountry())
        } else {
            dispatch(showError('Что-то пошло не так!'))
        }
    } catch (e) {
        dispatch(showError(e.message))
    }
}
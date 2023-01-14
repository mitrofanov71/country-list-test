import axios from "axios";

const BACK_DOMAIN = 'https://k-ampus.dev'
const BACK_PORT = 3000

const BACK_URL = BACK_DOMAIN + ':' + BACK_PORT

export const getCountry = async () => {
    return await axios.get(`${BACK_URL}/api/country`)
}

export const addCountry = async (data) => {
    return await axios.post(`${BACK_URL}/api/country`, data)
}

export const changeCountry = async (data) => {
    return await axios.put(`${BACK_URL}/api/country`, data)
}

export const removeCountry = async (id) => {
    return await axios.delete(`${BACK_URL}/api/country`, {data: {id}})
}
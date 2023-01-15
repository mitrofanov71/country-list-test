import axios from 'axios';

const BACK_DOMAIN = 'https://k-ampus.dev';
const BACK_PORT = 3000;

const BACK_URL = `${BACK_DOMAIN}:${BACK_PORT}`;

export const getCountry = async () => axios.get(`${BACK_URL}/api/country`);

export const addCountry = async (data) => axios.post(`${BACK_URL}/api/country`, data);

export const changeCountry = async (data) => axios.put(`${BACK_URL}/api/country/${data.id}`, data);

export const removeCountry = async (id) => axios.delete(`${BACK_URL}/api/country/${id}`);

import { combineReducers } from '@reduxjs/toolkit';
import countryListReducer from './countryListReducer';

const rootReducer = combineReducers({ country: countryListReducer });

export default rootReducer;

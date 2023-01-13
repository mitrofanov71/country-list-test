import {combineReducers} from "@reduxjs/toolkit";
import {countryListReducer} from "./countryListReducer";

export const rootReducer = combineReducers({country: countryListReducer})
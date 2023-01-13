import { createStore } from 'redux'
import {rootReducer} from "./redusers/rootReduser";

export const store = createStore(rootReducer)
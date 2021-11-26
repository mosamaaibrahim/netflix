import { combineReducers } from "redux";

//Reducers

import movies from './movies'
import tvs from './tvs'
import people from './people'
const rootReducer = combineReducers({
    movies,
    tvs,
    people
});

export default rootReducer;
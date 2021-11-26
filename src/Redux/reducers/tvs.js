import { INIT_TVS } from "../actions/tvs";
const initialState = {
    topRated: [],
    tvLatest: []
}
const tvs = (state = { ...initialState }, action) => {
    switch (action.type) {
        case INIT_TVS: {

            return {
                ...state,
                ...action.data
            }
        }
        default: return state;
    }

}
export default tvs;
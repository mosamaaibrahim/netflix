import { INIT_PEOPLE } from "../actions/people";
const initialState = {
    popular: []
}
const people = (state = { ...initialState }, action) => {
    switch (action.type) {
        case INIT_PEOPLE: {

            return {
                ...state,
                popular: [...action.data]
            }
        }
        default: return state;
    }

}
export default people;
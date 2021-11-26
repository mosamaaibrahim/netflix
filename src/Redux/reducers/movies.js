import { INIT_MOVIES } from "../actions/movies";
const initialState = {
    nowPlaying: [],
    popularMovies: [],
    topRated: [],
    upcomingMovies: []
}
const movies = (state = { ...initialState }, action) => {
    switch (action.type) {
        case INIT_MOVIES: {

            return {
                ...state,
                ...action.data
            }
        }
        default: return state;
    }

}
export default movies;
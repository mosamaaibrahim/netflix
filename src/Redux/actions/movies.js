import { _getNowPlaying, _getPopular, _getToprated, _getUpcoming } from '../../API/moviesApi'
export const INIT_MOVIES = 'INIT_MOVIES'
const setMovies = (data) => {
    return {
        type: INIT_MOVIES,
        data
    }
}
export const getInitMovies = () => {
    return (dispatch, getState) => {
        const NowPlaying = _getNowPlaying();
        const PopularMovies = _getPopular();
        const TopRated = _getToprated();
        const UpcomingMovies = _getUpcoming();
        Promise.all([NowPlaying, PopularMovies, TopRated, UpcomingMovies]).then((values) => {
            dispatch(setMovies({
                nowPlaying: values[0].data.results,
                popularMovies: values[1].data.results,
                topRated: values[2].data.results,
                upcomingMovies: values[3].data.results
            }))
        });

    }
}
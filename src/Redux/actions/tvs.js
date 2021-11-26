import { _getTvLatest, _getTvToprated } from '../../API/tvApi'
export const INIT_TVS = 'INIT_TVS'
const setTvs = (data) => {
    return {
        type: INIT_TVS,
        data
    }
}
export const getInitTvs = () => {
    return (dispatch, getState) => {
        const TvLatest = _getTvLatest();
        const PopularTv = _getTvToprated();

        Promise.all([TvLatest, PopularTv]).then((values) => {
            dispatch(setTvs({
                tvLatest: values[0].data.results,
                topRated: values[1].data.results

            }))
        });

    }
}
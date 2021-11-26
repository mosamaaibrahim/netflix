import { _getPopularPeople } from '../../API/peopleApi'
export const INIT_PEOPLE = 'INIT_PEOPLE'
const setPeople = (data) => {
    return {
        type: INIT_PEOPLE,
        data
    }
}
export const getInitPeople = () => {
    return (dispatch, getState) => {
        _getPopularPeople().then(res => dispatch(setPeople(res.data.results)));


    }
}
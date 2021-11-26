import { store } from "../../index";
import { getInitMovies } from './movies'
import { getInitTvs } from "./tvs";
import { getInitPeople } from './people'
// let dispatch = store.dispatch
export const getInit = () => {

    store.dispatch(getInitMovies())
    store.dispatch(getInitTvs())
    store.dispatch(getInitPeople())
}
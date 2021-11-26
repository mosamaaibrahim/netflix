
import axios from 'axios'
import { API_KEY } from '../Utils/constants'

export function _getPopularPeople() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `/person/popular?api_key=${API_KEY}`,
            data: {},
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
            },
        })
            .then((responseText) => {
                res(responseText);
            })
            .catch((error) => {
                console.error(`_getPopularPeople : ${error}`);
                rej(error);
            });
    });
}
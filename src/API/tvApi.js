import axios from 'axios'
import { API_KEY } from '../Utils/constants';


export function _getTvLatest() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `/tv/popular?api_key=${API_KEY}`,
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
                console.error(`_getTvLatest : ${error}`);
                rej(error);
            });
    });
}
export function _getTvToprated() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `/tv/top_rated?api_key=${API_KEY}`,
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
                console.error(`_getTvToprated : ${error}`);
                rej(error);
            });
    });
}

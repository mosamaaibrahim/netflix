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

export function _getTvDetails(id) {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `/tv/${id}?api_key=${API_KEY}`,
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
                console.error(`_getTvDetails : ${error}`);
                rej(error);
            });
    });
}

export function _getVideos(id) {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `/tv/${id}/videos?api_key=${API_KEY}`,
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
                console.error(`_getVideos : ${error}`);
                rej(error);
            });
    });
}

export function _getTvCast(id) {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `/tv/${id}/credits?api_key=${API_KEY}`,
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
                console.error(`_getTvCast : ${error}`);
                rej(error);
            });
    });
}
import axios from 'axios'
import { API_KEY } from '../Utils/constants'

export function _getUpcoming() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `movie/upcoming?api_key=${API_KEY}`,
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
                console.error(`_getUpcoming : ${error}`);
                rej(error);
            });
    });
}

export function _getToprated() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `movie/top_rated?api_key=${API_KEY}`,
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
                console.error(`_getToprated : ${error}`);
                rej(error);
            });
    });
}

export function _getPopular() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `movie/popular?api_key=${API_KEY}`,
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
                console.error(`_getPopular : ${error}`);
                rej(error);
            });
    });
}


export function _getNowPlaying() {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `movie/now_playing?api_key=${API_KEY}`,
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
                console.error(`_getNowPlaying : ${error}`);
                rej(error);
            });
    });
}

export function _getVideos(id) {
    return new Promise((res, rej) => {
        axios({
            method: "get",
            url: `movie/${id}/videos?api_key=${API_KEY}`,
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

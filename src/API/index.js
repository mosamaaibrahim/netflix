import axios from 'axios'

axios.interceptors.request.use(
    async (config) => {
        // Do something before request is sent

        config.baseURL = 'https://api.themoviedb.org/3/'
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

import axios from "axios";

axios.defaults.withCredentials = true;

const Axios = {
    GET: (url:any) => {
        return new Promise((resolve, reject) => {
            axios.get(url).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    POST: (url:any, body:any) => {
        return new Promise((resolve, reject) => {
            axios.post(url, body).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    PUT: (url: any, body:any) => {
        return new Promise((resolve, reject) => {
            axios.put(url, body).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    DELETE: (url:any, body: any) => {
        return new Promise((resolve, reject) => {
            axios.delete(url, body).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

export default Axios;
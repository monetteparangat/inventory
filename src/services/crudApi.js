import api from './api'

// General function to make requests
const request = (method, url, data = null) => {
    const config = { method, url, data }
    return api(config)
}

export const get = (url) => {
    return request('get', url)
}

export const post = (url, data) => {
    return request('post', url, data)
}

export const put = (url) => {
    return request('put', url, data)
}

export const deleteRequest = (url) => {
    return request('delete', url)
}


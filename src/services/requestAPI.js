function get(url, myHeaders) {
    return fetch(url,{
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    })
}

function post(url, data, myHeaders) {
    return fetch(url,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'default'
    })
}

const requestAPI = {
    get: get,
    post: post
};

export default requestAPI;
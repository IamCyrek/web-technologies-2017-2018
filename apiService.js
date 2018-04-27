function getApi(url) {
    return fetch(url)
        .then((response => {
            if(response.status >= 200 && response.status < 400){
                return response.json();
            }
            if (response.status === 404){
                return Promise.reject(new Error('User not found!'));
            }
            if (response.status >= 400){
                return Promise.reject(new Error('Client or Server error!'));
            }
        }))
}

function getResponse(login) {
    let url = urlBuilder('https', 'api.github.com', 'users', login);
    return getApi(url);
}

function urlBuilder(protocol, domain, path, login) {
    return protocol.trim() + '://' + domain.trim()
        + '/' + path.trim() + '/' + login.trim();
}

export {getResponse}

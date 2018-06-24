const baseUrl = 'https://api.github.com/users/';
const allReposUrl = 'https://api.github.com/search/repositories?q='
const topStarUrl = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=5'
const topGrowUrl = 'https://api.github.com/search/repositories?q=trending%3A%3E0&sort=stars&per_page=5&since=weekly&#39'

export const sendRequest = (login) => {
    return fetch(baseUrl + login)
        .then(res => res.json())
}

export const sendRequestOrgs = (login)  => {
    return fetch(baseUrl + login + "/orgs")
        .then(res => res.json())

}

export const sendRequestFollowers = (login)  => {
    return fetch(baseUrl + login + "/followers")
        .then(res => res.json())
}

export const sendRequestRepos = (login)  => {
    return fetch(baseUrl + login + "/repos")
        .then(res => res.json())   
}

export const sendRequestAllRepos = (login)  => {
    return fetch(allReposUrl + login)
        .then(res => res.json())   
}

export const sendRequestStarsRep = ()  => {
    return fetch(topStarUrl)
        .then(res => res.json())   
}

export const sendRequestGrowRep = ()  => {
    return fetch(topGrowUrl)
        .then(res => res.json())   
}


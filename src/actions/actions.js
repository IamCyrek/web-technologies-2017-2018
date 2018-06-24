import * as constatnts from '../Constants'


export const fetchUserRequest = (username) => ({
    type: constatnts.GET_USER_REQUEST,
    username: username
})

export const fetchUserSuccess = (data) => ({
    type: constatnts.GET_USER_SUCCESS,
    user: data
})

export const fetchOrgsRequest = (username) => ({
    type: constatnts.GET_ORGS_REQUEST,
    username: username
})

export const fetchOrgsSuccess = (data) => ({
    type: constatnts.GET_ORGS_SUCCESS,
    Orgs: data
})

export const fetchFollowersRequest = (username) => ({
    type: constatnts.GET_FOLLOWERS_REQUEST,
    username: username
})

export const fetchFollowersSuccess = (data) => ({
    type: constatnts.GET_FOLLOWERS_SUCCESS,
    Followers: data
})

export const fetchReposRequest = (username) => ({
    type: constatnts.GET_REPOS_REQUEST,
    username: username
})

export const fetchReposSuccess = (data) => ({
    type: constatnts.GET_REPOS_SUCCESS,
    Repos: data
})

export const fetchAllReposRequest = (username) => ({
    type: constatnts.GET_ALL_REPOS_REQUEST,
    username: username
})

export const fetchAllReposSuccess = (data) => ({
    type: constatnts.GET_ALL_REPOS_SUCCESS,
    Repos: data
})

export const fetchStarsReposRequest = () => ({
    type: constatnts.GET_STARS_REPOS_REQUEST,
})

export const fetchGrowReposRequest = () => ({
    type: constatnts.GET_GROW_REPOS_REQUEST,
})

export const fetchStarsReposSucces = (data) => ({
    type: constatnts.GET_STARS_REPOS_SUCCESS,
    Repos: data
})

export const fetchGrowReposSuccess = (data) => ({
    type: constatnts.GET_GROW_REPOS_SUCCESS,
    Repos: data
})


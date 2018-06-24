const getSuccess = (result, dispatch) => {
    dispatch({
        type: 'GET_SUCCESS',
        data: {
            userImg: result.avatar_url,
            userName: result.name,
            userLogin: result.login,
            userBio: result.bio,
            userCompany: result.company,
            userLocation: result.location,
            userEmail: result.email,
            userSocial: result.blog,
            isError: false,
            followersUrl: result.followers_url,
            reposUrl: result.repos_url,
            organizationsUrl: result.organizations_url
        }
    })
};

const getError = (err, dispatch) => {
    if (err.message === 'GET_ERROR'){
        dispatch({
            type: 'GET_ERROR',
            isError: true,
            errName: '404 NOT FOUND'
        });
    }
    else{
            dispatch({
                type: 'SERVER_ERROR',
                isError: true,
                errName: 'There are some server errors'
            });
        }
};

const thunkAPI = {
    getSuccess: getSuccess,
    getError: getError
};

export default thunkAPI;
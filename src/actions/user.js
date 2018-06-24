import githubAPI from '../services/githubAPI';
import thunkAPI from '../services/thunkAPI';

export const fetchSuccess = () => (dispatch) => {
    const text = document.getElementById('textInput');
    githubAPI.getUser(text.value).then( (result) =>{
        thunkAPI.getSuccess(result, dispatch)
        })
        .catch((err) => {
            thunkAPI.getError(err, dispatch);
            });
};


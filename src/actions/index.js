import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const getPerson = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')
        .then(resp => {
            dispatch(fetchSuccess(resp.data.results[0]));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (person) => {
    return({type:FETCH_SUCCESS, payload: person});
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}
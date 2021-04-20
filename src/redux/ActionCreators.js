import * as ActionTypes from './ActionTypes';

export const fetchAppsList = () => (dispatch) => {

    dispatch(appsListLoading(true));

    return fetch('https://api.npoint.io/adf6676a313fa01f787d')
    .then(response => {
        if (response.ok) {
            return response;
        } 
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(appsList => dispatch(addAppsList(appsList)))
    .catch(error => dispatch(appsListFailed(error.message)));
}

export const appsListLoading = () => ({
    type: ActionTypes.APPS_LOADING
});

export const appsListFailed = (errmess) => ({
    type: ActionTypes.APPS_FAILED,
    payload: errmess
});

export const addAppsList = (appsList) => ({
    type: ActionTypes.ADD_APPS,
    payload: appsList
});


export const fetchAppData = () => (dispatch) => {

    dispatch(appDataLoading(true));

    return fetch('https://api.npoint.io/baf8dba5974d29aa094b')
    .then(response => {
        if (response.ok) {
            return response;
        } 
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(appData => dispatch(addAppData(appData)))
    .catch(error => dispatch(appDataFailed(error.message)));
}

export const appDataLoading = () => ({
    type: ActionTypes.APPS_DATA_LOADING
});

export const appDataFailed = (errmess) => ({
    type: ActionTypes.APPS_DATA_FAILED,
    payload: errmess
});

export const addAppData = (appData) => ({
    type: ActionTypes.ADD_APPS_DATA,
    payload: appData
});
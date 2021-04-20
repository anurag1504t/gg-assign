import * as ActionTypes from './ActionTypes';

export const Data = (state = { isLoading: true, errMess: null, appData:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPS_DATA:
            return {...state, isLoading: false, errMess: null, appData: action.payload};

        case ActionTypes.APPS_DATA_LOADING:
            return {...state, isLoading: true, errMess: null, appData: []}

        case ActionTypes.APPS_DATA_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
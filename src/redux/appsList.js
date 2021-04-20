import * as ActionTypes from './ActionTypes';

export const Apps = (state = { isLoading: true, errMess: null, appsList:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPS:
            return {...state, isLoading: false, errMess: null, appsList: action.payload};

        case ActionTypes.APPS_LOADING:
            return {...state, isLoading: true, errMess: null, appsList: []}

        case ActionTypes.APPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
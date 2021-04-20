import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Apps } from './appsList';
import { Data } from './appData';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            appsList: Apps,
            appData: Data
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
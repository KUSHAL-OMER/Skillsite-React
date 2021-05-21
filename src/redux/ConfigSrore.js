import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {ProfCard} from './profCard';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            user: ProfCard
        }),
        applyMiddleware(thunk, logger));
    return ( store );
}
import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';
import {errorReducer} from './errorReducer';
import {GetStateUtils} from './getStateUtils';


const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer

})
//@ts-ignore
export const store = legacy_createStore(rootReducer, GetStateUtils());

export type StateType = ReturnType<typeof rootReducer>;

store.subscribe(()=>{
    localStorage.setItem('stateCounter', JSON.stringify(store.getState()))
})
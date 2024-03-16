import {GetStateUtils} from './getStateUtils';

export type ErrorReducerStateType = {
    errorMaxCounter: boolean
    errorMinCounter: boolean
    errorStep: boolean
}

const initialState: ErrorReducerStateType = GetStateUtils().error

export const errorReducer = (state = initialState, action: ActionErrorType): ErrorReducerStateType => {
    switch (action.type){
        case "SET-ERROR-MAX-COUNTER": {
            return {...state, errorMaxCounter: action.payload.errorMaxCounter}
        }
        case "SET-ERROR-MIN-COUNTER": {
            return {...state, errorMinCounter: action.payload.errorMinCounter}
        }
        case "SET-ERROR-STEP": {
            return {...state, errorStep: action.payload.errorStep}
        }
        default: return state
    }
}

type ActionErrorType =  ReturnType<typeof setErrorMaxCounterAC> | ReturnType<typeof setErrorMinCounterAC>
    | ReturnType<typeof setErrorStepAC>

export const setErrorMaxCounterAC = (value: boolean)=>
    ({type: "SET-ERROR-MAX-COUNTER" as const, payload:{errorMaxCounter: value}})
export const setErrorMinCounterAC = (value: boolean)=>
    ({type: "SET-ERROR-MIN-COUNTER" as const, payload:{errorMinCounter: value}})
export const setErrorStepAC = (value: boolean)=>
    ({type: "SET-ERROR-STEP" as const, payload:{errorStep: value}})
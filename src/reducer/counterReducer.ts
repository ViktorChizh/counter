import {GetStateUtils} from './getStateUtils';


export type CounterReducerStateType = {
    maxCounter: number
    minCounter: number
    step: number
    currentCounter: number
    settingCounter: boolean
}

const initialState: CounterReducerStateType = GetStateUtils().counter

export const counterReducer = (state = initialState, action: ActionCounterType): CounterReducerStateType => {
    switch (action.type){
        case "MAX-COUNTER": {
            return {...state, maxCounter: action.payload.maxCounter}
        }
        case "MIN-COUNTER": {
            return {...state, minCounter: action.payload.minCounter}
        }
        case "STEP": {
            return {...state, minCounter: action.payload.step}
        }
        case "INC-COUNTER": {
            return {...state, currentCounter: state.currentCounter+1}
        }
        case "SET-COUNTER": {
            return {...state, currentCounter: action.payload.currentCounter}
        }
        case "SET-SETTING": {
            return {...state, settingCounter: !state.settingCounter}
        }
        default: return state
    }
}

type ActionCounterType = ReturnType<typeof maxCounterAC> | ReturnType<typeof minCounterAC> | ReturnType<typeof stepAC>
    | ReturnType<typeof incCounterAC> | ReturnType<typeof setCounterAC>  | ReturnType<typeof setSettingAC>

export const maxCounterAC = (value: number) => ({type: "MAX-COUNTER" as const, payload:{maxCounter: value}})
export const minCounterAC = (value: number) => ({type: "MIN-COUNTER" as const, payload:{minCounter: value}})
export const stepAC = (value: number) => ({type: "STEP" as const, payload:{step: value}})
export const incCounterAC = ()=> ({type: "INC-COUNTER" as const})
export const setCounterAC = (value: number)=> ({type: "SET-COUNTER" as const, payload:{currentCounter: value}})

export const setSettingAC = ()=> ({type: "SET-SETTING" as const})
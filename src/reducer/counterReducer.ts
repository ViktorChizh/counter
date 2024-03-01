const getMaxCounter = () => {
    let maxCounter = localStorage.getItem('maxCounter')
    if (maxCounter === null ) {
        maxCounter = '5'
        localStorage.setItem('maxCounter', JSON.stringify(maxCounter))
        return +maxCounter
    }
    return +maxCounter
}
const getMinCounter = () => {
    let minCounter = localStorage.getItem('minCounter')
    if (minCounter === null ) {
        minCounter = '0'
        localStorage.setItem('minCounter', JSON.stringify(minCounter))
        return +minCounter
    }
    return +minCounter
}
const getStep = () => {
    let step = localStorage.getItem('step')
    if (step === null ) {
        step = '1'
        localStorage.setItem('step', JSON.stringify(step))
        return +step
    }
    return +step
}

export type StateType = {
    maxCounter: number
    minCounter: number
    step: number
    counter: number
    errorMaxCounter: boolean
    errorMinCounter: boolean
    errorStep: boolean
    setting: boolean
}

const initialState: StateType = {
    maxCounter: getMaxCounter(),
    minCounter: getMinCounter(),
    step: getStep(),

    counter: getMinCounter(),

    errorMaxCounter: false,
    errorMinCounter: false,
    errorStep: false,

    setting: false
}

export const counterReducer = (state = initialState, action: ActionType): StateType => {
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
            return {...state, counter: state.counter+1}
        }
        case "SET-COUNTER": {
            return {...state, counter: state.minCounter}
        }
        case "SET-ERROR-MAX-COUNTER": {
            return {...state, errorMaxCounter: action.payload.errorMaxCounter}
        }
        case "SET-ERROR-MIN-COUNTER": {
            return {...state, errorMinCounter: action.payload.errorMinCounter}
        }
        case "SET-ERROR-STEP": {
            return {...state, errorStep: action.payload.errorStep}
        }
        case "SET-SETTING": {
            return {...state, setting: !state.setting}
        }
        default: return state
    }
}

type ActionType = ReturnType<typeof maxCounterAC> | ReturnType<typeof minCounterAC> | ReturnType<typeof stepAC>
    | ReturnType<typeof incCounterAC> | ReturnType<typeof setCounterAC> | ReturnType<typeof setErrorMaxCounterAC>
    | ReturnType<typeof setErrorMinCounterAC> | ReturnType<typeof setErrorStepAC> | ReturnType<typeof setSettingAC>


export const maxCounterAC = (value: number) => ({type: "MAX-COUNTER" as const, payload:{maxCounter: value}})
export const minCounterAC = (value: number) => ({type: "MIN-COUNTER" as const, payload:{minCounter: value}})
export const stepAC = (value: number) => ({type: "STEP" as const, payload:{step: value}})
export const incCounterAC = ()=> ({type: "INC-COUNTER" as const})
export const setCounterAC = ()=> ({type: "SET-COUNTER" as const})
export const setErrorMaxCounterAC = (value: boolean)=>
    ({type: "SET-ERROR-MAX-COUNTER" as const, payload:{errorMaxCounter: value}})
export const setErrorMinCounterAC = (value: boolean)=>
    ({type: "SET-ERROR-MIN-COUNTER" as const, payload:{errorMinCounter: value}})
export const setErrorStepAC = (value: boolean)=>
    ({type: "SET-ERROR-STEP" as const, payload:{errorStep: value}})
export const setSettingAC = ()=> ({type: "SET-SETTING" as const})
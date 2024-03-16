import {StateType} from './Store';

export const GetStateUtils = (): StateType => {
    let state: StateType
    let xxx = localStorage.getItem('stateCounter')
    if (xxx !== null) {
        state = JSON.parse(xxx)
        return {
            counter: {
                minCounter: state.counter.minCounter || 0,
                maxCounter: state.counter.maxCounter || 5,
                step: state.counter.step || 1,
                currentCounter: state.counter.currentCounter || 0,
                settingCounter: state.counter.settingCounter || false
            },
            error: {
                errorStep: false,
                errorMinCounter: false,
                errorMaxCounter: false
            }
        }
    }
    return {
        counter: {
            minCounter: 0,
            maxCounter: 5,
            step: 1,
            currentCounter: 0,
            settingCounter: false
        },
        error: {
            errorStep: false,
            errorMinCounter: false,
            errorMaxCounter: false
        }
    }
}

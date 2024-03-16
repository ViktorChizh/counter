import React from 'react';
import {ButtonMUI} from './ButtonMUI';
import {InputMUI} from './InputMUI';
import {Paper} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {
    CounterReducerStateType, incCounterAC, maxCounterAC, minCounterAC, setCounterAC, setSettingAC, stepAC
} from '../reducer/counterReducer';
import {StateType} from '../reducer/Store';
import {
    ErrorReducerStateType, setErrorMaxCounterAC, setErrorMinCounterAC, setErrorStepAC
} from '../reducer/errorReducer';

export const SingleCounter = () => {
    const counterState = useSelector<StateType, CounterReducerStateType>(state => state.counter)
    const errorState = useSelector<StateType, ErrorReducerStateType>(state => state.error)
    const {maxCounter, minCounter, step, currentCounter, settingCounter} = counterState
    const {errorMaxCounter, errorMinCounter, errorStep} = errorState

    const dispatch = useDispatch()

    let isDisabled = errorMaxCounter || errorMinCounter || errorStep

    const maxCounterHandler = (value: string) => {
        if (+value < minCounter + step || value === '') {
            dispatch(setErrorMaxCounterAC(true))
        } else {
            dispatch(setErrorMaxCounterAC(false))
            dispatch(maxCounterAC(+value))
            if(+value<currentCounter){dispatch(setCounterAC(+value))}
        }
    }
    const minCounterHandler = (value: string) => {
        if (+value >= maxCounter || +value < 0 || value === '') {
            dispatch(setErrorMinCounterAC(true))
        } else {
            dispatch(setErrorMinCounterAC(false))
            dispatch(minCounterAC(+value))
            if (+value>currentCounter){dispatch(setCounterAC(+value))}
        }
    }
    const stepHandler = (value: string) => {
        if (value === '' || +value > maxCounter - minCounter || +value <= 0) {
            dispatch(setErrorStepAC(true))
        } else {
            dispatch(setErrorStepAC(false))
            dispatch(stepAC(+value))
        }
    }

    const incCounter = () => {
        dispatch(incCounterAC())
    }
    const resetCounterHandler = () => {
        dispatch(setCounterAC(minCounter))
    }
    const settingHandler = () => {
        dispatch(setSettingAC())
    }
    const saveSettingHandler = () => {
        dispatch(setSettingAC())
    }

    return (
        <Paper elevation={5} className="singlePaper">
            {!settingCounter
                ? <div className="box">
                    <p style={{color: currentCounter < maxCounter ? 'darkblue' : 'red'}}
                       className="counter">{currentCounter}</p>
                    <div className="buttonBox">
                        <ButtonMUI name={`inc +${step}`}
                                   color={'success'}
                                   onClick={incCounter}
                                   isDisabled={currentCounter >= maxCounter}/>
                        <ButtonMUI name={'reset'} color={'error'}
                                   onClick={resetCounterHandler}
                                   isDisabled={currentCounter === minCounter}/>
                        <ButtonMUI name={'set'}
                                   onClick={settingHandler}
                                   isDisabled={false}/>
                    </div>
                </div>
                : <div className="box">
                    <InputMUI type={'number'}
                              label={'maxCounter'}
                              setInputValue={maxCounterHandler}
                              startValue={maxCounter.toString()}
                              error={errorMaxCounter}
                              isDisabled={isDisabled}/>
                    <InputMUI type={'number'}
                              label={'minCounter'}
                              setInputValue={minCounterHandler}
                              startValue={minCounter.toString()}
                              error={errorMinCounter}
                              isDisabled={isDisabled}/>
                    <InputMUI type={'number'}
                              label={'step'}
                              setInputValue={stepHandler}
                              startValue={step.toString()}
                              error={errorStep}
                              isDisabled={isDisabled}/>
                    <ButtonMUI name={'set'}
                               size={'large'}
                               style={{width: '75%'}}
                               onClick={saveSettingHandler}
                               isDisabled={isDisabled}/>
                </div>}
        </Paper>
    )
}
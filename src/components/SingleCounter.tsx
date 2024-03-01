import React, {useEffect} from 'react';
import {ButtonMUI} from './ButtonMUI';
import {InputMUI} from './InputMUI';
import {Paper} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {
    incCounterAC,
    maxCounterAC,
    minCounterAC,
    setCounterAC,
    setErrorMaxCounterAC, setErrorMinCounterAC, setErrorStepAC, setSettingAC,
    StateType,
    stepAC
} from '../reducer/counterReducer';
import {StoreType} from '../reducer/Store';

export const SingleCounter = () => {
    const state = useSelector<StoreType, StateType>(state => state.counter)
    const {maxCounter, minCounter, step, counter, errorMaxCounter, errorMinCounter, errorStep, setting} = state

    const dispatch = useDispatch()

    let isDisabled = errorMaxCounter || errorMinCounter || errorStep

    const maxCounterHandler = (value: string) => {
        if (+value < minCounter + step || value === '') {
            dispatch(setErrorMaxCounterAC(true))
        } else {
            dispatch(setErrorMaxCounterAC(false))
            dispatch(maxCounterAC(+value))
        }
    }
    const minCounterHandler = (value: string) => {
        if (+value >= maxCounter || +value < 0 || value === '') {
            dispatch(setErrorMinCounterAC(true))
        } else {
            dispatch(setErrorMinCounterAC(false))
            dispatch(minCounterAC(+value))
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
        dispatch(setCounterAC())
    }
    const settingHandler = () => {
        dispatch(setSettingAC())
    }
    const saveSettingHandler = () => {
        localStorage.setItem('maxCounter', JSON.stringify(maxCounter))
        localStorage.setItem('minCounter', JSON.stringify(minCounter))
        localStorage.setItem('step', JSON.stringify(step))
        dispatch(setSettingAC())
    }

    useEffect(() => {
        dispatch(setCounterAC())
    }, [dispatch, minCounter, maxCounter, step])

    return (
        <Paper elevation={5} className='singlePaper'>
            {!setting
                ? <div className="box">
                    <p style={{color: counter < maxCounter ? 'darkblue' : 'red'}} className="counter">{counter}</p>
                    <div className="buttonBox">
                        <ButtonMUI name={`inc +${step}`}
                                   color={'success'}
                                   onClick={incCounter}
                                   isDisabled={counter >= maxCounter}/>
                        <ButtonMUI name={'reset'} color={'error'}
                                   onClick={resetCounterHandler}
                                   isDisabled={counter === minCounter}/>
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
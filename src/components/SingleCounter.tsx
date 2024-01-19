import React, {useEffect, useState} from 'react';
import {ButtonMUI} from './ButtonMUI';
import {InputMUI} from './InputMUI';
import {Paper} from '@mui/material';

export const SingleCounter = () => {
    // Либо получаем сохраненные значения, либо присваиваем дефолтные (если впервые загрузили)
    const [maxCounter, setMaxCounter] = useState<number>(Number(localStorage.getItem('maxCounter')) || 5)
    const [minCounter, setMinCounter] = useState<number>(Number(localStorage.getItem('minCounter')) || 0)
    const [step, setStep] = useState<number>(Number(localStorage.getItem('step')) || 1)

    const [errorMaxCounter, setErrorMaxCounter] = useState<boolean>(false)
    const [errorMinCounter, setErrorMinCounter] = useState<boolean>(false)
    const [errorStep, setErrorStep] = useState<boolean>(false)

    const isDisabled = errorMaxCounter || errorMinCounter || errorStep

    const maxCounterHandler = (value: string) => {
        if (+value < minCounter + step || value === '') {
            setErrorMaxCounter(true)
        } else {
            setErrorMaxCounter(false)
            setMaxCounter(+value)
        }
    }
    const minCounterHandler = (value: string) => {
        if (+value >= maxCounter || +value < 0 || value === '') {
            setErrorMinCounter(true)
        } else {
            setErrorMinCounter(false)
            setMinCounter(+value)
        }
    }
    const stepHandler = (value: string) => {
        if (value === '' || +value > maxCounter - minCounter || +value <= 0) {
            setErrorStep(true)
        } else {
            setErrorStep(false)
            setStep(+value)
        }
    }
    const [counter, setCounter] = useState(minCounter)
    const [setting, setSetting] = useState(false)

    const incCounter = () => {
        setCounter(prev => prev + 1)
    }
    const resetCounterHandler = () => {
        setCounter(minCounter)
    }
    const settingHandler = () => {
        setSetting(!setting)
    }
    const saveSettingHandler = () => {
        localStorage.setItem('maxCounter', JSON.stringify(maxCounter))
        localStorage.setItem('minCounter', JSON.stringify(minCounter))
        localStorage.setItem('step', JSON.stringify(step))
        setSetting(!setting)
    }

    useEffect(() => {
        setCounter(minCounter)
    }, [minCounter, maxCounter, step])

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
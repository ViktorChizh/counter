import React, {ChangeEvent, KeyboardEvent, FC, useState} from 'react'
import TextField from '@mui/material/TextField';
import '../App.css'

type InputMUIProps = {
    type?: string
    label?: string
    startValue?: string
    isDisabled?: boolean
    error?: boolean
    setInputValue: (value: string) => void
    setOnFocus?: (focus:boolean) => void

    variant?: 'standard' | 'filled' | 'outlined'
    size?: 'small' | 'medium'
    color?: 'primary' | 'secondary' | 'success' | 'error'
    style?: { [key: string]: string }
    autoFocus?: boolean
}

export const InputMUI: FC<InputMUIProps> = ({
                                                type = 'text',
                                                label = '',
                                                startValue = '',
                                                isDisabled = false,
                                                error = false,
                                                setInputValue,
                                                setOnFocus,
                                                variant = 'outlined',
                                                color = 'primary',
                                                size = 'small',
                                                style,
                                                autoFocus = false
                                            }) => {


    const [value, setValue] = useState<string>(startValue)

    const InputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
        error && setInputValue(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        setInputValue(value)
    }
    const onFocusHandler = () => {
        setOnFocus && setOnFocus(true)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setInputValue(value)
        }
    }
    return (
        <TextField type={type}
                   value={value}
                   label={error ? `${label}: incorrect entry` : label}
                   error={error}
                   disabled={!(error || !isDisabled)}
                   variant={variant}
                   color={color}
                   size={size}
                   autoFocus={autoFocus}
                   style={{textAlign: 'center',  background: error ? '#f5e1e5' : '', borderRadius: '5px', ...style}}

                   onBlur={onBlurHandler}
                   onFocus={onFocusHandler}
                   onKeyDown={onKeyDownHandler}
                   onChange={InputHandler}
        />
    )
}
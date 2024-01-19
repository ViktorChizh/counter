import React, {FC} from 'react'
import Button from '@mui/material/Button';

type ButtonProps = {
    name: string
    isDisabled: boolean
    onClick: () => void

    variant?: 'text' | 'contained' | 'outlined'
    size?: "small" | "medium" | "large"
    color?: 'primary' | 'secondary' | 'success' | 'error'
    style?: {[key:string]: string}
}

export const ButtonMUI: FC<ButtonProps> = ({name, onClick, isDisabled, variant, color, size, style}) => {
    const ButtonHandler = () => {
        onClick()
    }
        return (
        <Button
            variant={variant ? variant : "contained"}
            color = {color ? color : 'primary'}
            size={size ? size : 'small'}
            disabled={isDisabled}
            style={style}
            onClick = {ButtonHandler}>{name}</Button>
    )
}
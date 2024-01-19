import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import {ButtonMUI} from './ButtonMUI'

const meta: Meta<typeof ButtonMUI> = {
    component: ButtonMUI

}
export default meta;

export const ViewButtonMUI = () => {
    return (
        <>
            <div style={{display: 'flex', gap: '10px', fontSize: '24px', fontWeight:'700'}}>
                COLORS:
                <ButtonMUI name={'disabled'} isDisabled={true} onClick={() => {
                }}/>
                <ButtonMUI name={'primary'} color={'primary'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'success'} color={'success'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'secondary'} color={'secondary'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'error'} color={'error'} isDisabled={false} onClick={() => {
                }}/>
            </div>
            <div style={{display: 'flex', alignItems:'flex-start', gap: '10px', marginTop: '20px', fontSize: '24px', fontWeight:'700'}}>
                SIZES:
                <ButtonMUI name={'small'} size={'small'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'medium'} size={'medium'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'large'} size={'large'}  isDisabled={false} onClick={() => {
                }}/>
            </div>
            <div style={{display: 'flex', gap: '10px', marginTop: '20px', fontSize: '24px', fontWeight:'700'}}>
                VARIANTS:
                <ButtonMUI name={'text'} variant={'text'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'contained'} variant={'contained'} isDisabled={false} onClick={() => {
                }}/>
                <ButtonMUI name={'outlined'} variant={'outlined'} isDisabled={false} onClick={() => {
                }}/>
            </div>
        </>

    )
}
const onClickHandler = action('onclick')

type Story = StoryObj<typeof ButtonMUI>;

export const ControlButtonMUI: Story = {
    args: {
        name: 'demo',
        variant: 'contained',
        onClick: onClickHandler,
        isDisabled: false,
        size: "large",
        color:'secondary'
    },
};
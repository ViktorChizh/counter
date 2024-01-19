import React from 'react'
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {InputMUI} from './InputMUI'

const meta: Meta<typeof InputMUI> = {
    component: InputMUI
}
export default meta;

export const ViewInputMUI = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                gap: '10px',
                fontSize: '24px',
                fontWeight: '700'
            }}>
                COLORS:
                <InputMUI isDisabled={true} label={'disabled'} variant={'outlined'}
                          type='number' error={false} setInputValue={() => {
                          }} startValue={'5'}/>
                <InputMUI color={'primary'} isDisabled={false} variant={'outlined'} label={'primary'}
                          type='number' error={false} setInputValue={() => {
                          }} startValue={'5'}  />
                <InputMUI color={'success'} isDisabled={false} variant={'outlined'} label={'success'}
                          type='number' error={false} setInputValue={() => {
                          }} startValue={'5'}/>
                <InputMUI color={'secondary'} isDisabled={false} variant={'outlined'} label={'secondary'}
                          type='number' error={false} setInputValue={() => {
                          }} startValue={'5'} autoFocus/>
                <InputMUI color={'error'} isDisabled={false} variant={'outlined'} label={'error'}
                          type='number' error={false} setInputValue={() => {
                          }} startValue={'5'}/>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginTop: '20px',
                fontSize: '24px',
                fontWeight: '700'
            }}>
                SIZES:
                <InputMUI size={'small'} isDisabled={false} variant={'outlined'} label={'small'} setInputValue={() => {
                }} type='number' error={false} startValue={'5'}/>
                <InputMUI size={'medium'} isDisabled={false} variant={'outlined'} label={'medium'} setInputValue={() => {
                }} type='number' error={false} startValue={'5'}/>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginTop: '20px',
                fontSize: '24px',
                fontWeight: '700'
            }}>
                VARIANTS:
                <InputMUI isDisabled={false} variant={'outlined'} label={'outlined'} setInputValue={() => {
                }} type='number' error={false} startValue={'5'}/>
                <InputMUI isDisabled={false} variant={'standard'} label={'standard'} setInputValue={() => {
                }} type='number' error={false} startValue={'5'}/>
                <InputMUI isDisabled={false} variant={'filled'} label={'filled'} setInputValue={() => {
                }} type='number' error={false} startValue={'5'}/>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginTop: '20px',
                fontSize: '24px',
                fontWeight: '700'
            }}>
                ERROR:
                <InputMUI isDisabled={false} variant={'outlined'} label={'step'} setInputValue={() => {
                }} type='number' error={true} startValue={''}/>
                <InputMUI isDisabled={false} variant={'standard'} label={'step'} setInputValue={() => {
                }} type='number' error={true} startValue={'-1'}/>
                <InputMUI isDisabled={false} variant={'filled'} label={'step'} setInputValue={() => {
                }} type='number' error={true} startValue={'-1'}/>
            </div>
        </>
    )
}

const onChangeHandler = action('onchange')

type Story = StoryObj<typeof InputMUI>;

export const ControlInputMUI: Story = {
    args: {
        type: 'number',
        label: 'minCounter',
        startValue: '5',
        isDisabled: false,
        error: false,
        setInputValue: onChangeHandler,

        size: 'small',
        color: 'secondary',
        variant: 'outlined',
        autoFocus: true
    }
}
import './style.scss'
import {ChangeEvent, useState} from "react";

type Props = {
    label: string
    inputValue: number
    setNumberValue: (value: number) => void
}

export const LabelWithInput = (
    {
        label,
        inputValue,
        setNumberValue,
    }: Props) => {

    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentInputValue = parseInt(e.currentTarget.value)
        if (!isNaN(currentInputValue) || inputValue >= 0) {
            setNumberValue(currentInputValue)
        } else {
            setNumberValue(0)
        }
    }

    return (
        <div className={'LabelWithInput'}>
            <span>{label}: </span>
            <input type="number" value={inputValue} onChange={setInputValueHandler}/>
        </div>
    )
}
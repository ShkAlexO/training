import {useEffect, useState} from "react";
import {Table} from "../../examination_2/Table/Table";
import {Progress} from "../Progress/Progress";
import {Button} from "../Button/Button";
import {Box} from "../Box/Box";
import {LabelWithInput} from "../LabelWithInput/LabelWithInput";
import './style.scss'

export const CounterSecond = () => {
    const [defaultNumber, setDefaultNumber] = useState<number>(0)
    const [defaultMaxNumber, setDefaultMaxNumber] = useState<number>(0)

    const [inputMaxNumber, setInputMaxNumber] = useState<number>(0)
    const [inputStartNumber, setInputStartNumber] = useState<number>(0)
    const [isDisabledSetButton, setIsDisabledSetButton] = useState<boolean>(true)

    const setInputMaxNumberHandler = (value: number) => {
        setInputMaxNumber(value)
    }
    const setInputStartNumberHandler = (value: number) => {
        setInputStartNumber(value)
    }
    const setDefaultValuesHandler = () => {
        setDefaultNumber(inputStartNumber)
        setDefaultMaxNumber(inputMaxNumber)
    }
    const incNumberHandler = () => {
        if (defaultNumber < defaultMaxNumber) {
            setDefaultNumber(defaultNumber + 1)
        }
    }
    const resetDefaultNumberHandler = () => setDefaultNumber(inputStartNumber)
    const isDisableHandler = (
        curNumb: number, targetNumber: number) => curNumb === targetNumber

    useEffect(() => {
        if (inputMaxNumber === 0 && inputStartNumber === 0 ) {
            setIsDisabledSetButton(true)
        } else {
            setIsDisabledSetButton(false)
        }
    }, [inputStartNumber, inputMaxNumber])

    return (
        <div className={'countWrap'}>
            <Box>
                <div className={'inputsInner'}>
                    <LabelWithInput
                        label={'Max Value'}
                        inputValue={inputMaxNumber}
                        setNumberValue={setInputMaxNumberHandler}
                    />
                    <LabelWithInput
                        label={'Start Value'}
                        inputValue={inputStartNumber}
                        setNumberValue={setInputStartNumberHandler}
                    />
                </div>

                <div className={'buttonsInner'}>
                    <Button
                        title={'set'}
                        callback={setDefaultValuesHandler}
                        disabled={isDisabledSetButton}
                    />
                </div>
            </Box>

            <Box>
                <Table defaultNumber={defaultNumber}/>
                <Progress defaultNumber={defaultNumber} defaultMaxNumber={defaultMaxNumber}/>

                <div className={'buttonsInner'}>
                    <Button
                        title={'inc'}
                        callback={incNumberHandler}
                        disabled={isDisableHandler(defaultNumber, defaultMaxNumber)}
                    />
                    <Button
                        title={'reset'}
                        callback={resetDefaultNumberHandler}
                        disabled={isDisableHandler(defaultNumber, 0)}
                    />
                </div>
            </Box>
        </div>
    )
}
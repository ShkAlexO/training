import './style.scss'
import {Table} from '../Table/Table'
import {Button} from "../Button/Button";
import {useState} from "react";

export const Counter = () => {
    let [defaultNumber, setDefaultNumber] = useState<number>(0)
    const defaultMaxNumber = 5

    const setNumberHandler = () => {
        let curNumber = defaultNumber + 1;

        if (curNumber <= defaultMaxNumber) {
            setDefaultNumber(curNumber)
        }
    }

    const resetDefaultNumberHandler = () => setDefaultNumber(0);

    const isDisabled = (currentValue: number, valueToCompare: number) => {
        return currentValue === valueToCompare;
    } 

    return (
        <div className={'counter'}>
            <Table defaultNumber={defaultNumber} defaultMaxNumber={defaultMaxNumber}/>

            <div className={'counter__btns'}>
                <Button
                    title={'inc'}
                    callback={setNumberHandler}
                    disabled={isDisabled(defaultNumber, defaultMaxNumber)}
                />
                <Button
                    title={'reset'}
                    callback={resetDefaultNumberHandler}
                    disabled={isDisabled(defaultNumber, 0)}
                />
            </div>
        </div>
    )
}
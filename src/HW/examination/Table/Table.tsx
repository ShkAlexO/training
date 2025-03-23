import './style.scss'

type Props = {
    defaultNumber: number
    defaultMaxNumber: number
}

export const Table = ({defaultNumber, defaultMaxNumber}:Props) => {
    let maxNumbCls = defaultNumber === defaultMaxNumber ? 'active' : '';

    return (
        <div className={`table ${maxNumbCls}`}>{defaultNumber}</div>
    )
}
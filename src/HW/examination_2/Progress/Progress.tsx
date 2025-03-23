import './style.scss'

type Props = {
    defaultNumber: number
    defaultMaxNumber: number
}

export const Progress = ({defaultNumber, defaultMaxNumber}: Props) => {
    let percentages = defaultNumber * (100 / defaultMaxNumber)

    return (
        <progress className={'progressBar'} max="100" value={percentages} />
    )
}
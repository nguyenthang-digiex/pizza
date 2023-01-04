type Props = {
    className?: any
}

function Next(props: Props) {
    const {className} = props
    return (
        <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
             height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
            <polyline fill="none" stroke="#000" strokeWidth="2" points="9 6 15 12 9 18"></polyline>
        </svg>
    )
}

export default Next
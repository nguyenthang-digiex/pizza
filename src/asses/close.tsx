type Props = {
    className?: any;
    onClick?: () => void
}

function Close(props: Props) {
    const {className, onClick} = props

    return (
        <svg className={className} onClick={onClick} width="50" height="50" viewBox="0 0 32 32" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="black" fillOpacity="0.04"></path>
            <path
                d="M22.0278 15.0278C22.5647 15.0278 23 15.4631 23 16.0001C23 16.537 22.5647 16.9723 22.0278 16.9723L9.97222 16.9723C9.43528 16.9723 9 16.537 9 16.0001C9 15.4631 9.43528 15.0278 9.97222 15.0278L22.0278 15.0278Z"
                fill="black"></path>
        </svg>
    )
}

export default Close
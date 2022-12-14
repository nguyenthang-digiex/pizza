type Props = {
    className?: any;
    onClick?: () => void
}

function More(props: Props) {
    const {className, onClick} = props

    return (
        <svg className={className} onClick={onClick} width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="black" fillOpacity="0.04"></path>
            <path
                d="M11.7222 16C11.7222 16.9665 10.9387 17.75 9.97217 17.75C9.00567 17.75 8.22217 16.9665 8.22217 16C8.22217 15.0335 9.00567 14.25 9.97217 14.25C10.9387 14.25 11.7222 15.0335 11.7222 16Z"
                fill="currentColor"></path>
            <path
                d="M17.7499 16C17.7499 16.9665 16.9664 17.75 15.9999 17.75C15.0334 17.75 14.2499 16.9665 14.2499 16C14.2499 15.0335 15.0334 14.25 15.9999 14.25C16.9664 14.25 17.7499 15.0335 17.7499 16Z"
                fill="currentColor"></path>
            <path
                d="M22.0277 17.75C22.9942 17.75 23.7777 16.9665 23.7777 16C23.7777 15.0335 22.9942 14.25 22.0277 14.25C21.0612 14.25 20.2777 15.0335 20.2777 16C20.2777 16.9665 21.0612 17.75 22.0277 17.75Z"
                fill="currentColor"></path>
        </svg>
    )
}

export default More
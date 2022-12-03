import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type type = "button" | "submit" | "reset";

type Props = {
    classname?: string;
    type?: type;
    onclick?: () => void;
    children?: React.ReactNode

}

const Button = (props: Props) => {
    const { classname, type, onclick, children } = props

    return (
        <div>
            <button type={type} className={classname} onClick={onclick} >{children}</button>
        </div>
    )
}

export default Button

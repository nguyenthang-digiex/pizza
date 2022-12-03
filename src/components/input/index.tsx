import {type} from '@testing-library/user-event/dist/type'
import React, {ForwardedRef} from 'react'

type type = "text" | "password" | "search";

type Props = {
    id?: string
    classname?: string
    placeholder?: string
    required?: boolean
    type?: type | string
    children?: React.ReactNode
    value?: string
    onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => any;
    onChange?: (e: string) => void | undefined
    onSubmit?: () => void
    errorMessage?: string
}

const Input = React.forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        id,
        classname,
        placeholder,
        required,
        type,
        children,
        onFocus,
        onChange,
        onSubmit,
        value,
        errorMessage
    } = props;

    const onChangInput = (e: string) => {
        onChange && onChange(e)
    }

    return (
        <div>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                className={classname}
                onFocus={onFocus}
                ref={ref}
                value={value}
                onChange={(e) => onChangInput(e.target.value)}
            >
                {children}
            </input>
            {errorMessage && (
                <div className="text-start text-rose-500 mt-1">
                    {errorMessage}
                </div>
            )}
        </div>
    )
})

export default Input

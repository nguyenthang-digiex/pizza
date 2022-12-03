import React, {useState} from 'react'
import Input from "../../../components/input";
import Button from "../../../components/button";
import {confirmPasswordValidator, emailValidator, passwordValidator} from "../../../utils/validators";
import Eye001 from "../../../asses/eye001";
import Eye002 from "../../../asses/eye002";
import {Link, useNavigate} from "react-router-dom";
import Back from "../../../asses/back";


const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        typePassword: true,
        typeConfirmPassword: true,
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleRegister = () => {
        setLoading(false)
        setTimeout(() => {
            setLoading(true)
            localStorage.setItem("save_password", JSON.stringify({email: state.email, password: state.password}))
            navigate('/auth/login')
        }, 1000)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleRegister()
    }

    return (
        <div className="pt-20">
            <form onSubmit={handleSubmit} className="w-[600px] m-auto mb-[20%]" style={{border: '1px solid #ebeaf1'}}>
                <div className='flex flex-col p-10 p-lg-15'>
                    <div className='flex flex-col justify-start items-start mr-10'>
                        <Link
                            className='relative w-6 h-6 cursor-pointer'
                            to="/auth/login"
                        >
                            <Back/>
                        </Link>
                    </div>
                    <h1 className="flex justify-center text-5xl text-[#c00a27]">
                        ĐĂNG KÝ
                    </h1>
                    <div className='flex flex-col justify-start items-start pt-5 w-[100%]'>
                        <label htmlFor="user_name">
                            <h3>
                                Username
                            </h3>
                        </label>
                        <Input
                            id="user_name"
                            classname='border-b-2 border-indigo-100 focus:outline-none focus:border-b-1 focus:border-indigo-500 w-[518px]'
                            required={true}
                            onChange={(value) => {
                                setState({
                                    ...state,
                                    email: value
                                })
                            }}
                            value={state.email}
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start pt-5'>
                        <label htmlFor="password">
                            <h3>
                                Password
                            </h3>
                        </label>
                        <div className='flex'>
                            <Input
                                id="password"
                                classname='border-b-2 border-indigo-100 focus:outline-none focus:border-b-1 focus:border-indigo-500 w-[518px]'
                                required={true}
                                type={state.typePassword ? "password" : "text"}
                                onChange={(value) => {
                                    setState({...state, password: value})
                                }}
                                value={state.password}
                            />
                            <div className='relative left-[-25px] w-6 h-6 cursor-pointer'
                                 onClick={() => setState({...state, typePassword: !state.typePassword})}>
                                {state.typePassword ? (<Eye001/>) : <Eye002/>}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start pt-5'>
                        <label htmlFor="confirm_password">
                            <h3>
                                Confirm Password
                            </h3>
                        </label>
                        <div className='flex'>
                            <Input
                                id="confirm_password"
                                classname='border-b-2 border-indigo-100 focus:outline-none focus:border-b-1 focus:border-indigo-500 w-[518px]'
                                required={true}
                                type={state.typeConfirmPassword ? "password" : "text"}
                                onChange={(value) => {
                                    setState({...state, confirmPassword: value})
                                }}
                                value={state.confirmPassword}
                            />
                            <div className='relative left-[-25px] w-6 h-6 cursor-pointer'
                                 onClick={() => setState({...state, typePassword: !state.typePassword})}>
                                {state.typeConfirmPassword ? (<Eye001/>) : <Eye002/>}
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-items-center pt-5 '>
                        {!loading ? (
                            <button
                                className='w-[518px] bg-blue-500 py-2 px-4 text-white rounded-lg hover:bg-blue-700'
                            >
                            <span className="animate-spin ">
                                Register
                            </span>
                            </button>
                        ) : (
                            <Button
                                classname='w-[518px] cursor-not-allowed py-2 px-4 text-white rounded-lg'
                                type='submit'
                            >
                            <span className="indicator-progress d-block">
                                Please wait...{" "}
                            </span>
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register

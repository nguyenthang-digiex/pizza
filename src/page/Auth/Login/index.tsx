import React, {useState} from "react";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Eye001 from "../../../asses/eye001";
import Eye002 from "../../../asses/eye002";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";

function Login() {
    const navigate = useNavigate()
    const [type, setType] = useState(true);
    const [state, setState] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false);
    const loginSchema = Yup.object()
        .shape({
            email: Yup.string()
                .trim()
                .email("Wrong email format")
                .min(3, "Minimum 3 symbols")
                .max(50, "Maximum 50 symbols")
                .required("Email is required"),
            password: Yup.string()
                .trim()
                .min(3, "Minimum 3 symbols")
                .max(50, "Maximum 50 symbols")
                .required("Password is required")
        });
    const handleLogin = () => {
        setLoading(false)
        // @ts-ignore
        const loginValue = JSON.parse(localStorage.getItem('save_password'));
        if (state.email === loginValue.email && state.password === loginValue.password) {
            setLoading(true)
            navigate('/')
            document.location.reload();
        } else {
            setLoading(true)
            setTimeout(() => {
                alert('That bai')
                setLoading(false)
                setState({
                    ...state,
                    email: "",
                    password: "",
                })
            }, 1000)
        }
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleLogin()
    }

    return (
        <div className="pt-20">
            <form onSubmit={handleSubmit} className="w-[600px] m-auto mb-[15%]" style={{border: '1px solid #ebeaf1'}}>
                <div className='flex flex-col p-10 p-lg-15'>
                    <h1 className="flex justify-center text-5xl text-[#c00a27]">
                        ĐĂNG NHẬP
                    </h1>
                    <div className='flex flex-col justify-start items-start pt-5 w-[100%]'>
                        <label htmlFor="user_name">
                            <h3>
                                Username
                            </h3>
                        </label>
                        <Input
                            id="user_name"
                            type="text"
                            classname='border-b-2 border-indigo-100  focus:outline-none focus:border-b-1 focus:border-indigo-500 w-[518px] '
                            required={true}
                            onChange={(value) => {
                                setState({...state, email: value})
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
                                type={type ? "password" : "text"}
                                onChange={(value) => {
                                    setState({...state, password: value})
                                }}
                                value={state.password}
                            />
                            <div className='relative left-[-25px] w-6 h-6 cursor-pointer'
                                 onClick={() => setType(!type)}>
                                {type ? (<Eye001/>) : <Eye002/>}
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-items-center pt-5 '>
                        {(!loading) ? (
                            <Button
                                classname='w-[518px] py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-m hover:bg-blue-700 focus:outline-none'
                            >
                            <span className="animate-spin">
                                Login
                            </span>
                            </Button>
                        ) : (
                            <Button
                                classname='w-[518px] cursor-not-allowed py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                                type='submit'
                            >
                            <span className="indicator-progress d-block">
                                Please wait...{" "}
                            </span>
                            </Button>
                        )}
                    </div>
                    <Link className='mt-5 text-[#0095E8] cursor-pointer'
                          to="/auth/register">
                        You don't have a account?
                    </Link>
                </div>
            </form>
        </div>
    )

}

export default Login;
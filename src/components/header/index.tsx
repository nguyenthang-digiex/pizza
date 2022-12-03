import {Link, useNavigate} from "react-router-dom";
import LogoImage from '../../asses/LogoPizza.png'
import IconShipper from '../../asses/shipper.svg'
import {useState} from "react";
import Logout from "../../asses/logout";


function Header() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        typeSelect: true
    })
    // @ts-ignore
    const loginValue = JSON.parse(localStorage.getItem('save_password'));

    const handleLogout = () => {
        navigate('/auth/login')
    }

    return (
        <div className="flex justify-around items-center bg-[#c00a27] min-w-[1200px] pt-8">
            <div className="flex justify-around items-center min-w-[1200px]"
                 style={{borderBottom: '1px solid #ebeaf1'}}>
                <Link id="Logo" to="/" className="flex flex-row justify-center p-5 cursor-pointer">
                    <img style={{width: '250px', height: '70px'}} src={LogoImage} alt="/"/>
                </Link>
                <div id="Text" className="flex justify-center items-center">
                    <div id="DHN" className="text-white m-5 cursor-pointer hover:border-b-2 border-y-amber-300">
                        Đặt hàng ngay
                    </div>
                    <div id="TT" className="text-white m-5 cursor-pointer hover:border-b-2 border-y-amber-300">
                        Tin tức
                    </div>
                    {!loginValue ?
                        <Link id="DN" className="text-white m-5 cursor-pointer hover:border-b-2 border-y-amber-300"
                              to="/auth/login">
                            Đăng nhập
                        </Link>
                        : (
                            <div className="text-white m-5 cursor-pointer hover:border-b-2 border-y-amber-300"
                                 onClick={handleLogout}>
                                <Logout/>
                            </div>
                        )
                    }

                </div>
                <div id="Phone" className="text-white flex flex-col">
                    <div className="flex">
                        <div id="GDH" className="mr-2 text-orange-500">
                            Gọi đặt hàng tạ
                        </div>
                        <select className="text-white bg-[#c00a27] focus:outline-none"
                                onChange={() => setState({...state, typeSelect: !state.typeSelect})}>
                            <option>Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className="text-center font-black text-3xl">
                        {state.typeSelect ? "1900 2066" : "1900 8888"}
                    </div>
                </div>
                <div id="Cart">
                    <button
                        className="flex items-center justify-center rounded-full bg-[#8ca93e] text-white w-[250px] h-[70px]">
                        <img src={IconShipper} alt='' className="mr-2"/>
                        Your cart is Empty
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
import {Link, useNavigate} from "react-router-dom";
import LogoImage from '../../asses/LogoPizza.png'
import IconShipper from '../../asses/shipper.svg'
import React, {useState} from "react";
import Logout from "../../asses/logout";
import Collapse from "../../asses/collapse";
import Expand from "../../asses/expand";


function Header() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        typeSelect: true
    })
    const [showNoti, setShowNoti] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // @ts-ignore
    const loginValue = JSON.parse(localStorage.getItem('save_password'));

    const handleLogout = () => {
        localStorage.removeItem('save_password')
        navigate('/auth/login')
    }

    function toggleeFullscreen() {
        const elem = document.documentElement
        if (!document.fullscreenElement) {
            elem.requestFullscreen().catch((err) => {
            })
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
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
                            Gọi đặt hàng tại
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
                <div id="Cart" className="relative cursor-pointer"
                     onMouseOut={() => setShowNoti(false)}
                     onMouseOver={() => setShowNoti(true)}
                >
                    <div
                        className="flex items-center justify-center rounded-full bg-[#8ca93e] text-white w-[250px] h-[70px]">
                        <img src={IconShipper} alt='' className="mr-2"/>
                        Your cart is Empty
                    </div>

                    <div
                        className="absolute left-[50%] bottom-[-63px] w-[100px] list-none overflow-hidden min-h-[52px] border-t-2 border-[#226f0b] m-auto"
                        style={{transform: 'translate(-50%,-50%)', content: ''}}>
                        {showNoti &&
                            <div className="w-inherit bg-white absolute h-[45px] "
                                 style={{
                                     transition: 'transform .3s'
                                 }}>
                                <div className="flex justify-center items-center" style={{padding: '6px 10px'}}>
                                    <span className=" pl-1 shrink-0 text-xs">0 items</span>
                                    <span className="pl-[26px] pr-[14px] text-xs shrink-0 font-bold">0<span
                                        className="underline">đ</span></span>
                                </div>
                            </div>
                        }
                    </div>

                </div>
                <button
                    onClick={() => toggleeFullscreen()}
                    style={{width: 76, height: 76}}
                    type="button"
                    className="flex items-center justify-center">
                    {isFullscreen ? <Collapse/> : <Expand/>}
                </button>
            </div>

        </div>
    )
}

export default Header
import {Link} from "react-router-dom";
import Pizza1 from "../../asses/pizza1.png";
import Pizza2 from "../../asses/pizza2.png";
import Pizza3 from "../../asses/pizza3.png";
import Pizza4 from "../../asses/pizza4.png";
import React, {useEffect, useState} from "react";
import Loading from "../../asses/loading";

function Tacos() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <div className="grid justify-items-center">
                {isLoading && <Loading/>}
            </div>
            {!isLoading &&
                <div className="flex flex-col justify-center items-center min-w-[1200px]">
                    <div id="banner_tacos"
                         className="flex flex-col justify-center items-center bg-[#ccc] h-[300px]  min-w-full">
                        <div className="text-6xl text-white font-serif">
                            Tacos
                        </div>
                        <div className="flex pt-5 ">
                            <Link to="/" className="text-white">Trang Chủ</Link>
                            <h3 className="mx-2 text-white"> {">"} Tacos</h3>

                        </div>
                    </div>
                    <div id="select" className="flex flex-col items-center bg-[#fff] h-[100px] min-w-[1200px]">
                        <div className="flex justify-between items-center min-w-[1200px] p-10 text-[#8c8c8c]"
                             style={{borderBottom: '1px solid #ebeaf1'}}>
                            <div>
                                <select
                                    className="pl-2 border border-[#8c8c8c] rounded-3xl w-auto mr-5 h-8 focus:outline-none w-[150px]">
                                    <option>Mặc định</option>
                                    <option>Xem nhiều nhất</option>
                                </select>
                                <select
                                    className="pl-2 border border-[#8c8c8c] rounded-3xl w-auto ml-5 h-8 focus:outline-none w-[100px]">
                                    <option>Show 12</option>
                                    <option>Show All</option>
                                </select>
                            </div>
                            <div>
                                <select
                                    className="pl-2 border border-[#8c8c8c] rounded-3xl w-auto ml-5 h-8 focus:outline-none w-[120px]">
                                    <option>More Filter</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="middle_tacos"
                         className="flex justify-between items-start min-h-screen min-w-[1200px] mt-10 ">
                        <div className="flex flex-col">
                            <div
                                className="flex flex-col items-center bg-[#f7f7f7] h-[430px] min-w-[250px] rounded-lg"
                                style={{borderBottom: '1px solid #ebeaf1'}}>
                                <Link to="/pizza"
                                      className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative  mt-0"
                                      style={{borderBottom: '1px solid #ebeaf1'}}>
                                    Pizza
                                </Link>
                                <Link to="/burger"
                                      className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative mt-0"
                                      style={{borderBottom: '1px solid #ebeaf1'}}>
                                    Burger
                                </Link>
                                <Link
                                    to="/salads"
                                    className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative mt-0"
                                    style={{borderBottom: '1px solid #ebeaf1'}}>
                                    Salads
                                </Link>
                                <Link
                                    to="/tacos"
                                    className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative mt-0"
                                    style={{borderBottom: '1px solid #ebeaf1'}}>
                                    Tacos
                                </Link>
                                <div
                                    className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative mt-0"
                                    style={{borderBottom: '1px solid #ebeaf1'}}>
                                    Wraps
                                </div>
                                <div
                                    className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative mt-0"
                                    style={{borderBottom: '1px solid #ebeaf1'}}>
                                    Fries
                                </div>
                                <div
                                    className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative mt-0">
                                    Drinks
                                </div>
                            </div>
                            <div>
                                <input
                                    type="search"
                                    className="mx-5 mt-10 px-5 border border-[#f7f7f7] focus:outline-none rounded-full min-w-[250px] h-[50px] bg-[#f7f7f7] focus:outline-none"
                                    placeholder="Tìm kiếm sản phẩm..."
                                />
                            </div>
                            <div className="pt-5">
                                <label className="text[#2d2b2d] font-normal text-xl">
                                    Đang giảm giá
                                </label>
                                <div className="flex flex-col items-start min-w-[250px]">
                                    <div
                                        className="flex justify-center items-center text-center relative mt-0 py-5 w-[273px]"
                                        style={{borderBottom: '1px solid #ebeaf1'}}>
                                        <div style={{width: '100px', height: '100px'}}>
                                            <img src={Pizza1} alt="" className="cursor-pointer"/>
                                        </div>
                                        <div>
                                            <span className="font-normal text-[#c00a27]">Hawaii Vegetarian Pizza</span>
                                            <div className="text-[#666] font-normal">
                                                <div className="flex flex-col">
                                    <span>
                                    100.000đ - </span>
                                                    <span>
                                    300.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-start items-center text-center relative mt-0 py-5 w-[273px]"
                                        style={{borderBottom: '1px solid #ebeaf1'}}>
                                        <div style={{width: '100px', height: '100px'}}>
                                            <img src={Pizza2} alt="" className="cursor-pointer"/>
                                        </div>
                                        <div>
                                            <span className="font-normal text-[#c00a27]">Apricot Chicken</span>
                                            <div className="text-[#666] font-normal">
                                                <div className="flex flex-col">
                                    <span>
                                    100.000đ - </span>
                                                    <span>
                                    300.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-start items-center text-center relative mt-0 py-5 w-[273px]"
                                        style={{borderBottom: '1px solid #ebeaf1'}}>
                                        <div style={{width: '100px', height: '100px'}}>
                                            <img src={Pizza3} alt="" className="cursor-pointer"/>
                                        </div>
                                        <div>
                                            <span className="font-normal text-[#c00a27]">Grand Italiano</span>
                                            <div className="text-[#666] font-normal">
                                                <div className="flex flex-col">
                                    <span>
                                    100.000đ - </span>
                                                    <span>
                                    300.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-start items-center text-center relative mt-0 py-5 w-[273px]"
                                        style={{borderBottom: '1px solid #ebeaf1'}}>
                                        <div style={{width: '100px', height: '100px'}}>
                                            <img src={Pizza4} alt="" className="cursor-pointer"/>
                                        </div>
                                        <div>
                                            <span className="font-normal text-[#c00a27]">Chicken Hawaii</span>
                                            <div className="text-[#666] font-normal">
                                                <div className="flex flex-col">
                                    <span>
                                    100.000đ - </span>
                                                    <span>
                                    300.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <p className="flex min-w-[850px] bg-[#3D9CD2] p-5 text-white clear-both"
                               style={{borderLeft: '.6180469716em solid rgba(0,0,0,.15)'}}>
                                Sản phẩm đang được cập nhật
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Tacos
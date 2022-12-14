import {Link} from "react-router-dom";
import Pizza1 from '../../asses/pizza1.png'
import Pizza2 from '../../asses/pizza2.png'
import Pizza3 from '../../asses/pizza3.png'
import Pizza4 from '../../asses/pizza4.png'
import React, {useEffect, useState} from "react";
import Page1 from "./page/page1";
import Page2 from "./page/page2";
import Loading from "../../asses/loading";
import FilterProduct from "../../components/FilterProduct";
import ArrowUp from "../../asses/arrowUp";
import ArrowDown from "../../asses/arrowDown";
import {categoryList, pizzaList} from "../../model";

function Pizza() {
    const [number, setNumber] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const tabList = [
        {
            id: '1',
            image: Pizza1,
            name: 'Hawaii Vegetarian Pizza',
            price: '100.000đ',
            oldPrice: ' 300.000đ',

        },
        {
            id: '2',
            tabTitle: 'Burger',
            image: Pizza2,
            name: 'Hawaii Vegetarian Pizza',
            price: '200.000đ',
            oldPrice: ' 500.000đ',

        },
        {
            id: '3',
            tabTitle: 'Burger',
            image: Pizza3,
            name: 'Hawaii Vegetarian Pizza',
            price: '80.000đ',
            oldPrice: ' 400.000đ',

        },
        {
            id: '4',
            tabTitle: 'Burger',
            image: Pizza4,
            name: 'Hawaii Vegetarian Pizza',
            price: '150.000đ',
            oldPrice: ' 300.000đ',

        },
    ]
    const tabProductList = [
        {
            id: '1',
            title: 'Pizza',
            to: '/pizza'
        }, {
            id: '2',
            title: 'Burger',
            to: '/burger'
        }, {
            id: '3',
            title: 'Salads',
            to: '/salads'
        }, {
            id: '4',
            title: 'Tacos',
            to: '/tacos'
        }, {
            id: '5',
            title: 'Wraps',
            to: '/wraps'
        }, {
            id: '6',
            title: 'fries',
            to: '/fries'
        }, {
            id: '7',
            title: 'Drinks',
            to: '/drinks'
        }
    ]

    const handleLength = pizzaList.length
    const handleChangeDietTypeBig = pizzaList.filter((e) => e.status === "BIG").length
    const handleChangeDietTypeSmall = pizzaList.filter((e) => e.status === "SMALL").length

    return (
        <>
            <div className="grid justify-items-center">
                {isLoading && <Loading/>}
            </div>
            {!isLoading &&
                <div className="flex flex-col justify-center items-center min-w-[1200px]">
                    <div id="banner_pizza"
                         className="flex flex-col justify-center items-center bg-[#ccc] h-[300px]  min-w-full">
                        <div className="text-6xl text-white font-serif">
                            PIZZA
                        </div>
                        <div className="flex pt-5 ">
                            <Link to="/" className="text-white">Trang Chủ</Link>
                            {categoryList?.map((e) =>
                                <div>
                                    {e.id === '1' &&
                                        <h3 className="mx-2 text-white"> {">"} {e.name}</h3>
                                    }
                                </div>
                            )}
                            {!number && <h3 className="text-white">{">"} Trang 2</h3>}


                        </div>
                    </div>
                    <div id="select" className="flex flex-col items-center bg-[#fff] h-[100px] min-w-[1200px]">
                        <div className="flex justify-between items-center min-w-[1200px] p-10 text-[#8c8c8c]"
                             style={{borderBottom: '1px solid #ebeaf1'}}>
                            <div>
                                <select
                                    className="pl-2 border border-[#8c8c8c] rounded-3xl mr-5 focus:outline-none h-[43px] w-[182px]">
                                    <option>Mặc định</option>
                                    <option>Xem nhiều nhất</option>
                                </select>
                                <select
                                    className="border border-[#8c8c8c] rounded-3xl ml-5 focus:outline-none h-[43px] w-[150px]">
                                    <option>Show 12</option>
                                    <option>Show All</option>
                                </select>
                            </div>
                            <div
                                onClick={() => setOpen(!open)}
                                className="flex justify-center items-center text-black bg-[#d7d7d7] pl-2 rounded-3xl font-bold ml-5 cursor-pointer focus:outline-none h-[43px] w-[156px]">
                                <option>More Filter</option>
                                {open ? <ArrowUp/> : <ArrowDown/>}
                            </div>
                        </div>
                    </div>

                    {open &&
                        <FilterProduct
                            handleFilter={handleLength}
                            handleFilterBig={handleChangeDietTypeBig}
                            handleFilterSmall={handleChangeDietTypeSmall}/>
                    }


                    <div className="flex justify-between items-start min-h-screen min-w-[1200px] mt-10 ">
                        <div className="flex flex-col">
                            <div
                                className="flex flex-col items-center bg-[#f7f7f7] h-[430px] min-w-[250px] rounded-lg"
                                style={{borderBottom: '1px solid #ebeaf1'}}>
                                {tabProductList.map(tab => (
                                    <Link to={tab.to}
                                          className="flex justify-center items-center p-[30px] h-[50px] w-[200px] text-center hover:bg-red-600 relative  mt-0"
                                          style={{borderBottom: '1px solid #ebeaf1'}}>
                                        {tab.title}
                                    </Link>
                                ))}
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
                                {tabList.map(tab => (
                                    <div
                                        id={tab.id}
                                        key={tab.id}
                                        className="flex flex-col items-start min-w-[250px]">
                                        <div
                                            className="flex justify-center items-center text-center relative mt-0 py-5 w-[273px]"
                                            style={{borderBottom: '1px solid #ebeaf1'}}>
                                            <div style={{width: '100px', height: '100px'}}>
                                                <img src={tab.image as string} alt="" className="cursor-pointer"/>
                                            </div>
                                            <div>
                                                <span className="font-normal text-[#c00a27]">{tab.name}</span>

                                                <div className="text-[#666] font-normal">
                                                    <div className="flex flex-col">
                                                        <span>{tab.price} -</span><span>{tab.oldPrice}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col pb-5">
                            {number ? (<Page1/>) : (<Page2/>)}
                            <div className="flex justify-center items-center pt-10">
                                {!number &&
                                    <div
                                        className="flex justify-center items-center rounded-xl w-[150px] h-10 mx-2 hover:bg-[#f0f0f0] active:hover:bg-[#f0f0f0] focus:outline-none cursor-pointer text-slate-400"
                                        style={{border: '1px solid #ebeaf1'}} onClick={() => setNumber(!number)}>
                                        Trang trước
                                    </div>
                                }
                                <button
                                    className={number ? 'rounded-full w-14 h-14 mx-2 bg-[#f0f0f0] hover:bg-[#f0f0f0] active:hover:bg-[#f0f0f0] focus:outline-none cursor-not-allowed' : 'rounded-full w-14 h-14 mx-5 bg-white hover:bg-[#f0f0f0] focus:outline-none text-slate-400'}
                                    style={{border: '1px solid #ebeaf1'}} onClick={() => setNumber(!number)}>
                                    1
                                </button>
                                <button
                                    className={number ? 'rounded-full w-14 h-14 mx-2 bg-white hover:bg-[#f0f0f0] active:hover:bg-[#f0f0f0] focus:outline-none text-slate-400' : 'rounded-full w-14 h-14 mx-5 bg-[#f0f0f0] hover:bg-[#f0f0f0] focus:outline-none cursor-not-allowed'}
                                    style={{border: '1px solid #ebeaf1'}} onClick={() => setNumber(!number)}>
                                    2
                                </button>

                                {number &&
                                    <div
                                        className="flex justify-center items-center rounded-xl w-[150px] h-10 mx-2 hover:bg-[#f0f0f0] active:hover:bg-[#f0f0f0] focus:outline-none cursor-pointer text-slate-400"
                                        style={{border: '1px solid #ebeaf1'}} onClick={() => setNumber(!number)}>
                                        Trang tiếp
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Pizza
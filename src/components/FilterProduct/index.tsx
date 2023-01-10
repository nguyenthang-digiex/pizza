import React from "react";
import Range from "../Range";
import {pizzaList} from "../../model";


type Props = {
    handleFilterBig: any
    handleFilterSmall: any
    handleFilter: any
}

function FilterProduct(props: Props) {
    const {handleFilterBig, handleFilterSmall, handleFilter} = props

    return (
        <div
            className="bg-[#f6f6f6] rounded-xl min-w-[1200px] min-h-[300px] z-10 p-10 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <div className="flex">
                <div style={{width: '25%'}}>
                    <div className="font-thin mb-[12px]" style={{
                        fontSize: '1.5em',
                        borderBottom: '1px solid rgba(0,0,0,.05)',
                        padding: '0 0 1em'
                    }}>
                        Lọc sản phẩm
                    </div>
                    <Range
                        className="mb-8"
                    ></Range>
                    <div className="flex justify-center items-center">
                        <button className="bg-red-500 rounded-xl min-w-[150px] h-[50px] flex-none">
                            Apply
                        </button>
                    </div>
                </div>
                <div style={{width: '25%', paddingLeft: '20px'}}>
                    <div className="font-thin mb-[12px]" style={{
                        fontSize: '1.5em',
                        borderBottom: '1px solid rgba(0,0,0,.05)',
                        padding: '0 0 1em'
                    }}>
                        Loại đồ ăn
                    </div>
                    <div className="flex flex-col pt-5">
                        <div className="flex justify-between">
                                        <span className="mb-5 font-normal">
                                            Loại lớn
                                        </span>
                            <div>
                                ({handleFilterBig})
                            </div>
                        </div>
                        <div className="flex justify-between">
                        <span className="mb-5 font-normal">
                                            Loại vừa
                                        </span>
                            <div>
                                ({handleFilter})
                            </div>
                        </div>
                        <div className="flex justify-between">

                        <span className="mb-5 font-normal">
                                            Loại nhỏ
                                        </span>
                            <div>
                                ({handleFilterSmall})
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FilterProduct
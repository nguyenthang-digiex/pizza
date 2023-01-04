import React, {useState} from "react";

function FilterProduct() {
    return (
        <div className="bg-[#f6f6f6] rounded-xl min-w-[1200px] min-h-[300px] z-10 p-10">
            <div className="flex">
                <div style={{width: '25%'}}>
                    <div className="font-thin mb-[12px]" style={{
                        fontSize: '1.5em',
                        borderBottom: '1px solid rgba(0,0,0,.05)',
                        padding: '0 0 1em'
                    }}>
                        Lọc sản phẩm
                    </div>
                    <input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5"
                           className="w-full h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer"/>
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
                                        <span className="mb-5 font-normal">
                                            Loại lớn
                                        </span>
                        <span className="mb-5 font-normal">
                                            Loại vừa
                                        </span>
                        <span className="mb-5 font-normal">
                                            Loại nhỏ
                                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FilterProduct
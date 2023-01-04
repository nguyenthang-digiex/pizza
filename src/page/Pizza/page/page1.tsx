import React from "react";
import {pizzaList} from "../../../model";

function Page1() {

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 pb-10" style={{borderBottom: '1px solid #ebeaf1'}}>
                {pizzaList.map(tab => (
                    <div className="flex justify-center items-center w-[50%] hover:border-4 border-[#E9E9E9] cursor-pointer" style={{
                        height: "364px",
                        width: '250px'
                    }}>
                        <div
                            className="flex flex-col items-center relative">
                            <img src={tab.image} alt="" style={{width: '100%', height: '100%'}}/>
                            <span className="font-normal text-lg">{tab.name}</span>
                            <div className="text-[#666] font-normal text-lg"><span>{tab.price} </span>
                                - <span>{tab.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Page1
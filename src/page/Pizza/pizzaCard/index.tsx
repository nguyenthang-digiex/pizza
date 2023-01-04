import React, {useState} from 'react';
interface PizzaCard{
    image: string,
    name: string,
    price: number| string,
    oldPrice: number | string,
    id: string,
    title: string,
    showNoti: boolean
}


const PizzaCard = ({ image, name, price, oldPrice, id, title,showNoti }: PizzaCard) => (
    <div key={id}
         className="flex mx-auto text-center justify-center items-center w-[50%]">
        <div
            className={!showNoti ? 'flex flex-col items-center hover:border-4 border-[#E9E9E9] relative h-[364px] w-[250px]' :
                'flex flex-col items-center hover:border-4 border-[#E9E9E9] relative h-[400px] w-[250px]'}>
            <img src={image} alt="" className="cursor-pointer"/>
            <span className="font-normal text-lg">
                                    {name}
                                    </span>
            <span
                className="italic font-normal text-[#71706c] overflow-hidden h-[50px] leading-7 text-xs">{title}</span>
            <div className="text-[#666] font-normal text-lg">
                <span>{price}</span>-<span>{oldPrice}</span>
            </div>
            {showNoti &&
                <div
                    className="bottom-0 flex justify-center items-center w-inherit bg-red-500 absolute h-[45px] rounded-full cursor-pointer">
                    <div className="flex justify-center items-center"
                         style={{padding: '6px 10px'}}>
                        <span className="pl-1 text-xs">Chọn tuỳ chọn</span>
                    </div>
                </div>
            }
        </div>
    </div>
);

export default PizzaCard;

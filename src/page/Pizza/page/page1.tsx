import Pizza1 from "../../../asses/pizza1.png";
import Pizza2 from "../../../asses/pizza2.png";
import Pizza3 from "../../../asses/pizza3.png";
import Pizza4 from "../../../asses/pizza4.png";
import Pizza5 from "../../../asses/pizza5.png";
import Pizza6 from "../../../asses/pizza6.png";
import Pizza7 from "../../../asses/pizza7.png";
import React from "react";
import {pizzaList} from "../../../model";

function Page1() {

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
        {
            id: '5',
            tabTitle: 'Burger',
            image: Pizza5,
            name: 'Hawaii Vegetarian Pizza',
            price: '200.000đ',
            oldPrice: ' 500.000đ',

        },
        {
            id: '6',
            tabTitle: 'Burger',
            image: Pizza6,
            name: 'Hawaii Vegetarian Pizza',
            price: '80.000đ',
            oldPrice: ' 400.000đ',

        },
        {
            id: '7',
            tabTitle: 'Burger',
            image: Pizza7,
            name: 'Hawaii Vegetarian Pizza',
            price: '150.000đ',
            oldPrice: ' 300.000đ',

        },
        {
            id: '8',
            tabTitle: 'Burger',
            image: Pizza2,
            name: 'Hawaii Vegetarian Pizza',
            price: '200.000đ',
            oldPrice: ' 500.000đ',

        },
        {
            id: '9',
            tabTitle: 'Burger',
            image: Pizza3,
            name: 'Hawaii Vegetarian Pizza',
            price: '80.000đ',
            oldPrice: ' 400.000đ',

        },
        {
            id: '10',
            tabTitle: 'Burger',
            image: Pizza4,
            name: 'Hawaii Vegetarian Pizza',
            price: '150.000đ',
            oldPrice: ' 300.000đ',

        },
        {
            id: '11',
            tabTitle: 'Burger',
            image: Pizza1,
            name: 'Hawaii Vegetarian Pizza',
            price: '80.000đ',
            oldPrice: ' 400.000đ',

        },
        {
            id: '12',
            tabTitle: 'Burger',
            image: Pizza4,
            name: 'Hawaii Vegetarian Pizza',
            price: '150.000đ',
            oldPrice: ' 300.000đ',

        },
    ]

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
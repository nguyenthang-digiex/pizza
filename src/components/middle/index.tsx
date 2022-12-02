import {useState} from "react";
import DrinkIcon from '../../asses/Drinks'
import PotatoChipIcon from '../../asses/PotatoChips'
import {Link} from "react-router-dom";
import PizzaIcon from "../../asses/pizza";
import BurgerIcon from "../../asses/burger";
import Tacos from "../../asses/tacos";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Middle() {
    const [tabName, setTabName] = useState("1");


    const tabList = [
        {
            id: '1',
            tabTitle: <Link to="/pizza" className="flex justify-center items-center">
                <PizzaIcon/>
                Pizza
            </Link>,
            content: ''
        },
        {
            id: "2",
            tabTitle: <Link to="/burger" className="flex justify-center items-center">
                <BurgerIcon/>
                Burger
            </Link>,
            content: ''
        },

        {
            id: "3",
            tabTitle: <Link to="/salads" className="flex justify-center items-center">
                Salads</Link>,
            content: ''
        },
        {
            id: "4",
            tabTitle:
                <Link to="/tacos" className="flex justify-center items-center">
                    <Tacos/>
                    Tacos
                </Link>,
            content: ''
        },
        {
            id: "5",
            tabTitle: <div className="flex justify-center items-center">Wraps</div>,
            content: ''
        },
        {
            id: "6",
            tabTitle: <Link to="" className="flex justify-center items-center">
                <PotatoChipIcon/>
                Fries
            </Link>,
            content: ''
        }, {
            id: "7",
            tabTitle: <Link to="" className="flex justify-center items-center">
                <DrinkIcon/>
                Drinks
            </Link>,
            content: ''
        }

    ];
    return (
        <div className="flex justify-evenly items-center bg-[#c00a27] text-[#fcc3cc] pt-5 min-w-[1200px]">
            <div className="flex justify-around items-center min-w-[1200px]">
                {tabList.map(tab => (
                    <div
                        id={tab.id}
                        key={tab.id}
                        className={`mb-2 btn cursor-pointer ${tabName === tab.id ? "" : ""}`}
                        onClick={() => setTabName(tab.id)}>
                        <div className="flex justify-center items-center hover:text-white cursor-pointer text-xl">
                            {tab.tabTitle}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Middle
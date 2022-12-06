import React, {useState} from 'react';
import Zalo from "../../asses/zalo";
import Messenger from "../../asses/messenger";
import Telephone from "../../asses/telephone";
import BoxMessenger from "../BoxChat";

function Chat() {
    const [openBox, setOpenBox] = useState(false);
    return (
        <div className="flex flex-col justify-end b-[24px] pr-[20px] fixed bottom-5 right-0 z-[100]">
            <a target="_blank" rel="noopener" href="https://zalo.me/1252964304780656090">
                <div
                    className="flex justify-center items-center cursor-pointer mt-[10px] w-[60px] h-[60px] bg-[#0068ff] rounded-full">

                    <Zalo/>
                </div>
            </a>
            <a rel="noopener noreferrer" href="tel:0778924736">

                <div
                    className="flex justify-center items-center cursor-pointer mt-[10px] w-[60px] h-[60px] bg-[#ff7d1f] rounded-full">
                    <Telephone className="fill-white"/>
                </div>
            </a>
            <div
                className="flex justify-center items-center cursor-pointer mt-[10px] w-[60px] h-[60px] bg-[#0068ff] rounded-full"
                onClick={() => setOpenBox(!openBox)}>
                <Messenger/>
            </div>
            {openBox && (<BoxMessenger closeBox={() => setOpenBox(false)}/>)}

        </div>
    );
}

export default Chat;

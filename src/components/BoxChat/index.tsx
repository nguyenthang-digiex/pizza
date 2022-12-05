import Face from '../../asses/LogoPizza.png';
import More from "../../asses/more";
import Close from "../../asses/close";
import React, {useState} from "react";
import IconMessenger from "../../asses/iconMessenger";
import ChatMessenger from "../ChatMessenger";
import SettingBoxChat from "../SettingBoxChat";

type Props = {
    closeBox?: () => void
}

function BoxMessenger(props: Props) {
    const {closeBox} = props;
    const [openBox, setOpenBox] = useState(false);
    const [openSettingBox, setOpenSettingBox] = useState(false);

    const isMessenger = (
        <>
            <div
                className={!openBox ? 'min-h-[350px] w-[380px] bg-[#fff] fixed bottom-[90px] right-[20px] rounded-[24px] overflow-hidden shadow-lg shadow-white-500/50 z-[9999]' :
                    'min-h-[350px] w-[380px] bg-[#e5e5e5] fixed bottom-[90px] right-[20px] rounded-[24px] overflow-hidden shadow-lg shadow-white-500/50 z-[9999]'}>
                <div className='m-[24px]'>
                    <div className='flex flex-row items-center'>
                        <img className='relative w-[150px] h-[50px]' src={Face} alt=''/>
                        <div className='grow'/>
                        <div className='flex items-center'>
                            <More className='p-3 cursor-pointer' onClick={() => setOpenSettingBox(!openSettingBox)}/>
                            {openSettingBox && (<SettingBoxChat openBox={() => setOpenSettingBox(false)}/>)}
                            <Close className='p-3 cursor-pointer' onClick={closeBox}/>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-xl font-bold'>
                            Chat với Pizza Hut
                        </div>
                    </div>
                    <div className='flex justify-start mt-5'>
                        Pizza Hut xin chào! Bạn cần hỗ trợ gì?
                    </div>
                    <div className='min-h-[122px] flex'>
                        <div className='inline-block self-end w-[100%]'>
                            <div
                                onClick={() => setOpenBox(!openBox)}
                                className='flex justify-center items-center cursor-pointer rounded-lg min-h-[54px] min-w-[159px] text-white bg-blue-700 outline-none font-bold p-[0 30px 0 30px]'>
                                Bắt đầu chat
                            </div>
                        </div>
                    </div>
                    {openBox && (<ChatMessenger closeBox={() => setOpenBox(false)}/>)}
                    <span className='flex justify-center items-center text-black mt-[20px]'>
                        <div className="flex mr-4 pt-2 font-bold items-center">
                                <IconMessenger className="w-4 h-4 fill-black"/>
                              Do Messenger cung cấp
                        </div>
                    </span>
                </div>
            </div>
        </>
    );

    return (
        <div>
            {isMessenger}
        </div>
    );
}

export default BoxMessenger;
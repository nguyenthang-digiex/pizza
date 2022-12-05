import React from "react";
import Messenger from "../../asses/messenger";

type Props = {
    closeBox?: () => void
}


function ChatMessenger(props: Props) {
    const {closeBox} = props;

    return (
        <div
            className="w-[380px] h-[280px] bg-[#fff] fixed bottom-[90px] right-[20px] rounded-[24px] shadow-lg shadow-white-500/50"
            onClick={closeBox}>
            <div className="m-[24px]">
                <div className="flex flex-col w-[100%]">
                    <div className="flex justify-center">
                        <div className=" leading-6 text-xl font-bold ">
                            Đăng nhập
                        </div>
                    </div>
                    <div className='pointer-events-auto'>
                        <div className='min-h-[122px] flex'>
                            <div className='inline-block w-[100%]' style={{margin: '24px -4px 20px -4px'}}>
                                <a target="_blank" href="https://www.facebook.com/messages/t/100035187050578">
                                    <div
                                        className='flex justify-center items-center cursor-pointer rounded-full min-h-[54px] min-w-[159px] text-white bg-blue-700 outline-none font-bold p-[0 30px 0 30px]'>
                                        <Messenger className='w-4 h-4'/>
                                        Tiếp tục chat với tư cách
                                    </div>
                                </a>
                                <div className="pt-4">
                                    <div
                                        className='flex justify-center items-center cursor-pointer rounded-full min-h-[54px] min-w-[159px] text-black bg-[#e5e5e5] outline-none font-bold p-[0 30px 0 30px]'>
                                        Tiếp tục chat với tự cách khách
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-[#a3a3a3] text-xs leading-4">
                        Bằng cách tiếp tục với vai trò khách, bạn đồng ý với
                        <a className="text-black font-semibold"> Điều khoản</a>
                        ,
                        <a className="text-black font-semibold">Chính sách quyền riêng tư </a>
                        và
                        <a className="text-black font-semibold"> Chính sách cookie của Meta.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessenger
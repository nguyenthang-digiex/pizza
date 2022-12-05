type Props = {
    openBox?: () => void
}

function SettingBoxChat(props: Props) {
    const {openBox} = props;

    return (
        <div
            className="w-[360px] h-[150] bg-[#fff] fixed bottom-[280px] right-[20px] rounded-lg shadow-lg shadow-white-500/50 mr-[7px]"
            style={{padding: '8px 0 8px 0'}}>
            <div
                className="flex items-center rounded-[6px] cursor-pointer outline-none p-[8px] text-sm hover:bg-[#e5e5e5] leading-5 font-normal"
                style={{margin: '0 8px'}}>
                <a target="_blank" href="https://www.facebook.com/thang.tho2003">
                    Truy cập Trang Facebook
                </a>
            </div>
            <div
                className="flex items-center rounded-[6px] cursor-pointer outline-none p-[8px] text-sm hover:bg-[#e5e5e5] leading-5 font-normal"
                style={{margin: '0 8px'}}>
                <a target="_blank" href="https://www.messenger.com/desktop/launch">
                    Thêm Messenger vào trang web của bạn
                </a>
            </div>
        </div>
    )
}

export default SettingBoxChat
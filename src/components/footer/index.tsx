import Facebook from "../../asses/facebook";
import Telephone from "../../asses/telephone";
import Instagram from "../../asses/instagram";
import Twitter from "../../asses/twitter";
import LogoImage from '../../asses/LogoPizza.png'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#2c2c2c] mt-10 h-[500px] min-w-[1200px] bg-fixed">
            <div className="flex">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/thang.tho2003">
                    <div
                        className="flex justify-center items-center rounded-full w-14 h-14 mx-5 border border-[#f0f0f0] hover:border-[#464646]">
                        <Facebook className="w-6 h-6 hover:fill-[#464646]"/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="tel:0778924736">
                    <div
                        className="flex justify-center items-center rounded-full w-14 h-14 mx-5 border border-[#f0f0f0] hover:border-[#464646]">
                        <Telephone className="w-6 h-6"/>
                    </div>
                </a>
                <a rel="noopener" href="/">
                    <div
                        className="flex justify-center items-center rounded-full w-14 h-14 mx-5 border border-[#f0f0f0] hover:border-[#464646]">

                        <Twitter className="w-6 h-6"/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ngtthang_198/">
                    <div
                        className="flex justify-center items-center rounded-full w-14 h-14 mx-5 border border-[#f0f0f0] hover:border-[#464646]">
                        <Instagram className="w-6 h-6"/>
                    </div>
                </a>

            </div>
            <div className="pt-16 w-[200px] h-[200px]">
                <img src={LogoImage} alt=""/>
            </div>
            <span className="text-[#7f7f7f]">Copyright 2022 © Thiết kế website bởi NGUYỄN THỌ THẮNG</span>

        </div>
    )
}

export default Footer
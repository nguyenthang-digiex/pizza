import Facebook from "../../asses/facebook";
import Telephone from "../../asses/telephone";
import Instagram from "../../asses/instagram";
import Twitter from "../../asses/twitter";
import LogoImage from '../../asses/LogoPizza.png'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#2c2c2c] mt-10 h-[500px] min-w-[1200px]">
            <div className="flex">
                <div className="flex justify-center items-center rounded-full w-14 h-14 mx-5"
                     style={{border: '1px solid #f0f0f0'}}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/thang.tho2003">
                        <Facebook className="w-6 h-6"/>
                    </a>
                </div>
                <div className="flex justify-center items-center rounded-full w-14 h-14 mx-5"
                     style={{border: '1px solid #f0f0f0'}}>
                    <a target="_blank" rel="noopener noreferrer" href="tel:0778924736">
                        <Telephone className="w-6 h-6"/>
                    </a>
                </div>
                <div className="flex justify-center items-center rounded-full w-14 h-14 mx-5"
                     style={{border: '1px solid #f0f0f0'}}>
                    <a target="_blank" rel="noopener" href="/">
                        <Twitter className="w-6 h-6"/>
                    </a>
                </div>
                <div className="flex justify-center items-center rounded-full w-14 h-14 mx-5"
                     style={{border: '1px solid #f0f0f0'}}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ngtthang_198/">
                        <Instagram className="w-6 h-6"/>
                    </a>
                </div>
            </div>
            <div className="pt-16 w-[200px] h-[200px]">
                <img src={LogoImage} alt=""/>
            </div>
            <span className="text-[#7f7f7f]">Copyright 2017 © Thiết kế website bởi NGUYỄN THỌ THẮNG</span>

        </div>
    )
}

export default Footer
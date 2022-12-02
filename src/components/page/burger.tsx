import Burger4 from "../../asses/burger4.png";
import Burger1 from "../../asses/burger1.png";
import Burger2 from "../../asses/burger2.png";

function BurgerPage() {
    return (
        <div>
            <div className="flex min-w-[950px]" style={{borderBottom: '1px solid #ebeaf1'}}>
                <div className="flex justify-center items-center w-[50%]">
                    <div
                        className="flex flex-col items-center hover:border-4 border-[#E9E9E9] relative"
                        style={{
                            height: "364px",
                            width: '250px'
                        }}>
                        <img src={Burger4} alt=""/>
                        <span className="font-normal text-lg">Chicken Hawaii</span>
                        <span className="italic font-normal text-[#71706c] overflow-hidden h-[50px] leading-6 text-xs">
                            Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.</span>
                        <div className="text-[#666] font-normal text-lg">
                                    <span>
                                    100.000đ
                                </span>
                            -
                            <span>
                                    300.000đ
                                </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[50%]">
                    <div
                        className="flex flex-col items-center hover:border-4 border-[#E9E9E9] relative"
                        style={{
                            height: "364px",
                            width: '250px'
                        }}>
                        <img src={Burger2} alt=""/>
                        <span className="font-normal text-lg">Hawaii Vegetarian Burger</span>
                        <span className="italic font-normal text-[#71706c] overflow-hidden h-[50px] leading-6 text-xs">
                            Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.</span>
                        <div className="text-[#666] font-normal text-lg">
                                    <span>
                                    100.000đ
                                </span>
                            -
                            <span>
                                    300.000đ
                                </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[50%]">
                    <div
                        className="flex flex-col items-center hover:border-4 border-[#E9E9E9] relative"
                        style={{
                            height: "364px",
                            width: '250px'
                        }}>
                        <img src={Burger1} alt=""/>
                        <span className="font-normal text-lg">Hawaii Vegetarian Burger</span>
                        <span className="italic font-normal text-[#71706c] overflow-hidden h-[50px] leading-6 text-xs">
                            Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.</span>
                        <div className="text-[#666] font-normal text-lg">
                                    <span>
                                    100.000đ
                                </span>
                            -
                            <span>
                                    300.000đ
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerPage
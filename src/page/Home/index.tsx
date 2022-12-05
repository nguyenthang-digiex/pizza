import BannerLogo from '../../asses/Banner.png';
import BannerLogo1 from '../../asses/banner1.png';
import BannerLogo2 from '../../asses/banner2.jpeg';
import BannerSmallLogo from '../../asses/banner_small.jpeg';
import BannerSmall1Logo from '../../asses/banner_small1.png';
import Image from '../../asses/image1.png';
import Image1 from '../../asses/image2.png';
import Image2 from '../../asses/image3.png';
import Image4 from '../../asses/image.png';
import {useState} from "react";
import PizzaPage from "../../components/page/pizza";
import BurgerPage from "../../components/page/burger";
import Pizza1 from "../../asses/pizza1.png";
import Pizza2 from "../../asses/pizza2.png";
import Pizza3 from "../../asses/pizza3.png";
import Pizza4 from "../../asses/pizza4.png";
import PanelCarousel from "../../components/PanelCarousel";


function Home() {
    const [tabName, setTabName] = useState("1");
    const tabList = [
        {
            id: '1',
            tabTitle: "Pizza Sets",
            content: <PizzaPage/>
        }, {
            id: '2',
            tabTitle: 'Burger',
            content: <BurgerPage/>
        }, {
            id: '3',
            tabTitle: 'Wraps',
            content: ''
        },
    ]

    const pizzaList = [
        {
            id: '1',
            image: <img src={Pizza1} alt="" className="cursor-pointer"/>,
            name: 'Hawaii Vegetarian Pizza',
            title: 'Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.',
            price: '100.000đ',
            oldPrice: ' 300.000đ',

        },
        {
            id: '2',
            tabTitle: 'Burger',
            image: <img src={Pizza2} alt="" className="cursor-pointer"/>,
            name: 'Hawaii Vegetarian Pizza',
            title: 'Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.',
            price: '200.000đ',
            oldPrice: ' 500.000đ',

        },
        {
            id: '3',
            tabTitle: 'Burger',
            image: <img src={Pizza3} alt="" className="cursor-pointer"/>,
            name: 'Hawaii Vegetarian Pizza',
            title: 'Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.',
            price: '80.000đ',
            oldPrice: ' 400.000đ',

        },
        {
            id: '4',
            tabTitle: 'Burger',
            image: <img src={Pizza4} alt="" className="cursor-pointer"/>,
            name: 'Hawaii Vegetarian Pizza',
            title: 'Thực đơn PizzaHome đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.',
            price: '150.000đ',
            oldPrice: ' 300.000đ',

        }
    ]

    const bannerList = [
        {
            id: '1',
            image: <img style={{
                cursor: 'pointer',
                margin: 'auto',
                width: '100%', height: '100%'
            }} src={BannerLogo} alt=''/>
        }, {
            id: '2',
            image: <img style={{
                cursor: 'pointer',
                margin: 'auto',
                width: '100%', height: '100%'
            }} src={BannerLogo1} alt=''/>
        }, {
            id: '3',
            image: <img style={{
                cursor: 'pointer',
                margin: 'auto',
                width: '100%', height: '100%'
            }} src={BannerLogo2} alt=''/>
        },
    ]

    return (
        <div className="min-w-[1200px]">
            <div className="min-w-[1200px] overflow-visible m-auto bg-[#c00a27]">
                <PanelCarousel
                    effect="fade"
                    slidesPerView={1}
                    data={bannerList}
                    onRenderItem={item => (
                        <div className="h-[880px] relative">
                            {item.image}
                            {item.id === '1' &&
                                <div className="absolute whitespace-nowrap p-0 m-0 top-[200px] left-[250px] text-white text-9xl z-10 font-bold text-center leading-[120px] font-sans ">
                                    VEGGIE FUN
                                    <br/>
                                    DELICIOUS SUMMER!
                                </div>
                            }{item.id === '2' &&
                                <div className="absolute whitespace-nowrap p-0 m-0 top-[200px] left-[250px] text-white text-9xl z-10 font-bold text-center leading-[120px] font-sans ">
                                    VEGGIE FUN
                                    <br/>
                                    DELICIOUS SUMMER!
                                </div>
                            }{item.id === '3' &&
                                <div className="absolute whitespace-nowrap p-0 m-0 top-[200px] left-[250px] text-white text-9xl z-10 font-bold text-center leading-[120px] font-sans ">
                                    VEGGIE FUN
                                    <br/>
                                    DELICIOUS SUMMER!
                                </div>
                            }
                        </div>
                    )}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                />
            </div>
            <div className="flex justify-center items-center bg-[#fff] min-w-[1200px] pt-10">
                <div className="flex">
                    <img src={Image} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="flex flex-col px-5">
                    <div className="flex pb-5">
                        <div className="pr-2.5">
                            <img src={Image1} alt=""/>
                        </div>
                        <div className="pl-5">
                            <img src={Image2} alt=""/>
                        </div>
                    </div>
                    <div>
                        <img src={Image4} alt=""/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[1200px] py-10 ">
                <div className="flex min-w-[1200px] justify-center items-center"
                     style={{borderBottom: '1px solid #ebeaf1'}}>
                    {tabList.map(tab => (
                        <div
                            id={tab.id}
                            key={tab.id}
                            className={`mb-2 mx-5 cursor-pointer ${tabName === tab.id ? "" : ""}`}
                            onClick={() => setTabName(tab.id)}>
                            <div
                                className="flex justify-center items-center cursor-pointer text-xl font-bold text-[#2d2b2d]">
                                {tab.tabTitle}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-10">
                    {tabList.map(tab => tabName === tab.id && (
                            <div key={tab.id} className="mx-auto text-center">
                                {tab.content}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="min-w-[1200px] py-12">
                <img style={{width: '100%', height: '100%'}} src={BannerSmallLogo} alt=''/>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[1200px]">
                <div className="flex min-w-[1200px] justify-center items-center"
                     style={{borderBottom: '1px solid #ebeaf1'}}>
                    <div style={{borderBottom: '4px solid #c00a27'}}>
                    <span className="font-extralight text-2xl my-5">
                        Bán Chạy Nhất
                    </span>
                    </div>
                </div>
                <div className="pt-10 flex">
                    {pizzaList.map(tab =>
                        <div key={tab.id} className="flex mx-auto text-center justify-center items-center w-[50%]">
                            <div className="flex flex-col items-center hover:border-4 border-[#E9E9E9] relative"
                                 style={{height: "364px", width: '250px'}}>
                                {tab.image}
                                <span className="font-normal text-lg">
                                    {tab.name}
                                    </span>
                                <span
                                    className="italic font-normal text-[#71706c] overflow-hidden h-[50px] leading-7 text-xs">{tab.title}</span>
                                <div className="text-[#666] font-normal text-lg">
                                    <span>{tab.price}</span>-<span>{tab.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="min-w-[1200px] py-12">
                <img style={{width: '100%', height: '100%'}} src={BannerSmall1Logo} alt=''/>
            </div>
        </div>
    );
}

export default Home;


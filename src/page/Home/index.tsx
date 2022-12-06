import BannerLogo from '../../asses/banner.png';
import BannerLogo1 from '../../asses/banner1.png';
import BannerLogo2 from '../../asses/banner2.jpeg';
import BannerSmallLogo from '../../asses/banner_small.jpeg';
import BannerSmall1Logo from '../../asses/banner_small1.png';
import BannerSmall3Logo from '../../asses/banner_small2.png';
import BannerSmall2Logo from '../../asses/banner3.png';
import Image from '../../asses/image1.png';
import Image1 from '../../asses/image2.png';
import Image2 from '../../asses/image3.png';
import Image4 from '../../asses/image.png';
import React, {useEffect, useState} from "react";
import PizzaPage from "../../components/page/pizza";
import BurgerPage from "../../components/page/burger";
import Pizza1 from "../../asses/pizza1.png";
import Pizza2 from "../../asses/pizza2.png";
import Pizza3 from "../../asses/pizza3.png";
import Pizza4 from "../../asses/pizza4.png";
import Loading from "../../asses/loading";
import PanelCarousel from "../../components/PanelCarousel";


function Home() {
    const [tabName, setTabName] = useState("1");
    const [isLoading, setIsLoading] = useState(true);
    const [showNoti, setShowNoti] = useState(false);

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
    const bannerSmallList = [
        {
            id: '1',
            image: <img style={{width: '100%', height: '100%'}} src={BannerSmallLogo} alt=''/>
        }, {
            id: '2',
            image: <img style={{width: '100%', height: '100%'}} src={BannerSmall2Logo} alt=''/>
        }, {
            id: '3',
            image: <img style={{width: '100%', height: '100%'}} src={BannerSmall3Logo} alt=''/>
        }
    ]

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="min-w-[1200px]">
            <div className="min-w-[1200px] overflow-visible m-auto bg-[#c00a27]">
                <PanelCarousel
                    effect="fade"
                    slidesPerView={1}
                    data={bannerList}
                    onRenderItem={item => (
                        <div className="h-[880px] relative">
                            <div className="grid justify-items-center">
                                {isLoading && <Loading/>}
                            </div>
                            {!isLoading &&
                                <>
                                    {item.image}
                                    {item.id === '1' &&
                                        <div
                                            className="absolute whitespace-nowrap p-0 m-0 top-[200px] left-[100px] md:left-[400px] text-white text-9xl z-10 font-bold text-center leading-[120px] font-sans ">
                                            VEGGIE FUN
                                            <br/>
                                            DELICIOUS SUMMER!
                                        </div>
                                    }
                                    {item.id === '2' &&
                                        <div
                                            className="absolute whitespace-nowrap p-0 m-0 top-[200px] left-[100px] md:left-[400px] text-white text-9xl z-10 font-bold text-center leading-[120px] font-sans ">
                                            VEGGIE FUN
                                            <br/>
                                            DELICIOUS SUMMER!
                                        </div>
                                    }
                                    {item.id === '3' &&
                                        <div
                                            className="absolute whitespace-nowrap p-0 m-0 top-[200px] left-[100px] md:left-[400px] text-white text-9xl z-10 font-bold text-center leading-[120px] font-sans ">
                                            VEGGIE FUN
                                            <br/>
                                            DELICIOUS SUMMER!
                                        </div>
                                    }
                                </>
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
                                {tab.id === '3' && <div className="flex">
                                    <p className="flex min-w-[850px] bg-[#3D9CD2] p-5 text-white clear-both"
                                       style={{borderLeft: '.6180469716em solid rgba(0,0,0,.15)'}}>
                                        Sản phẩm đang được cập nhật
                                    </p>
                                </div>}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="min-w-[1200px] py-12">
                <PanelCarousel
                    effect="fade"
                    slidesPerView={1}
                    data={bannerSmallList}
                    onRenderItem={item => (
                        <div className="h-[470px] bg-center bg-cover relative">
                            {item.image}
                            {item.id === '1' &&
                                <div className="absolute"
                                     style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
                                    <h3 className="relative overflow-hidden text-center mb-0 text-2xl font-light">
                                    <span className="inline-block align-baseline relative text-white"
                                          style={{zoom: 1, padding: '0 20px'}}>
                                    GIAO HÀNG MIỄN PHÍ
                                    </span>
                                    </h3>
                                    <h2
                                        className="text-white text-7xl font-sans border-none"
                                        style={{margin: 0, paddingBottom: '3.2px', fontSize: '4.5em'}}>
                                        MUA PIZZA HÔM NAY
                                    </h2>
                                    <div
                                        style={{
                                            display: 'table',
                                            width: '100%',
                                            marginBottom: '35px',
                                            paddingTop: '25px'
                                        }}>
                                        <div className="text-white"
                                             style={{lineHeight: '.6rem', fontSize: '6.625em'}}>
                                        <span className="font-bold text-center" style={{display: 'block'}}>
                                            99.000
                                            <span className="align-top"
                                                  style={{lineHeight: '1rem', fontSize: '.5em'}}>đ</span>
                                        <span className="align-top" style={{lineHeight: '1rem', fontSize: '.5em'}}/>
                                        <span className="relative text-[#c2aa7e]"
                                              style={{bottom: '-4px', right: '34px', fontSize: '.16em'}}>CHỈ VỚI</span>
                                        </span>

                                        </div>
                                    </div>
                                </div>}
                        </div>
                    )}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                />
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
                <div className="pt-10 flex relative"
                     onMouseOut={() => setShowNoti(false)}
                     onMouseOver={() => setShowNoti(true)}
                >
                    {pizzaList.map(tab =>
                        <div key={tab.id}
                             className="flex mx-auto text-center justify-center items-center w-[50%]">
                            <div className={!showNoti ? 'flex flex-col items-center hover:border-4 border-[#E9E9E9] relative h-[364px] w-[250px]' :
                            'flex flex-col items-center hover:border-4 border-[#E9E9E9] relative h-[400px] w-[250px]'}>
                                {tab.image}
                                <span className="font-normal text-lg">
                                    {tab.name}
                                    </span>
                                <span
                                    className="italic font-normal text-[#71706c] overflow-hidden h-[50px] leading-7 text-xs">{tab.title}</span>
                                <div className="text-[#666] font-normal text-lg">
                                    <span>{tab.price}</span>-<span>{tab.oldPrice}</span>
                                </div>
                                {showNoti &&
                                    <div className="bottom-0 flex justify-center items-center w-inherit bg-red-500 absolute h-[45px] rounded-full cursor-pointer">
                                        <div className="flex justify-center items-center" style={{padding: '6px 10px'}}>
                                            <span className="pl-1 text-xs">Chọn tuỳ chọn</span>
                                        </div>
                                    </div>
                                }
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


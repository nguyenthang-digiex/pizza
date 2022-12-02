import React, {useState} from 'react';
import classNames from 'classnames';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {EffectFade, Pagination, Autoplay} from 'swiper';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';
import {AppColors} from '../../utils/constants/AppColors';
import {AppCarouselProps} from '../Carousel';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface PanelCarouselProps extends AppCarouselProps {
    hideCustomControl?: boolean;
}

const PanelCarousel = (props: PanelCarouselProps) => {
    const {data, containerStyle, onRenderItem, hideCustomControl = false, ...rest} = props;
    const [currentIdxSlide, setCurrentIdxSlice] = useState(0);

    const SwiperButtonNext = ({children}: any) => {
        const swiper = useSwiper();
        return (
            <button type="button" onClick={() => swiper.slideNext()}>
                {children}
            </button>
        );
    };
    const SwiperButtonPrevios = ({children}: any) => {
        const swiper = useSwiper();
        return (
            <button type="button" onClick={() => swiper.slidePrev()}>
                {children}
            </button>
        );
    };

    return (
        <div className={classNames('relative hidden md:block', containerStyle)}>
            <Swiper
                loop
                onSlideChange={sw => setCurrentIdxSlice(sw.realIndex)}
                slidesPerView={1}
                fadeEffect={{crossFade: true}}
                modules={[EffectFade, Pagination, Autoplay]}
                {...rest}
            >
                {!hideCustomControl && (
                    <div style={{
                        position: 'absolute',
                        bottom: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        left: 0,
                        right: 0,
                        zIndex: 1
                    }}>
                        <div style={{
                            display: 'flex',
                            borderRadius: '50px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SwiperButtonPrevios>
                                <HiOutlineChevronLeft size={24} color={AppColors.white} opacity={0.7}/>
                            </SwiperButtonPrevios>
                            <div className="flex text-white">
                                <span className="font-bold pr-1">{`${currentIdxSlide + 1}`}</span>
                                <span className="opacity-70">/ {data?.length}</span>
                            </div>
                            <SwiperButtonNext>
                                <HiOutlineChevronRight size={24} color={AppColors.white} opacity={0.7}/>
                            </SwiperButtonNext>
                        </div>
                    </div>
                )}
                {(data?.length || 0) > 0 &&
                    // eslint-disable-next-line react/no-array-index-key
                    data?.map((elm, idx) => <SwiperSlide key={idx.toString()}>{onRenderItem?.(elm, idx)}</SwiperSlide>)}
            </Swiper>
        </div>
    );
};

PanelCarousel.defaultProps = {
    hideCustomControl: false
};
export default PanelCarousel;

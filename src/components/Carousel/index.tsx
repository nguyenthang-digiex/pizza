import React, {useCallback, useState} from 'react';
import {Swiper, SwiperSlide, SwiperProps} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';
import {AppColors} from '../../utils/constants/AppColors';
import classNames from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface AppCarouselProps extends SwiperProps {
    data?: ReadonlyArray<any> | null | undefined;
    onRenderItem?: (item: any, index: number) => React.ReactElement | null;
    containerStyle?: string;
    showControls?: boolean;
    styleWrapperControl?: string;
}

const AppCarousel = (props: AppCarouselProps) => {
    const {
        data,
        onRenderItem,
        loop = true,
        pagination = false,
        containerStyle,
        slidesPerView = 4,
        showControls,
        slidesPerGroup,
        styleWrapperControl,
        ...rest
    } = props;

    const [swiperRef, setSwiperRef] = useState<any>(null);
    const handlePrevSlide = useCallback(() => {
        if (!swiperRef) return;
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNextSlide = useCallback(() => {
        if (!swiperRef) return;
        swiperRef?.slideNext();
    }, [swiperRef]);
    let breakpointFollowSlides = {};
    if (slidesPerView === 5) {
        breakpointFollowSlides = {
            0: {
                slidesPerView: 3,
                slidesPerGroup: slidesPerGroup || 3,
                spaceBetween: 8
            },
            640: {
                slidesPerView: 3,
                slidesPerGroup: slidesPerGroup || 3,
                spaceBetween: 16
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: slidesPerGroup || 4,
                spaceBetween: 16
            },
            1200: {
                slidesPerView: 5,
                slidesPerGroup: slidesPerGroup || 5
            }
        };
    }
    if (slidesPerView === 4) {
        breakpointFollowSlides = {
            0: {
                slidesPerView: 2,
                slidesPerGroup: slidesPerGroup || 1,
                spaceBetween: 8
            },
            481: {
                slidesPerView: 2,
                slidesPerGroup: slidesPerGroup || 2,
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                slidesPerGroup: slidesPerGroup || 3,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: slidesPerGroup || 4,
                spaceBetween: 16
            }
        };
    }
    if (slidesPerView === 3) {
        breakpointFollowSlides = {
            0: {
                slidesPerView: 1,
                slidesPerGroup: slidesPerGroup || 1
            },
            640: {
                slidesPerView: 2,
                slidesPerGroup: slidesPerGroup || 2,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: slidesPerGroup || 2,
                spaceBetween: 16
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: slidesPerGroup || 3,
                spaceBetween: 16
            }
        };
    }


    return (
        <div className={classNames('relative', containerStyle)}>
            <div className="md:px-14">
                {showControls && (
                    <div className=" hidden md:block" style={{
                        position: 'absolute',
                        left: '50 %',
                        top: '50 %',
                        transform: 'translate(-50 %, -50 %)',
                        width: "100 %",
                        zIndex: 1
                    }}>
                        <div className={classNames(styleWrapperControl)} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <button onClick={handlePrevSlide} type="button">
                                <HiOutlineChevronLeft size={36} color={AppColors.brown}/>
                            </button>
                            <button onClick={handleNextSlide} type="button">
                                <HiOutlineChevronRight size={36} color={AppColors.brown}/>
                            </button>
                        </div>
                    </div>
                )}
                <Swiper
                    // navigation
                    loop={loop}
                    pagination={pagination}
                    onSwiper={setSwiperRef}
                    breakpoints={breakpointFollowSlides}
                    slidesPerView={slidesPerView}
                    modules={[Navigation, Pagination, Autoplay]}
                    {...rest}
                >
                    {(data?.length || 0) > 0 &&
                        // eslint-disable-next-line react/no-array-index-key
                        data?.map((elm, idx) => <SwiperSlide key={idx}>{onRenderItem?.(elm, idx)}</SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};
AppCarousel.defaultProps = {
    onRenderItem: null,
    containerStyle: '',
    showControls: true,
    styleWrapperControl: ''
};
export default AppCarousel;

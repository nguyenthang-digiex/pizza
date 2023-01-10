import {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';

export interface Props {
    className?: string;
    checkClearAll?: number;
    onChangeValue?: (value: number) => void;
}

const Range: FC<Props> = ({className, checkClearAll, onChangeValue}) => {
    const [minute, setMinute] = useState<number>(120);
    const input = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLInputElement>(null);
    const MAX = 800000;

    useEffect(() => {
        if (range.current && input.current) {
            setMinute(19);
            input.current.value = '19';
            range.current.value = '19';
        }
        handleSliderChange();
    }, [checkClearAll]);

    useLayoutEffect(() => {
        handleSliderChange();
    }, []);

    const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMinute(value);
        if (input.current) {
            input.current.value = value.toString();
        }
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value);
        value = value <= 0 ? 0 : value;
        value = value >= MAX ? MAX : value;
        if (range.current && value >= 0) {
            setMinute(value);
            if (value === 0 && input.current) {
                input.current.value = '0';
            }
            if (value === MAX && input.current) {
                input.current.value = MAX.toString();
            }
            range.current.value = value.toString();
            handleSliderChange();
        }
    };

    const handleSliderChange = () => {
        if (range.current) {
            const valPercent = (parseInt(range.current.value) / parseInt(range.current.max)) * 100;
            range.current.style.background = `linear-gradient(to right, #F47920 ${valPercent}%, #EFEFEF ${valPercent}%)`;
        }
    };

    return (
        <section id="we-c-range" className={className}>
            <div className="relative mb-1">
                <input
                    id="custom-slider"
                    type="range"
                    ref={range}
                    value={minute}
                    min="0"
                    max={MAX}
                    className="w-full relative z-10"
                    onChange={handleChangeRange}
                    onInput={handleSliderChange}
                />
            </div>
            <div className="flex justify-between font-futura-book text-base font-normal">
                <span>Giá: </span>
                <div className="flex items-center">
                    <input
                        ref={input}
                        defaultValue={minute}
                        onChange={handleChangeInput}
                        className="bg-[#F6F6F6] border border-[#F6F6F6] outline-none rounded text-[#000] w-[60px] cursor-none"/>
                    <span>₫</span>
                </div>
                ———
                <p>{MAX}₫</p>
            </div>
        </section>
    );
};

export default Range;

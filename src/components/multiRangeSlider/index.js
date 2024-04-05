import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
// import { Slider } from "@material-tailwind/react";
import "./index1.css";
import rangebg from '../../assets/images/range.svg';
const MultiRangeSlider = ({ min, max, symbol }) => {
    const [minVal,
        setMinVal] = useState(min);
    const [maxVal,
        setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className="container">

            <div className="slider">
                <div className="left">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minVal}
                        onChange={event => {
                            const value = Math.min(Number(event.target.value), maxVal - 1);
                            setMinVal(value);
                            minValRef.current = value;
                        }}
                        className="thumb thumb--left"
                        style={{ zIndex: minVal > max - 100 && "5" }}></input>
                </div>
                <div className="right">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={event => {
                            const value = Math.max(Number(event.target.value), minVal);
                            setMaxVal(value);
                            maxValRef.current = value;
                        }}
                        className="thumb thumb--right" />
                </div>
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider2">
                    <div
                        className={`slider__left-value`}
                        style={{
                            left: `${getPercent(minVal)}%`, background: `url(${rangebg})`, backgroundSize: "cover",
                        }}>{minVal === 0 ? "Min Price" : symbol + (minVal * 1000 + 7000).toLocaleString()}</div>
                </div>

                <div className="slider2">
                {/* <div className="w-11 h-11 bg-red-600 rounded-[40px] shadow border-8 border-white"></div> */}
                    <div
                        className="slider__right-value"
                        style={{
                            left: `${getPercent(maxVal)}%`, background: `url(${rangebg})`, backgroundSize: "cover",
                        }}>{maxVal === 0 ? "Max Price" : symbol + (maxVal * 1000 + 7000).toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default MultiRangeSlider;

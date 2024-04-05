import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";
import rangebg from '../../assets/images/range.svg';
const TermRangeSlider = ({ min, max, symbol }) => {
    const [minVal,
        setMinVal] = useState(min);
    const [maxVal,
        setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);
    setMinVal(min)
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
    // const [term, setTerm] = useState(0);
    return (
        <div className="container flex flex-col">
            <div className="w-full mb-4 flex flex-row justify-between">
                <div >Term</div>
                <div >Term</div>
            </div>
            <div className="slider">
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
                <div className="slider__track" />
                <div ref={range} className="Sslider__range" />
                <div className="slider1">
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

TermRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default TermRangeSlider;

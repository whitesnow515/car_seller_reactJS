import React from "react";
// import {Link} from 'react-router-dom'
import MultiRangeSlider from "./multiRangeSlider";
// import {Select, Option} from "@material-tailwind/react";
import { GrayBtn } from "./gallery/GrayBtn";
import { WhiteBtn } from "./gallery/WhiteBtn";
import { ReactComponent as Section2Pattern } from "./svg/section2Pattern.svg";
import { Link } from "react-router-dom";

export default function BudgetOffer() {
    return (
        <div className="p-5 lg:p-[100px]  mx-auto">
            <div className="block w-full max-w-[1280px] mx-auto">

                <div className="mb-6 w-full lg:justify-between justify-center lg:gap-10 items-center lg:items-start flex lg:flex-row flex-col ">
                    <div className="w-full max-w-[750px] relative">
                        <div
                            className="text-neutral-800 text-[64px] font-bold font-['Barlow Condensed'] leading-[70px]  scale-y-125">WHAT CAN I GET FOR
                        </div>
                        <h1 className="mt-4 md:mt-0 text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text font-barlow-condensed text-[64px] font-bold leading-tight uppercase  scale-y-125">
                            MY BUDGET?
                        </h1>
                        <div className="hidden lg:block -z-10 absolute right-[0px] top-[90px] scale-90 h-2/3 overflow-hidden">
                            <Section2Pattern />
                        </div>
                    </div>
                    <div
                        className="w-11/12 lg:max-w-[580px] lg:self-stretch self-center flex-col justify-end items-start gap-9 mt-9 flex">
                        <div className="w-[100px] h-[3px] bg-gradient-to-r from-red-600 to-blue-700"></div>
                        <div
                            className="lg:max-w-[440px] text-black text-2xl font-normal font-['Barlow'] leading-loose">Explore what you can get with your budget here at Thatchers Motor Company</div>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-3/4 px-5 mx-auto py-10">
                        <MultiRangeSlider min={0} max={28} symbol={"£"} />
                    </div>
                    <Link to="vehicles-for-sale/used-trucks/" className="w-fit mx-auto">
                        <GrayBtn name={"search offer"} handleClick={null} upperCase={true} />
                    </Link>
                </div>
                <div className="w-full flex my-[50px]">
                    <Link to="/sell-your-vehicle/" className="mx-auto">
                        <WhiteBtn name={"want to trade your vehicle?"} handleClick={null} upperCase={true} />
                    </Link>
                </div>

            </div>
        </div>
    )
}
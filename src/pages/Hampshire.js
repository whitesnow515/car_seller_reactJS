import MainLayout from "../layouts/MainLayout";
import React, { useState } from "react";
// import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
// import { VehicleCard } from "../components/gallery/VehicleCard";
import { Typography } from "@material-tailwind/react";
import hampshire from '../assets/images/hampshire.png'
import hampshire1 from '../assets/images/hampshire1.png'
import { ReactComponent as CheckSVG } from '../components/svg/check3.svg'
import HeroSection from "../components/gallery/HeroSection";
import getData from "../data/shortlist"; 
import { VehicleCard1 } from "../components/gallery/VehicleCard1";


const amount = 6;
export default function Hampshire() {
    const [current, setCurrent] = useState(0);
    const data = getData()

    const data1 = [
        {
            cartype: "Ford", contents: [
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            ]
        },
        {
            cartype: "Fiat", contents: [
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            ]
        },
        {
            cartype: "Mitsubishi", contents: [
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 5 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            ]
        },
        {
            cartype: "Isuzu", contents: [
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            ]
        },
        {
            cartype: "Nissan", contents: [
                "Ranger 2.2 TDCi Limited Super Cab Pickup 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            ]
        },
        {
            cartype: "Toyota", contents: [
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)"
            ]
        },
        {
            cartype: "Volkswagen", contents: [
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Super Cab Pickup 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
                "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
                "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
                "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            ]
        },
    ]
    const [active,
        setActive] = React.useState(1);

    const next = () => {
        if (active === 5)
            return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1)
            return;
        setActive(active - 1);
    };

    const viewcontent = (index) => {
        setCurrent(index);
    }
    return (
        <MainLayout>

            <HeroSection img={hampshire1} words={["located at ", "hampshire"]} mt={"mt-5"} />
            <div
                className="max-w-[1440px] w-full mx-auto  py-[50px] bg-white justify-center items-start gap-[50px] flex xl:flex-row flex-col">
                <div
                    className="xl:w-1/2 w-full flex-col justify-start items-start gap-6 inline-flex">
                    <div
                        className="self-stretch text-neutral-800 text-7xl font-bold font-['Barlow Condensed'] uppercase leading-[80px]">Used Pickup Trucks For Sale Hampshire</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">Welcome
                        to TMC Motors, a distinguished and award-winning dealership renowned for its
                        extensive inventory of top-quality used vehicles, including pickup trucks, vans,
                        and cars. At TMC Motors, we take pride not only in offering a wide selection of
                        exceptional pre-owned vehicles but also in providing the convenience of vehicle
                        trade-ins. Additionally, we offer a seamless option to sell your car for cash,
                        complete with an instant quote.<br /><br />Our
                        dedicated team excels in handling both local transactions in Huddersfield and
                        sales that span long distances. Regardless of your location, we are fully
                        equipped to meet your automotive needs.<br /><br />When
                        you choose to do business with us, rest assured that exceptional service is our
                        promise. As part of our commitment to convenience, we can even arrange for the
                        pickup and delivery of your vehicle right at your doorstep.`</div>
                </div>
                <div
                    className="xl:w-1/2 w-full self-stretch flex-col justify-start items-center gap-8 inline-flex">
                    <div className="w-fit">
                        <img className="rounded-3xl w-fit" src={hampshire} alt="'adsf" />
                    </div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">The advantages of buying and selling vehicle with TMC include;</div>
                    <div
                        className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Close Brothers Motor Finance</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Car Finance 24/7</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Moto Novo</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Credit Plus</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Zuto</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">MoneyBarn</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Advantage Finance</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <CheckSVG />
                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Alphera Financial Services</div>
                        </div>
                    </div>
                    <div className="self-stretch">
                        <span className="text-black text-xl font-normal font-['Barlow'] leading-loose">To learn more about us or any vehicle in our stock, please call us
                            <br />on&nbsp;
                        </span>
                        <span
                            className="text-blue-700 text-xl font-normal font-['Barlow'] underline leading-loose">01252 943974</span>
                        <span className="text-black text-xl font-normal font-['Barlow'] leading-loose">
                            (Head Office) or&nbsp;
                        </span>
                        <span
                            className="text-blue-700 text-xl font-normal font-['Barlow'] underline leading-loose">01484 482511</span>
                        <span className="text-black text-xl font-normal font-['Barlow'] leading-loose">
                            (Huddersfield)</span>
                    </div>
                </div>
            </div>
            <div className="flex py-10 px-5 w-full flex-col md:flex-row max-[1360px] justify-center bg-gray-200">
                <div className="flex py-10 px-5 flex-col md:flex-row justify-center w-full">
                    <div className="w-4/5 min-w-[380px]  md:w-1/4 mx-auto">
                        <RefineSearch />
                    </div>
                    <div className="w-full px-[20px] lg:w-8/12 md:w-1/2  flex-col">
                        <div className="w-full ">
                            <div className="flex w-full flex-wrap items-center justify-evenly">
                            {data.map((item, index) => {
                                if (index < amount * active && index >= amount * active - amount) {
                                    return (<VehicleCard1 item={item} key={index}/>);
                                }
                                return null;
                            })}
                            </div>
                            <div className="flex items-center gap-4 justify-center mt-[40px]">
                                <div className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300" onClick={prev}>
                                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 1 ? 'bg-gray-900 text-white' : ''}`} onClick={() => setActive(1)}>1</div>
                                    <div className={`flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 2 ? 'bg-gray-900 text-white' : ''}`} onClick={() => setActive(2)}>2</div>
                                    <div className={`flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 3 ? 'bg-gray-900 text-white' : ''}`} onClick={() => setActive(3)}>3</div>
                                    <div className={`flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 4 ? 'bg-gray-900 text-white' : ''}`} onClick={() => setActive(4)}>4</div>
                                    <div className={`flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 5 ? 'bg-gray-900 text-white' : ''}`} onClick={() => setActive(5)}>5</div>
                                </div>
                                <div className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300" onClick={next}>
                                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                        <div className=" px-11 mt-[50px] pt-[80px] my-5 bg-white rounded-xl" bis_skin_checked="1">
                            <Typography variant="h3" className="pb-[20px]">Representative Example</Typography>
                            <table className="table w-full">
                                <tbody className="w-full">
                                    <tr>
                                        <td>Product</td>
                                        <td>APR</td>
                                        <td>Total Amount Payable</td>
                                        <td>Agreement Term</td>
                                        <td>Monthly Payments</td>
                                        <td>Fixed Interest Rate</td>
                                    </tr>
                                    <tr className="border-white">
                                        <td>Hire Purchase</td>
                                        <td>10.90%</td>
                                        <td>£17,126.72</td>
                                        <td>46</td>
                                        <td>£296.39</td>
                                        <td>10.90%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="pt-[30px] pb-[80px]">
                                <strong>Disclosure</strong>
                                We work with a number of carefully selected credit providers who may be able to
                                offer you finance for your purchase. We are only able to offer finance products
                                from these providers.
                            </p>
                        </div>
                        <div className=" px-11 mt-[50px] py-8 my-5 bg-white rounded-xl" bis_skin_checked="1">
                            <Typography variant="h3" className="pb-[10px]  uppercase">More Trucks</Typography>
                            <div className="mt-6 flex flex-wrap flex-row justify-wrap justify-between  uppercase">
                                {data1.map((item, index) => (
                                    <div key={index} onClick={() => viewcontent(index)} className={`${index===current?"bg-gray-900 text-white hover:text-black hover:bg-white":"text-black hover:text-white bg-white hover:bg-gray-900"} mt-6 md:mt-0  rounded-full py-1 hover:cursor-pointer px-3   border-2 border-black`}>{item.cartype}</div>
                                ))}
                            </div>
                            <div className="mt-6 mb-8 flex flex-wrap justiy-between">
                                {data1[current].contents.map((item, index) => (
                                    <div key={index+"1"} className="min-w-[40%] underline">{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}


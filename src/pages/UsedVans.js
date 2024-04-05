import MainLayout from "../layouts/MainLayout";
import React from "react";
// import {Button, IconButton} from "@material-tailwind/react";
import {ArrowRightIcon, ArrowLeftIcon} from "@heroicons/react/24/outline";
import {Select, Option} from "@material-tailwind/react";
import {Typography} from "@material-tailwind/react";
import {RefineSearch} from "../components/gallery/RefineSearch";
import usedvans from "../assets/images/usedvans.png";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import getData from "../data/shortlist"; 

const amount = 6;

export default function UsedVans() {
    const data = getData();
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
    return (
        <MainLayout>
            <HeroSection img={usedvans} mt={"mt-4 lg:mt-20"} words={["used", "vans"]}/>

            <div className="flex py-10 px-5 flex-wrap justify-evenly w-full bg-gray-200">
                <div className="w-4/5 px-[10px] lg:w-1/4">
                    <div className="bg-white px-[30px]">
                        <RefineSearch/>
                    </div>
                </div>
                <div className="w-11/12 lg:w-3/4 px-[10px] flex-col">
                    <div className="mb-6 w-full  lg:w-1/3 float-right">
                        <Select variant="standard" label="Sort by" className="">
                            <Option value="1">Price - Low to High</Option>
                            <Option value="2">Price - High to Low</Option>
                            <Option value="3">Age - Newest First</Option>
                            <Option value="4">MPG - Highest First</Option>
                            <Option value="5">CO2 - Lowest First</Option>
                            <Option value="6">Tax Cost/VED - Lowest First</Option>
                            <Option value="7">Engine Size - Highest First</Option>
                            <Option value="8">Engine Size - Lowest First</Option>
                            <Option value="9">Mileeage - Lowest First</Option>
                        </Select>
                    </div>
                    <div className="w-full ">
                        <div className="flex flex-wrap items-center w-full justify-evenly">
                        {data.map((item, index) => {
                                if (index < amount * active && index >= amount * active - amount) {
                                    return (<VehicleCard1 key={index} item={item}/>);
                                }
                                return null;
                            })}
                        </div>
                        <div className="flex items-center gap-4 justify-center mt-[40px]">
                            <div
                                className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                                onClick={prev}>
                                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4"/>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* <IconButton {...getItemProps(1)}>1</IconButton> */}
                                <div
                                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 1
                                    ? 'bg-gray-900 text-white'
                                    : ''}`}
                                    onClick={() => setActive(1)}>1</div>
                                <div
                                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 2
                                    ? 'bg-gray-900 text-white'
                                    : ''}`}
                                    onClick={() => setActive(2)}>2</div>
                                <div
                                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 3
                                    ? 'bg-gray-900 text-white'
                                    : ''}`}
                                    onClick={() => setActive(3)}>3</div>
                                <div
                                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 4
                                    ? 'bg-gray-900 text-white'
                                    : ''}`}
                                    onClick={() => setActive(4)}>4</div>
                                <div
                                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 5
                                    ? 'bg-gray-900 text-white'
                                    : ''}`}
                                    onClick={() => setActive(5)}>5</div>
                            </div>
                            <div
                                className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                                onClick={next}>
                                <ArrowRightIcon strokeWidth={2} className="h-4 w-4"/>
                            </div>
                        </div>
                    </div>
                    <div className=" px-11 mt-[50px] pt-[80px] my-5 bg-white" bis_skin_checked="1">
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
                </div>
            </div>
        </MainLayout>
    )
}

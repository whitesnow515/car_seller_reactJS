import {Typography} from "@material-tailwind/react";
import React, {useState} from "react";
import {Accordion, AccordionHeader} from "@material-tailwind/react";
import {Select, Option} from "@material-tailwind/react";
import { WhiteBtn } from "./WhiteBtn";
import { GrayBtn } from "./GrayBtn";

function Icon({id, open}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open
            ? "rotate-90"
            : "-rotate-90"} h-5 w-5 transition-transform transform origin-center `}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
    );
}
export function RefineSearch(props) {
    const [checked,
        setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };
    const [open,
        setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value
        ? 0
        : value);
    return (
        <div className="bg-white px-[30px] rounded-2xl">
            <Typography variant="h3" className="py-4" color="gray">Refine Search</Typography>
            <Accordion
                className=" py-4"
                open={open === 1}
                icon={< Icon id = {
                1
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(1)}>

                    <div className="flex items-center">
                        BRAND
                    </div>
                </AccordionHeader>
                <div  className={`${open===1?"block":"hidden"}`}>
                    <div className="flex flex-row items-center">
                        <label className="custom-checkbox">
                            <input type="checkbox" className="hidden"/>
                            <span className="checkmark"></span>
                        </label>
                        <div
                            className="ml-4 text-gray-700 font-saira text-14 font-normal leading-20 tracking-tighter uppercase">ALL BRAND</div>

                    </div>
                    <div className="mt-[14px] flex flex-row items-center">
                        <label className="custom-checkbox">
                            <input type="checkbox" className="hidden"/>
                            <span className="checkmark"></span>
                        </label>
                        <div
                            className="ml-4 text-gray-700 font-saira text-14 font-normal leading-20 tracking-tighter uppercase">Nissan</div>
                    </div>
                    <div className="mt-[14px] flex flex-row items-center">
                        <label className="custom-checkbox">
                            <input type="checkbox" className="hidden"/>
                            <span className="checkmark"></span>
                        </label>
                        <div
                            className="ml-4 text-gray-700 font-saira text-14 font-normal leading-20 tracking-tighter uppercase">BRAND2</div>
                    </div>
                    <div className="mt-[14px] flex flex-row items-center">
                        <label className="custom-checkbox">
                            <input type="checkbox" className="hidden"/>
                            <span className="checkmark"></span>
                        </label>
                        <div
                            className="ml-4 text-gray-700 font-saira text-14 font-normal leading-20 tracking-tighter uppercase">BRAND3</div>
                    </div>
                    <div className="mt-[14px] flex flex-row">
                        <div
                            className="text-blue-500 hover:cursor-pointer hover:text-blue-600 font-saira text-14 font-semibold leading-22 tracking-tighter uppercase">
                            show more
                        </div>

                    </div>

                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 2}
                icon={< Icon id = {
                2
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="flex items-center">
                        MODEL
                    </div>
                </AccordionHeader>
                <div className={`${open===2?"block":"hidden"}`}>
                    <Select  label="All Makes" className="mb-6">
                        <Option value="25000">All Makes</Option>
                        <Option value="25000">Ford</Option>
                        <Option value="27500">Isuzu</Option>
                    </Select>
                    <div className="py-2"></div>
                    <Select label="All Models" className="mb-6">
                        <Option value="25000">All Models</Option>
                        <Option value="27500">Amarok(82)</Option>
                        <Option value="27500">D-max</Option>
                    </Select>
                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 3}
                icon={< Icon id = {
                3
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    <div className="flex items-center">
                        BODY TYPE
                    </div>
                </AccordionHeader>
                <div  className={`${open===3?"block":"hidden"}`}>
                    <Select label="Body Type" className="mb-6">
                        <Option value="25000">All bodytypes</Option>
                        <Option value="25000">Pickup</Option>
                    </Select>

                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 9}
                icon={< Icon id = {
                9
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(9)}>
                    <div className="flex items-center">
                        PRICE
                    </div>
                </AccordionHeader>
                <div  className={`${open===9?"block":"hidden"}`}>
                    <div className="w-full">
                        {/* <div className="w-[300px] mx-auto"> */}
                        <div className="w-full mx-auto">
                            <label
                                className="relative flex justify-between items-center mb-2 text-xl w-full">
                                <input
                                    type="checkbox"
                                    className="absolute left-0 top-0 w-full h-full appearance-none peer rounded-md"
                                    onChange={handleToggle}/>
                                <span
                                    className={`w-full h-14 flex items-center flex-shrink-0 p-1 border-2 border-gray-300 rounded-full duration-300 ease-in-out after:w-1/2 after:h-12 after:bg-[#054ac5] after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-full`}></span>
                                <span className="w-full pr-10 pl-12 absolute flex justify-between">
                                    <div className="text-center"
                                        style={{
                                        color: checked
                                            ? 'initial'
                                            : 'white'
                                    }}>Cash</div>
                                    <div className="text-center"
                                        style={{
                                        color: !checked
                                            ? 'initial'
                                            : 'white'
                                    }}>Finance</div>
                                </span>
                            </label>
                        </div>

                    </div>

                    <Select label="Min Payment" className="mb-6">
                        <Option value="25000">£10,000</Option>
                        <Option value="25000">£11,000</Option>
                        <Option value="25000">£12,000</Option>
                        <Option value="25000">£13,000</Option>
                        <Option value="25000">£14,000</Option>
                        <Option value="25000">£15,000</Option>
                        <Option value="25000">£16,000</Option>
                        <Option value="25000">£17,000</Option>
                        <Option value="25000">£18,000</Option>
                        <Option value="25000">£19,000</Option>
                        <Option value="25000">£20,000</Option>
                        <Option value="25000">£22,000</Option>
                        <Option value="25000">£25,000</Option>
                        <Option value="25000">£27,500</Option>
                        <Option value="27500">£30,000</Option>
                        <Option value="25000">£32,500</Option>
                    </Select>
                    <div className="py-2"></div>
                    <Select label="Max Payment" className="mb-6">
                        <Option value="25000">£10,000</Option>
                        <Option value="25000">£11,000</Option>
                        <Option value="25000">£12,000</Option>
                        <Option value="25000">£13,000</Option>
                        <Option value="25000">£14,000</Option>
                        <Option value="25000">£15,000</Option>
                        <Option value="25000">£16,000</Option>
                        <Option value="25000">£17,000</Option>
                        <Option value="25000">£18,000</Option>
                        <Option value="25000">£19,000</Option>
                        <Option value="25000">£20,000</Option>
                        <Option value="25000">£22,000</Option>
                        <Option value="25000">£25,000</Option>
                        <Option value="25000">£27,500</Option>
                        <Option value="27500">£30,000</Option>
                        <Option value="25000">£32,500</Option>
                        <Option value="27500">£35,000</Option>
                    </Select>
                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 4}
                icon={< Icon id = {
                4
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    <div className="flex items-center">
                        REG YEAR
                    </div>
                </AccordionHeader>
                <div className={`${open===4?"block":"hidden"}`}>
                    <Select label="Min Reg Year" className="mb-6">
                        <Option value="25000">1</Option>
                        <Option value="27500">2</Option>
                    </Select>
                    <div className="py-2"></div>
                    <Select label="Max Reg Year" className="mb-6">
                        <Option value="25000">3</Option>
                        <Option value="27500">4</Option>
                    </Select>
                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 5}
                icon={< Icon id = {
                5
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    <div className="flex items-center">
                        MILEAGE
                    </div>
                </AccordionHeader>
                <div className={`${open===5?"block":"hidden"}`}>
                    <Select label="0" className="mb-6">
                        <Option value="25000">1,000</Option>
                        <Option value="27500">2,000</Option>
                        <Option value="27500">3,000</Option>
                        <Option value="27500">4,000</Option>
                    </Select>
                    <div className="py-2"></div>
                    <Select label="Any" className="mb-6">
                        <Option value="25000">13,000</Option>
                        <Option value="27500">14,000</Option>
                        <Option value="27500">15,000</Option>
                        <Option value="27500">16,000</Option>
                    </Select>
                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 6}
                icon={< Icon id = {
                6
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                    <div className="flex items-center">
                        TRANSMISSION
                    </div>
                </AccordionHeader>
                <div className={`${open===6?"block":"hidden"}`}>
                    <Select label="transmission" className="mb-6">
                        <Option value="25000">All Transmission</Option>
                        <Option value="27500">automatic</Option>
                        <Option value="27500">manual</Option>
                    </Select>
                </div>
            </Accordion>
            <Accordion
                className=" py-4"
                open={open === 7}
                icon={< Icon id = {
                7
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                    <div className="flex items-center">
                        FUEL TYPE
                    </div>

                </AccordionHeader>
                <div className={`${open===7?"block":"hidden"}`}>
                    <Select label="fuel type" className="mb-6 z-20">
                        <Option value="25000">All Fueltype</Option>
                        <Option value="27500">disel</Option>
                    </Select>
                </div>
            </Accordion>
            <Accordion
                className="overflow-visible py-4"
                open={open === 8}
                icon={< Icon id = {
                8
            }
            open = {
                open
            } />}>
                <AccordionHeader onClick={() => handleOpen(8)}>
                    <div className="flex items-center">
                        COLOUR
                    </div>

                </AccordionHeader>
                <div  className={`${open===8?"block":"hidden"}`}>
                    <Select label="Color" className="mb-6">
                        <Option value="25000">All colors</Option>
                        <Option value="27500">black</Option>
                        <Option value="27500">blue</Option>
                        <Option value="27500">frozen</Option>
                        <Option value="27500">dark</Option>
                    </Select>
                </div>
            </Accordion>
            <div className="flex pb-4">
                <div className="w-1/2 pr-1">
                    <GrayBtn name="APPLY" isFit={false}/>
                </div>
                <div className="w-1/2 pl-1">
                    <WhiteBtn name="RESET" isFit={false}/>
                </div>
            </div>
        </div>
    )

}
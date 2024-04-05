import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
// import { CustomCarousel } from "./CustomCarousel";
import { VehicleCard1 } from "./VehicleCard1";
import React, { useState } from "react";

export function CustomTab1({title, data, tabs}) {
    const [activeTab, setActiveTab] = useState(tabs[0].value)  
    // tabData = new Array(data.length)
    // tabData = data
    return (
        <Tabs value={activeTab} className=" w-full">
            <TabsHeader
                className=" lg:pb-[50px] pb-6 bg-transparent w-full  flex lg:flex-row flex-col justify-between items-center px-6"
                indicatorProps={{
                    className: "bg-gray-600 shadow-none hidden !text-gray-900"
                }}>
                <div className="pb-8 lg:pb-0 flex flex-wrap justify-center items-center">
                    <h1 className="text-gray-800 text-center font-barlow-condensed text-6xl font-bold leading-tight uppercase">
                        {title}
                    </h1> 
                </div>
                <div className="flex gap-3">
                {tabs.map(({ label, value }) => (
                    <Tab key={value} value={value} onClick={() => setActiveTab(value)} className="w-fit">
                        {/* <div
                            className={`${activeTab !== value ? "bg-gray-200 text-gray-700" : "bg-gray-700 text-gray-200 "} border-gray-500 w-[200px] border-2  rounded-md  cursor-pointer  text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-900 hover:text-white`}>
                            {label} 
                        </div> */}  
                        <div className={`${activeTab !== value?"text-black bg-white":"bg-gray-900 text-white "}hover:cursor-pointer uppercase text-center  rounded-full px-4 py-2  w-fit border-2 border-black hover:text-white hover:bg-black`}>
                            {label}
                        </div>
                    </Tab>
                ))}
                </div>
            </TabsHeader>
            <TabsBody className="">
                {tabs.map(({ value }) => (
                    <TabPanel key={value} value={value}>
                        <div className=" flex flex-wrap w-full justify-evenly">
                        {value === "all" ?
                            data.map((item) => (
                                <VehicleCard1 key={item.name} item={item} />                                
                            ))
                            :
                            data.filter((item) => item.type === value).map((item) => (
                                <VehicleCard1 key={item.name} item={item} />
                            ))
                        }
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
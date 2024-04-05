import MainLayout from "../layouts/MainLayout";
import React from "react";
// import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import { Select, Option } from "@material-tailwind/react";
import { RefineSearch } from "../components/gallery/RefineSearch";
// import { Typography } from "@material-tailwind/react";
import sellcars from "../assets/images/usedpickup.png";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import getData from "../data/shortlist";

const amount = 6;

export default function UsedTrucks() {
  const data = getData();
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  return (
    <MainLayout>
      <HeroSection
        img={sellcars}
        mt={"mt-4 lg:mt-20"}
        words={["used", "pick-up", "truck"]}
      />
      <div className="flex py-10 px-5 flex-col md:flex-row justify-center w-full  bg-[#f6f6f6]">
        <div className="flex flex-col md:flex-row md:justify-between max-w-[1440px] ">
          <div className="md:block hidden min-w-[380px]  md:w-1/4">
            <RefineSearch />
          </div>
          <div className="w-full md:w-[72%]  flex-col">
            <div className="mb-6 w-full md:w-1/2 lg:w-1/3 float-right border-0">
              <select className="w-full rounded-full border-2 border-gray-300 p-2">
                <option value="option1">Price - Low to High</option>
                <option value="option2">Price - High to Low</option>
                <option value="option3">Age - Newest First</option>
                <option value="option1">MPG - Highest First</option>
                <option value="option3">CO2 - Lowest First</option>
                <option value="option1">Tax Cost/VED - Lowest First</option>
                <option value="option2">Engine Size - Highest First</option>
                <option value="option3">Engine Size - Lowest First</option>
                <option value="option2">Mileeage - Lowest First</option>
              </select>
            </div>

            <div className="w-full ">
              <div className="flex w-full flex-wrap items-center justify-between">
                {data.map((item, index) => {
                  if (
                    index < amount * active &&
                    index >= amount * active - amount
                  ) {
                    return <VehicleCard1 key={index} item={item} />;
                  }
                  return null;
                })}
              </div>
              <div className="flex items-center gap-4 justify-center mt-[40px]">
                <div
                  className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                  onClick={prev}
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  {/* <IconButton {...getItemProps(1)}>1</IconButton> */}
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 1 ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => setActive(1)}
                  >
                    1
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 2 ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => setActive(2)}
                  >
                    2
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 3 ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => setActive(3)}
                  >
                    3
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 4 ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => setActive(4)}
                  >
                    4
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 5 ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => setActive(5)}
                  >
                    5
                  </div>
                </div>
                <div
                  className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                  onClick={next}
                >
                  <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

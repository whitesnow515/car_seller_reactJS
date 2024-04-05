import MainLayout from "../layouts/MainLayout";
// import { Typography } from "@material-tailwind/react";
// import TermRangeSlider from "../components/termRangeSlider";
// import DepositeRangeSlider from "../components/depositeRangeSlider";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import car from "../assets/images/mycar.png";
import roads from "../assets/images/roads.png";
import carlock from "../assets/images/carlock1.png";
import carintro from "../assets/images/carintoro.png";
import { useState } from "react";
import { ShareModal } from "../components/ShareModal";
import Overview from "../components/Overview";
import Specification from "../components/Specification";
import Features from "../components/Features";
import Efficiency from "../components/Efficiency";
export default function Viewdetail() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      label: "overview",
      value: "overview",
      content: <Overview />,
    },
    {
      label: "Features",
      value: "Features",
      content: <Features />,
    },
    {
      label: "specification",
      value: "specification",
      content: <Specification />,
    },
    {
      label: "efficiency",
      value: "efficiency",
      content: <Efficiency />,
    },
  ];
  const [activeTab, setActiveTab] = useState("Used Cars");
  // const [active,
  //     setActive] = useState(1);

  return (
    <MainLayout>
      <div className="w-full max-w-[1280px] mx-auto">
        <ShareModal open={open} setOpen={setOpen} />
        <div className="flex flex-col">
          <div className="w-full mt-8 flex justify-end">
            <div className="flex flex-row">
              <Link
                to="/shortlist"
                className="flex   cursor-pointer justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-4 py-2 rounded-full hover:bg-gray-400  bg-white text-black"
              >
                <div className="mr-2 uppercase ">shortlist</div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:none"
                >
                  <path
                    d="M2.87868 4.21193C1.70711 5.3835 1.70711 7.283 2.87868 8.45457L8.00004 13.5759L13.1213 8.45457C14.2929 7.283 14.2929 5.3835 13.1213 4.21193C11.9497 3.04036 10.0503 3.04036 8.87868 4.21193L8.00004 5.09065L7.12132 4.21193C5.94975 3.04036 4.05025 3.04036 2.87868 4.21193Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="flex  cursor-pointer ml-4 justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-4 py-2 rounded-full hover:bg-gray-400  bg-white text-black">
                <div className="mr-2 uppercase ">print pdf</div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 11.3333H12.6667C13.403 11.3333 14 10.7364 14 10V7.33333C14 6.59695 13.403 6 12.6667 6H3.33333C2.59695 6 2 6.59695 2 7.33333V10C2 10.7364 2.59695 11.3333 3.33333 11.3333H4.66667M6 14H10C10.7364 14 11.3333 13.403 11.3333 12.6667V10C11.3333 9.26362 10.7364 8.66667 10 8.66667H6C5.26362 8.66667 4.66667 9.26362 4.66667 10V12.6667C4.66667 13.403 5.26362 14 6 14ZM11.3333 6V3.33333C11.3333 2.59695 10.7364 2 10 2H6C5.26362 2 4.66667 2.59695 4.66667 3.33333V6H11.3333Z"
                    stroke="#272727"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                onClick={() => setOpen(true)}
                className=" cursor-pointer flex ml-4 justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-4 py-2 rounded-full hover:bg-gray-400  bg-white text-black"
              >
                <div className="mr-2 uppercase ">share</div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.78925 8.89462C5.9241 8.62543 6 8.32158 6 8C6 7.67842 5.9241 7.37457 5.78925 7.10538M5.78925 8.89462C5.46089 9.55006 4.78299 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C4.78299 6 5.46089 6.44994 5.78925 7.10538M5.78925 8.89462L10.2108 11.1054M5.78925 7.10538L10.2108 4.89462M10.2108 4.89462C10.5391 5.55006 11.217 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 4.32158 10.0759 4.62543 10.2108 4.89462ZM10.2108 11.1054C10.0759 11.3746 10 11.6784 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C11.217 10 10.5391 10.4499 10.2108 11.1054Z"
                    stroke="#272727"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8 w-full flex flex-col md:flex-row md:justify-between bg-[#f6f6f6]">
            <div className="w-[47%]">
              <div className="w-full">
                <img src={car} alt="car" className="w-full" />
                <div className="mt-4 w-full flex flex-row justify-between items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-white hover:bg-gray-200 flex justify-center items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 15.8334L6.66667 10.0001L12.5 4.16675"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <img
                      src={car}
                      alt="car"
                      className="max-w-[84px] rounded-lg"
                    />
                  </div>
                  <div className="">
                    <img
                      src={car}
                      alt="car"
                      className="max-w-[84px] rounded-lg"
                    />
                  </div>
                  <div className="">
                    <img
                      src={car}
                      alt="car"
                      className="max-w-[84px] rounded-lg"
                    />
                  </div>
                  <div className="">
                    <img
                      src={car}
                      alt="car"
                      className="max-w-[84px] rounded-lg"
                    />
                  </div>
                  <div className="">
                    <img
                      src={car}
                      alt="car"
                      className="max-w-[84px] rounded-lg"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-white hover:bg-gray-200 flex justify-center items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 4.16658L13.3333 9.99992L7.5 15.8333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full bg-white rounded-lg mt-[50px] p-[24px] flex flex-col justify-center items-center">
                  <div className="text-gray-900 text-center font-barlow-condensed text-2xl  font-medium leading-8">
                    Need Assistance?
                  </div>
                  <div className="mt-2 text-black text-center font-barlow text-base font-normal leading-6 lowercase max-w-[37 7px]">
                    We would be happy to answer any questions you may have, to
                    help you make the right choice.
                  </div>
                  <div className="w-full mt-6 flex flex-row justify-between">
                    <div className="bg-black flex flex-row justify-center items-center py-[10px] w-[45%] text-white rounded-full uppercase">
                      contact US
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.34961 2.4001C2.34961 1.95827 2.70778 1.6001 3.14961 1.6001H4.87191C5.26298 1.6001 5.59673 1.88283 5.66102 2.26858L6.25247 5.81728C6.31021 6.1637 6.13525 6.50727 5.82113 6.66434L4.58262 7.28359C5.47566 9.50275 7.24695 11.2741 9.46611 12.1671L10.0854 10.9286C10.2424 10.6145 10.586 10.4395 10.9324 10.4972L14.4811 11.0887C14.8669 11.153 15.1496 11.4867 15.1496 11.8778V13.6001C15.1496 14.0419 14.7914 14.4001 14.3496 14.4001H12.7496C7.00585 14.4001 2.34961 9.74386 2.34961 4.0001V2.4001Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="bg-black flex flex-row justify-center items-center py-[10px] w-[45%] text-white rounded-full uppercase">
                      {" "}
                      Live support
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.34961 3.9999C2.34961 3.11625 3.06595 2.3999 3.94961 2.3999H9.54961C10.4333 2.3999 11.1496 3.11625 11.1496 3.9999V7.1999C11.1496 8.08356 10.4333 8.7999 9.54961 8.7999H7.94961L5.54961 11.1999V8.7999H3.94961C3.06595 8.7999 2.34961 8.08356 2.34961 7.1999V3.9999Z"
                          fill="#F6F6F6"
                        />
                        <path
                          d="M12.7496 5.5999V6.3999C12.7496 8.60904 10.9587 10.3999 8.74961 10.3999H8.61235L7.19899 11.8133C7.42284 11.9324 7.67834 11.9999 7.94961 11.9999H9.54961L11.9496 14.3999V11.9999H13.5496C14.4333 11.9999 15.1496 11.2836 15.1496 10.3999V7.1999C15.1496 6.31625 14.4333 5.5999 13.5496 5.5999H12.7496Z"
                          fill="#F6F6F6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col mb-8 pb-4">
              <div className="flex flex-col w-full border-2 rounded-2xl">
                <div className="rounded-t-2xl bg-white p-6">
                  <div className="text-gray-700 font-barlow-condensed font-bold text-4xl leading-10">
                    Land Rover Range Rover Evoque
                  </div>
                  <div className="mt-2">
                    2.0 TD4 HSE Dynamic Auto 4WD Euro 6 (s/s) 5dr
                  </div>
                  <div className="mt-6 flex flex-row">
                    <div className="flex flex-row items-center  bg-[#f6f6f6] px-2 py-1 rounded-full">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66667 10.6667H8V8H7.33333M8 5.33333H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                          stroke="#0449C8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      74,515 miles
                    </div>
                    <div className="flex flex-row items-center bg-[#f6f6f6] px-2 py-1 rounded-full ml-2 ">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66602 6.66667V2L2.66602 9.33333H7.33268L7.33268 14L13.3327 6.66667L8.66602 6.66667Z"
                          stroke="#0449C8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Diesel
                    </div>
                    <div className="flex flex-row items-center bg-[#f6f6f6] px-2 py-1 rounded-full ml-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 4.66667C10.7364 4.66667 11.3333 5.26362 11.3333 6M14 6C14 8.20914 12.2091 10 10 10C9.59589 10 9.20577 9.94007 8.83805 9.82862L7.33333 11.3333H6V12.6667H4.66667V14H2.66667C2.29848 14 2 13.7015 2 13.3333V11.6095C2 11.4327 2.07024 11.2631 2.19526 11.1381L6.17138 7.16195C6.05993 6.79423 6 6.40412 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z"
                          stroke="#0449C8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="mr-1">Manual</div>
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="text-gray-900 font-barlow font-medium text-sm tracking-wider leading-5">
                      Cash Price
                    </div>
                    <div className="tracking-tighter text-transparent bg-clip-text font-barlow-condensed text-xl font-bold leading-none bg-gradient-to-r from-red-500 to-blue-500">
                      10,000
                    </div>
                  </div>
                  <Link to="/checkout">
                    <div className="px-12 py-2 rounded-full bg-gradient-to-r from-red-600 to-blue-900 shadow-md text-white">
                      BUY NOW
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mt-6 flex flex-col w-full border-2 rounded-2xl">
                <div className="rounded-t-2xl bg-white p-6">
                  <div className="text-center text-gray-700 font-barlow-condensed font-bold text-4xl leading-10">
                    Hire Purchase
                  </div>
                  <div className="text-center">224.85/month</div>
                  {/* <TermRangeSlider min={0} max={28} symbol={"£"} /> */}
                  {/* <DepositeRangeSlider min={0} max={28} symbol={"£"} /> */}
                </div>
                <div />
                <div className="px-6 py-4 flex justify-between items-center">
                  <div className="justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-8 hover:cursor-pointer py-2 rounded-full hover:bg-gray-900 hover:text-white bg-white text-black">
                    APPLY FOR FINANCE
                  </div>
                  <div className="justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-900 hover:text-white bg-white text-black">
                    VIEW FINANCE DETAILS
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full  max-w-[1600px] mx-auto bg-white rounded-2xl ">
                <Tabs id="custom-animation" value="All">
                  <TabsHeader className="w-full bg-white" indicatorProps={{}}>
                    <div className="w-full flex ">
                      {data.map(({ label, value }) => (
                        <Tab
                          key={value}
                          value={value}
                          onClick={() => setActiveTab(value)}
                          className="w-full text-left border-0 "
                          indicatorProps={{
                            className:
                              "bg-gray-200 hidden shadow-none !text-white",
                          }}
                        >
                          <div
                            className={`${
                              activeTab !== value
                                ? "text-red-400"
                                : "bg-white text-blue-400 border-gray-800 border-b-2"
                            } uppercase font-bold w-full text-center cursor-pointer text-base px-3 py-2 no-underline transition-all duration-150 ease-in-out align-middle`}
                          >
                            {label}&nbsp;{label === "All" ? "VIDEO" : ""}
                          </div>
                        </Tab>
                      ))}
                    </div>
                  </TabsHeader>
                  <TabsBody
                    animate={{
                      initial: {
                        y: 250,
                      },
                      mount: {
                        y: 0,
                      },
                      unmount: {
                        y: 250,
                      },
                    }}
                  >
                    {data.map(({ value, content }) => (
                      <TabPanel key={value} value={value}>
                        {content}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </div>

              <div className="w-full bg-white rounded-2xl mt-[50px] p-[24px] flex flex-col justify-center items-center">
                <div className="text-gray-900 scale-y-125 text-center font-barlow-condensed text-2xl font-medium leading-8">
                  Need another way to buy?
                </div>
                <div className="mt-2 scale-y-125 text-black text-center font-barlow text-base font-normal leading-6 max-w-[377px]">
                  Want to try another way of buying click Reserve Vehicle,
                  Checking you finance availability, or have any question? Make
                  an enquiry
                </div>
                <div className="w-full mt-6 flex flex-row justify-between">
                  <div className="bg-black flex flex-row justify-center items-center py-[10px] w-[30%] text-white rounded-full uppercase scale-y-125 ">
                    Reserve Vehicle
                  </div>
                  <div className="bg-black flex flex-row justify-center items-center py-[10px] w-[30%] text-white rounded-full uppercase scale-y-125 ">
                    {" "}
                    Make an inquiry
                  </div>
                  <div className="bg-black flex flex-row justify-center items-center py-[10px] w-[30%] text-white rounded-full uppercase scale-y-125 ">
                    {" "}
                    Free finance check
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-lg p-[24px] flex flex-col justify-center items-center">
                <div className="w-full scale-y-125 font-barlow text-xl font-bold text-gray-900  leading-6 ">
                  Perks of Buying Online with TMC...
                </div>
                <div className="mt-6 relative w-fit">
                  <img
                    src={roads}
                    alt="road"
                    className="w-full object-fit  rounded-[20px]"
                  />
                  <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      width="56"
                      height="55"
                      viewBox="0 0 56 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.222656"
                        width="55"
                        height="55"
                        rx="27.5"
                        fill="#E91E24"
                      />
                      <path
                        d="M39.5138 24.0449C42.1598 25.5884 42.1598 29.4116 39.5138 30.9551L24.0238 39.991C21.3572 41.5465 18.0083 39.623 18.0083 36.5359L18.0083 18.4641C18.0083 15.377 21.3572 13.4535 24.0238 15.009L39.5138 24.0449Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <div className="rounded-l-xl w-[260px] h-[173px] bg-gradient-to-r from-gray-700 via-gray-700 to-transparent" style={{ backgroundImage: `url(${carlock})`, backgroundColor: 'lightgray', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
              </div> */}
              <div className="w-full flex flex-row rounded-xl relative">
                <img
                  src={carlock}
                  alt="carlock"
                  className="w-[42%] "
                  style={{
                    borderRadius: "16px 0px 0px 16px",
                    background:
                      "linear-gradient(271deg, #272727 0.43%, rgba(39, 39, 39, 0.76) 17.95%, rgba(39, 39, 39, 0.00) 49.96%), url(" +
                      carlock +
                      "), lightgray 50% / cover no-repeat",
                  }}
                />
                <div
                  className="w-[58%] bg-black flex flex-col justify-center items-center"
                  style={{ borderRadius: "0px 16px 16px 0px " }}
                >
                  <div className="text-white text-center">
                    Want to book a rest drive?
                  </div>
                  <div className="mt-4 text-black bg-white hover:bg-gray-300 rounded-full px-6 py-2 text-center hover:cursor-pointer">
                    BOOK A REST DRIVE
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full flex flex-row rounded-xl">
                <img
                  src={carintro}
                  alt="carlock"
                  className="w-[42%]"
                  style={{
                    borderRadius: "16px 0px 0px 16px",
                    background:
                      "linear-gradient(271deg, #272727 0.43%, rgba(39, 39, 39, 0.76) 17.95%, rgba(39, 39, 39, 0.00) 49.96%), url(" +
                      carlock +
                      "), lightgray 50% / cover no-repeat",
                  }}
                />
                <div
                  className="w-[58%] bg-white flex flex-col justify-center items-center"
                  style={{ borderRadius: "0px 16px 16px 0px " }}
                >
                  <div className="text-gray-800 text-center scale-y-125 font-bold text-xl ">
                    Want to sell you vehicle?
                  </div>
                  <div className="text-black text-center  scale-y-125">
                    try to value your car first to see how worth your car is.
                  </div>
                  <div className="mt-4 text-black bg-white hover:bg-black hover:text-white border-2 bg-gray-300 rounded-full px-6 py-2 text-center  scale-y-125">
                    VALUE MY CAR
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full flex flex-col rounded-2xl bg-white p-8">
                <div className="uppercase text-2xl font-bold text-gray-800 scale-y-125">representative example</div>
                <div className="w-full">
                  <div className="mt-6 lg:flex justify-center bg-white">
                    <div className="w-full flex flex-col md:flex-row md:justify-between">
                      <div className="text-sm w-full md:w-[48%] bg-[#f6f6f6] rounded-2xl">
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">finance product</div>
                          <div className="scale-y-125 font-bold">
                            Hire Purchase
                          </div>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">duration of agreement</div>
                          <div className="scale-y-125 font-bold">
                            48 Months
                          </div>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">vehicle price</div>
                          <div className="scale-y-125 uppercase font-bold">
                          £1,000.00
                          </div>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">
                            custom deposit
                          </div>
                          <div className="scale-y-125 uppercase font-bold">
                          £2,200.00
                          </div>
                        </div>

                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">
                            total deposit
                          </div>
                          <div className="scale-y-125 uppercase font-bold">
                          £2,200.00
                          </div>
                        </div>
                        <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">balance to finance</div>
                          <div className="scale-y-125 uppercase font-bold">
                          £8,800.00
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-sm w-full md:w-[48%] bg-[#f6f6f6] rounded-2xl">
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">
                            total charge for credit
                          </div>
                          <div className="scale-y-125 uppercase font-bold">
                          £1,992.80
                          </div>
                        </div>

                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">
                            total amount payable
                          </div>
                          <div className="scale-y-125 uppercase font-bold">
                          £12,992.80
                          </div>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">
                            48 monthly payments
                          </div>
                          <div className="scale-y-125 uppercase font-bold">
                          £224.85
                          </div>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">apr</div>
                          <div className="scale-y-125 uppercase font-bold">
                            10.9% apr
                          </div>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">interest rate(fixed)</div>
                          <div className="scale-y-125 uppercase font-bold">
                            10.9%
                          </div>
                        </div>
                        <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                          <div className="scale-y-125 uppercase">cash price inc vat</div>
                          <div className="scale-y-125 uppercase font-bold">
                          £11,000.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

import road from '../assets/images/road.png'
import overcar from '../assets/images/overcar.png'
import { ReactComponent as Section2Star } from "./svg/section2Star.svg"
import { ReactComponent as Check2 } from "./svg/check2.svg"
import { ReactComponent as CircleWithCheck } from "./svg/circleWithCheck.svg"
import { ReactComponent as Section2Pattern } from "./svg/section2Pattern.svg"

export default function Section2() {
    // const values = [
    //     { icon: "icon/car-crash.svg", title: "Value My Car", description: "We sell all brands of cars and trucks meaning we can give you a great price.", },
    //     { icon: "icon/guarantee.svg", title: "Affordable Finance", description: "Affordable, flexible finance solutions. We offer a wide range of finance packages to help with your new purchase.", },
    //     { icon: "icon/people-carry.svg", title: "Meet the team", description: "We have been selling a wide range of used vehicles for many years and pride ourselves in our personal customer service.", }
    // ]
    return (

        <div className="w-full h-fit  px-12 lg:px-24 flex justify-center items-center pb-12 md:pb-0">

            <div className="block lg:flex justify-between  gap-5  w-full max-w-[1280px]">
                <div className='lg:w-fit md:w-3/4 sm:w-5/6  w-full lg:mx-0 mx-auto lg:self-start'>
                    <div className="flex flex-col justify-evenly">
                        <div className='flex gap-4 w-full lg:max-w-[400px] bg-[#F6F6F6] p-6 my-4 rounded-[16px] '>
                            <div className="min-w-[64px] h-[64px] rounded-lg border border-red-600 bg-gradient-to-r from-red-600 to-blue-900 flex justify-center items-center">
                                <Section2Star className='w-full' />
                            </div>
                            <div className="ml-1 text-gray-700 font-barlow font-semibold text-lg leading-8 flex items-center">
                                Multi-award winning van and pick-up truck specialist
                            </div>

                        </div>
                        <div className='flex gap-4 w-full lg:max-w-[400px] bg-[#F6F6F6] p-6 my-4 rounded-[16px] '>
                            <div className="min-w-[64px] h-[64px] rounded-lg border border-red-600 bg-gradient-to-r from-red-600 to-blue-900 flex justify-center items-center">

                                <Check2 className='w-full' />

                            </div>

                            <div className="ml-1 text-gray-700 font-barlow font-semibold text-lg leading-8 flex items-center">We carry out multi-point inspections as standard</div>
                        </div>
                        <div className='flex gap-4 w-full lg:max-w-[400px] bg-[#F6F6F6] p-6 my-4 rounded-[16px] '>
                            <div className="min-w-[64px] h-[64px] rounded-lg border border-red-600 bg-gradient-to-r from-red-600 to-blue-900 flex justify-center items-center">
                                <CircleWithCheck className='w-full' />
                            </div>
                            <div className="ml-1 text-gray-700 font-barlow font-semibold text-lg leading-8 flex items-center">14-day money back guarantee available</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:mt-0 mt-5">
                    <div className='relative w-fit'>
                        <img src={road} alt="road" className="w-full object-fit  rounded-[20px]" />
                        <img src={overcar} alt="overcar" className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10" />
                        <div className='absolute top-1/2 left-1/2 z-20'>
                            <svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.222656" width="55" height="55" rx="27.5" fill="#E91E24" />
                                <path d="M39.5138 24.0449C42.1598 25.5884 42.1598 29.4116 39.5138 30.9551L24.0238 39.991C21.3572 41.5465 18.0083 39.623 18.0083 36.5359L18.0083 18.4641C18.0083 15.377 21.3572 13.4535 24.0238 15.009L39.5138 24.0449Z" fill="white" />
                            </svg>
                        </div>
                        {/* <img src={overcar} alt="overcar" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10" /> */}
                        <div className='hidden lg:block absolute top-[70%] scale-50 right-10 h-[190px] overflow-hidden -z-10'>
                            <Section2Pattern />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import {ReactComponent as HeroSectionSVG} from "../svg/herosection.svg"

/* <HeroSection img={sellcars} words={["Sell","Your","Vehicle"]} mt={"mt-0"}/> */

export default function HeroSection({mt, words}) {
    return (
        <div
            className="w-full  h-fit opacity-95 bg-gradient-to-r from-red-600 to-blue-900 flex flex-col justify-center items-center  relative">
            <div
                className={`h-1/3 absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white -z-20`}></div>
            <div
                className='w-full items-center lg:items-start  py-10 px-11 max-w-[1400px] justify-between md:px-10 '>
                <div
                    className="px-5   h-full sm:items-start lg:items-start items-center lg:justify-start justify-center text-white font-barlow-condensed font-bold text-7xl leading-6 uppercase flex flex-wrap">

                    {words.map((word, index) => { 
                        return(
                            <div
                                className={`${index===0?"lg:w-full lg:text-start text-center ":""}scale-y-125 py-2 font-barlow-condensed text-7xl font-bold leading-none tracking-tighter`}>
                                    {word}{index===0?"":""}&nbsp;
                            </div>
                        )
                    })}
                </div>
                    <div className=" absolute top-5 left-1/2">
                        <HeroSectionSVG/>
                    </div>
                    
            </div>
            <div className="h-[50px]">

            </div>
        </div>
    )
}
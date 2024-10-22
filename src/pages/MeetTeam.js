import MainLayout from "../layouts/MainLayout";
import MeetTeamCard from "../components/MeetTeamCard";
import EmpCard from "../components/gallery/EmpCard";
import team1 from '../assets/images/team/team1.png'
import team2 from '../assets/images/team/team2.png'
import team3 from '../assets/images/team/team3.png'
import team4 from '../assets/images/team/team4.png'
import team5 from '../assets/images/team/team5.png'
import team6 from '../assets/images/team/team6.png'
import team7 from '../assets/images/team/team7.png'
import team8 from '../assets/images/team/team8.png'
import team9 from '../assets/images/team/team9.png'
import team10 from '../assets/images/team/team10.png'
import team11 from '../assets/images/team/team11.png'
// import team2 from '../assets/images/team/team2.png'
import {ReactComponent as CarSVG} from '../components/svg/car.svg'
import {ReactComponent as AwardSVG} from '../components/svg/awardSymbol.svg'
import {ReactComponent as StarSVG} from '../components/svg/star.svg'
import {ReactComponent as FeefoSVG} from '../components/svg/feefologo.svg'

const teammates = [
    {
        name: "Gerard Thatcher",
        role: "Founder and Managing Director",
        about: "Gerard Thatcher founded TMC in 2016 - with a vision to provide a class-leading b" +
                "uying experience, matched with the highest-quality of used vehicles. With an eth" +
                "os of transparency, Gerard continues to champion an honest, supportive customer " +
                "journey that completely elevates the TMC experience above traditional competitio" +
                "n. He has decades in the motor trade behind him, having started in the industry " +
                "at just 15 - and enjoys instilling the confidence within his team to offer TMC’s" +
                " unique approach.",
        image: team1
    }, {
        name: "Chris Callow",
        role: "Sales Director",
        about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
        image: team2
    }, {
        name: "Mark Cross",
        role: "Sales Consultant",
        about: "With more than 30 years of experience in the business, Mark’s one of our in-hous" +
                "e experts in sourcing the best used cars and trucks. He’s been enjoying the spir" +
                "it and ethos of TMC for almost four years, helping customers find their ideal us" +
                "ed pick-ups. You may even have seen Mark on the big screen - outside of work, he" +
                "’s acted as an extra in many movies such as Kingsman the Golden Circle, Darkest " +
                "Hour and The Commuter. Meanwhile, his own dream machine would be a DeLorean - Gr" +
                "eat Scott!",
        image: team3
    }, {
        name: "Gerard Thatcher",
        role: "Sales Consultant",
        about: "A long-term member of the team, Ryan loves the challenges that TMC throws his wa" +
                "y. He’ll be busy working with our team to find the very best used vehicles, and " +
                "enjoys advising our visitors in their own search for a new truck or car. A BMW M" +
                "2 would be his ultimate driving machine - and when not at work, he’ll often be f" +
                "ound enjoying football or tennis. In fact, Ryan spent four years as a self-emplo" +
                "yed tennis coach prior to working here at TMC. only is Chris a wealth of knowled" +
                "ge on pick-up trucks and ",
        image: team4
    }, {
        name: "Chris Callow",
        role: "Sales Consultant",
        about: "Gerard Thatcher founded TMC in 2016 - with a vision to provide a class-leading b" +
                "uying experience, matched with the highest-quality of used vehicles. With an eth" +
                "os of transparency, Gerard continues to champion an honest, supportive customer " +
                "journey that completely elevates the TMC experience above traditional competitio" +
                "n. He has decades in the motor trade behind him, having started in the industry " +
                "at just 15 - and enjoys instilling the confidence within his team to offer TMC’s" +
                " unique approach.",
        image: team5
    }, {
        name: "Gerard Thatcher",
        role: "Sales Consultant",
        about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
        image: team6
    }, {
        name: "Chris Callow",
        role: "Sales Director",
        about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
        image: team7
    }, {
        name: "Mark Cross",
        role: "Sales Director",
        about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
        image: team8
    }, {
        name: "Chris Callow",
        role: "Sales Consultant ",
        about: "With more than 30 years of experience in the business, Mark’s one of our in-hous" +
                "e experts in sourcing the best used cars and trucks. He’s been enjoying the spir" +
                "it and ethos of TMC for almost four years, helping customers find their ideal us" +
                "ed pick-ups. You may even have seen Mark on the big screen - outside of work, he" +
                "’s acted as an extra in many movies such as Kingsman the Golden Circle, Darkest " +
                "Hour and The Commuter. Meanwhile, his own dream machine would be a DeLorean - Gr" +
                "eat Scott!",
        image: team9
    }, {
        name: "Chris Callow",
        role: "Sales Director",
        about: "A long-term member of the team, Ryan loves the challenges that TMC throws his wa" +
                "y. He’ll be busy working with our team to find the very best used vehicles, and " +
                "enjoys advising our visitors in their own search for a new truck or car. A BMW M" +
                "2 would be his ultimate driving machine - and when not at work, he’ll often be f" +
                "ound enjoying football or tennis. In fact, Ryan spent four years as a self-emplo" +
                "yed tennis coach prior to working here at TMC.",
        image: team10
    }, {
        name: "Gerard Thatcher",
        role: "Sales Director",
        about: "With more than 30 years of experience in the business, Mark’s one of our in-hous" +
                "e experts in sourcing the best used cars and trucks. He’s been enjoying the spir" +
                "it and ethos of TMC for almost four years, helping customers find their ideal us" +
                "ed pick-ups. You may even have seen Mark on the big screen - outside of work, he" +
                "’s acted as an extra in many movies such as Kingsman the Golden Circle, Darkest " +
                "Hour and The Commuter. Meanwhile, his own dream machine would be a DeLorean - Gr" +
                "eat Scott!",
        image: team11
    }
]
export default function MeetTeam() {
    return (
        <MainLayout>
            <div
                className="w-full flex flex-col md:flex-row justify-center items-center py-[100px]  px-[20px] md:px-0">
                <div
                    className="w-full flex flex-col lg:flex-row justify-between max-w-[1380px] px-5 md:px-[30px] lg:px-[60px]">
                    <div
                        className="flex flex-col lg:flex-row justify-center md:justify-between items-center">
                        <div className="flex flex-col justify-between">
                            <div>
                                <div>
                                    <h1 className="text-8xl font-bold mb-4">Meet</h1>
                                    <div className="flex flex-row">
                                        <h1 className="text-8xl font-bold mb-4">The</h1>
                                        <h1
                                            className="text-transparent bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text font-barlow-condensed text-8xl font-bold leading-none">
                                            &nbsp;Team
                                        </h1>
                                    </div>
                                </div>
                                <MeetTeamCard
                                    title="Meet our team of experts and highly-trained consultants here at TMC"/>
                            </div>
                            <div className="flex flex-row pt-10">
                                <div className="hidden lg:flex mt-0 mx-1 w-[60px] justify-center ">
                                    <img
                                        alt="feefo logo"
                                        title=""
                                        src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/feefo-square-23.png"/>
                                </div>
                                <div className="hidden lg:flex mt-0 mx-1 w-[80px]  justify-center">
                                    <img
                                        alt="feefo logo"
                                        title=""
                                        src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/CarGurus2022.png"/>
                                </div>
                                <div
                                    className="hidden self-end relative lg:flex mt-0 mx-1 w-[175px] h-[44px] justify-center ">

                                    <FeefoSVG/></div>
                            </div>
                        </div>
                        <div
                            className="lg:w-1/2 relative w-full mx-5 md:w-5/6 mt-4  d-block mx-lg-auto img-fluid rounded-3xl">
                            <div
                                className="absolute p-3 -left-[20px] lg:-left-[100px] top-[40px] z-10 rounded-md flex bg-[#222222] ">
                                <AwardSVG/>
                                <div className="w-[126px] text-white text-base font-bold font-['Barlow']">Platinum Trusted Service Award</div>
                            </div>
                            <div
                                className="absolute p-3 -left-[10px] lg:-left-[60px] bottom-[40px] z-10 rounded-md flex bg-[#222222] ">
                                <StarSVG/>
                                <div
                                    className="w-[107px] h-[39px] flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="w-[63px] text-white text-base font-semibold font-['Inter']">30k</div>
                                    <div
                                        className="w-[107px] text-white text-xs font-normal font-['Barlow'] leading-none">Customer Reviewed</div>
                                </div>
                            </div>
                            <div
                                className="absolute p-3 -right-[10px] lg:-right-[40px] top-10 rounded-md flex bg-[#222222]">
                                <CarSVG/>
                                <div
                                    className="w-[101px] h-[55px] flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="w-[63px] text-white text-base font-bold font-['Barlow']">Explore
                                    </div>
                                    <div
                                        className="w-[101px] text-white text-xs font-normal font-['Barlow'] leading-none">Best vehicle with affordable price</div>
                                </div>
                            </div>
                            <img
                                src="https://cogcms.co.uk/media/tfvoovkm/about-us-home.jpg"
                                className="p-5 rounded-xl"
                                width="200%"
                                alt="The TMC Team"
                                loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-full flex flex-col md:flex-row justify-center items-center py-[100px]  px-[20px] md:px-0">
                <div className="w-full flex flex-col max-w-[1380px]">
                    <div className="mx-auto">
                        <div className="flex flex-row">
                            <div
                                className="text-gray-800 text-center font-barlow-condensed text-6xl font-bold leading-tight uppercase">Meet the</div>
                            <div
                                className="text-transparent bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text font-barlow-condensed text-6xl font-bold leading-tight uppercase">
                                &nbsp;team
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-evenly">
                        {teammates.map((item) => (<EmpCard data={item}/>))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
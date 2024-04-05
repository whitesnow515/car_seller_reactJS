import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
import HeroSection from "../components/gallery/HeroSection";
import financeImg from '../assets/images/finance.png'
import financeImg1 from '../assets/images/finance1.png'
import {ReactComponent as CheckSVG} from '../components/svg/check3.svg'


export default function Finance() {
    return (
        <MainLayout>
            <HeroSection img={financeImg} words={["Motoring hub", "finance"]} mt={"mt-20"}/>
            <div
                className="h-fit w-full mx-auto max-w-[1440px]  px-5 lg:px-[100px] pt-[100px] bg-white justify-center items-start gap-[50px] flex lg:flex-row flex-col">
                <div
                    className="lg:w-1/2 w-full flex-col justify-start items-start gap-6 inline-flex">
                    <div
                        className="self-stretch  text-neutral-800 text-[56px] font-bold font-['Barlow Condensed'] uppercase scale-y-125">About TMC Finance</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">We
                        know that buying a car is a significant investment, which is why we offer a
                        variety of finance options to help you stretch your car payment and stay on top
                        of your budget.
                        <br/><br/>Even if you are new to the world of car finance, the finance
                            specialists that work with TMC will help by giving you the professional advice
                            you need.We support and work with the following finance companies who are
                            experts in understanding your financial needs and requirements. Alternatively,
                            if you have a preferred finance company that is not on the below list, please
                            give us a call and we will be happy to set up directly with them.</div>
                    <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Close Brothers Motor Finance</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Car Finance 24/7</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Moto Novo</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Credit Plus</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Zuto</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">MoneyBarn</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Advantage Finance</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">First Response</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Alphera Financial Services</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                   <CheckSVG/>

                                </div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Mallard vehicle Finance</div>
                        </div>
                    </div>
                </div>
                <div
                    className="lg:w-1/2 w-full self-stretch flex-col justify-start items-center gap-8 inline-flex">
                    <div className="w-fit">
                        <img className="rounded-3xl w-fit" src={financeImg1} alt="'adsf"/>
                    </div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">Apply
                        for finance today and get in touch to learn more about our offers and selection
                        of used vans & cars. We look forward to helping you purchase your next dream
                        vehicle.<br/><br/>Thatchers
                        Motor Company Ltd is authorised and regulated by the Financial Conduct Authority
                        under FRN Reference number: 756740. Finance Subject to status. Thatchers Motor
                        Company Ltd is authorised as a CREDIT BROKER and NOT A LENDER. This means we
                        work with a number of carefully selected credit providers who may be able to
                        offer you finance for your purchase.<br/><br/>TMC
                        - The Motor Company, The Goodwood Building, The Yard, Oakhanger, Hampshire, GU35
                        9JURegistered office: Thatchers Motor Company, 8 The Briars, Waterlooville,
                        Hampshire PO7 7YH</div>
                </div>
            </div>
            <div
                className="max-w-[1240px] w-full mx-auto  px-8 py-[50px] bg-neutral-100 rounded-3xl flex-col justify-start items-center gap-8 ">
                <div
                    className="self-stretch text-center scale-y-110 text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                        Ready to Motoring hub Finance
                    </div>
                <div className="md:w-fit md:mx-auto mt-8">
                    <div
                        className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
                        <div
                            className="grow shrink w-full basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                            <div
                                className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">Make an inquiry</div>
                        </div>
                        <div
                            className="grow shrink w-full  basis-0 h-12 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                            <div
                                className="text-neutral-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">Contact us</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
import stripe from "../assets/images/stripe.png";
import washy from "../assets/images/checkout.png";
export default function OrderSummary(props) {
  const {step,price,addfee}=props.data;
  return (
    <div>
      <div className="bg-white rounded-xl px-4 py-4 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className=" scale-y-125 font-bold text-lg font-bold leading-28 leading-relaxed scale-y-125">
            Order Summary
          </div>
          <a href="/" className="underline text-[#0000ff] uppercase text-sm font-bold">change vehicle?</a>
        </div>
        <img src={washy} className="w-full rounded-lg mt-4" alt="as"></img>
        <div className="mt-2 scale-y-125 font-bold text-lg">Land Rover Freelander 2</div>
        <div className="mt-2  scale-y-125">BV59PZB 2.2TD4e HSE 4WD Euro 4 (s/s) 5dr Grey</div>
        <div className="mt-6 flex flex-row justify-between">
          <div className="uppercase  scale-y-125">price:</div>
          <div className=" scale-y-125 text-[#0000ff] font-bold">£{(price+addfee).toLocaleString()}</div>
        </div>
        <div className="mt-6 w-full bg-[#f6f6f6] rounded-xl py-2 flex justify-center items-cneter">
          <div className="flex flex-col">
            <div className="uppercase  scale-y-125">buy in full price:</div>
            <div className=" scale-y-125 text-center font-barlow-condensed text-2xl font-semibold leading-40 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
            £{(price+addfee).toLocaleString()}
            </div>
          </div>
        </div>

{step>=1&&<div className="mt-2 w-full flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="uppercase scale-y-125 ">car price</div>
            <div className="scale-y-125  ">£{price.toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="uppercase scale-y-125  ">additional fee</div>
            <div className="scale-y-125  ">£{addfee.toLocaleString()}</div>
          </div>
          <div className="mt-4 w-full border-t-2 "></div>
          <div className="mt-4 flex flex-row justify-between">
            <div className="scale-y-125  uppercase">total payment</div>
            <div className="scale-y-125 text-[#0000ff] font-bold">£{(price+addfee).toLocaleString()}</div>
          </div>
        </div>
}
        

      </div>
      <div className="mt-4 flex flex-row justify-between w-full">
        <div className="flex flex-row justify-center items-center">
          <div className=" scale-y-125 text-gray-700 font-barlow-condensed text-sm lg:text-md font-normal font-normal leading-20 uppercase">
            powered by
          </div>
          <img src={stripe} alt="stripe " className="h-[17px] w-[47px]  scale-y-125" />
        </div>
        <div className="flex flex-row">
          <div className=" scale-y-125 text-gray-700 font-barlow-condensed text-sm lg:text-md font-normal font-normal leading-20 uppercase">
            view full
          </div>
          <div className=" scale-y-125 text-gray-700 font-barlow-condensed text-base lg:text-md font-semibold leading-19 underline uppercase">
            &nbsp;terms & conditions
          </div>
        </div>
      </div>
    </div>
  );
}

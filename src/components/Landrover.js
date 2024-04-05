export default function Landrover() {
  return (
    <div>
      <div className="text-gray-900 font-barlow-condensed text-4xl font-bold leading-40 uppercase scale-y-125 ">
        getting your land river freelander 2
      </div>
      <div className="mt-8 flex flex-col w-full">
        <div className="">
          Choose how you’d like to get Land Rover Freelancer 2:
        </div>
        <select
          type="text"
          placeholder="Address 1"
          className="mt-2 bg-[#f6f6f6] px-6 py-3 border-2 w-full rounded-full"
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div className="mt-2 bg-[#f6f6f6] px-6 py-2 border-2 text-blue-700 font-semibold w-full rounded-full flex flex-row justify-left items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33398 8.66675L6.00065 11.3334L12.6673 4.66675"
            stroke="#0449C8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="ml-3 ">Your vehicle will be ready in 4 days</div>
      </div>
      <div className="mt-6">I’d like to have my vehicle on</div>
      <input
        type="text"
        placeholder="28/11/2023"
        className="mt-2 bg-[#f6f6f6] px-6 py-3 border-2 w-full rounded-full"
      ></input>
      <div className="mt-8  p-6 bg-[#f6f6f6] flex flex-col rounded-2xl">
        <div className="text-gray-900 font-barlow-condensed text-32 font-bold leading-40 uppercase scale-y-125  uppercase">
          what to expect
        </div>
        <div className="mt-2">
          We would like to, from time to time, send you details of any offers
          and latest news. Please can you indicate, by checking the appropriate
          boxes below, which channels you would like to be contacted by.
        </div>
        <div className="mt-2">
          Please select the best time(s) for us to contact you:
        </div>
        <div className="mt-2">
          Please select the best time(s) for us to contact you:
        </div>
        <div className="mt-4 flex flex-row">
            <div className="uppercase flex flex-col md:flex-row">
                <div className="text-sm bg-white rounded-md py-2 pr-4 pl-2 flex flex-row">
                    <label className="custom-checkboxl">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3">morning</div>
                </div>
                <div className="mt-[14px] md:mt-0 md:ml-[14px] text-sm bg-white rounded-md py-2 pr-4 pl-2 flex flex-row">
                    <label className="custom-checkboxl">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3">afternoon</div>
                </div>
                <div className="mt-[14px] md:mt-0 md:ml-[14px] text-sm bg-white rounded-md py-2 pr-4 pl-2 flex flex-row">
                    <label className="custom-checkboxl">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3">night</div>
                </div>
            </div>
        </div>
        <div className="mt-8 flex flex-col">
            <div className="scale-y-125">Anything you would like to add</div>
            <input type="text" className="mt-2 w-full px-6 py-3 bg-white text-black rounded-xl border-2" placeholder="Note"></input>
        </div>
      </div>
      <div className="mt-8 text-gray-800 scale-y-125 font-barlow-condensed text-32 font-bold leading-8 uppercase">
        Make This Land Rover Freelander 2 Yours Today
      </div>
      <div className="mt-5 scale-y-125 md:mt-0">
        You're almost there - just one last step to complete! Just go to the secure payment gateway to pay the £2,500 payable now and make this Land Rover Freelander 2 yours today!
      </div>
      <div className="mt-4 flex flex-col">
        <div className="flex flex-row items-start">
            <label className="custom-checkboxr">
                <input type="checkbox" className="hidden"/>
                <span className="checkmark"></span>
            </label>
            <div className="ml-3 scale-y-125">I have read and accept the Terms and Conditions</div>
        </div> 
        <div className="mt-[14px] flex flex-row items-start">
            <label className="custom-checkboxr">
                <input type="checkbox" className="hidden"/>
                <span className="checkmark"></span>
            </label>
            <div className="ml-3 scale-y-125">I have read and accept the Privacy Policy</div>
        </div>
        <div className="mt-[14px] flex flex-row items-start">
            <label className="custom-checkboxr">
                <input type="checkbox" className="hidden"/>
                <span className="checkmark"></span>
            </label>
            <div className="ml-3 scale-y-125 ">I acknowledge that I have the right to cancel my contract within 14 days of receiving the vehicle (subject to Terms and Conditions)</div>
        </div>
      </div>
      <div className="mt-8 bg-[#f6f6f6] rounded-2xl">
        <div className="p-6 flex flex-col">
            <div className="text-gray-800 scale-y-125 font-barlow-condensed text-32 font-bold leading-8 uppercase">
               Your Preferences
            </div>

            <div className="mt-5 scale-y-125 ">We would like to, from time to time, send you details of any offers and latest news. Please can you indicate, by checking the appropriate boxes below, which channels you would like to be contacted by.</div>
            <div className="mt-4 flex flex-col md:flex-row">
                <div className="flex flex-row items-center py-2 pl-2 pr-4">
                    <label className="custom-checkboxr">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3 uppercase">phone</div>
                </div>
                <div className="mt-[14px] md:mt-0 flex flex-row items-center py-2 pl-2 pr-4">
                    <label className="custom-checkboxr">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3 uppercase">email</div>
                </div>
                <div className="mt-[14px] md:mt-0 flex flex-row items-center py-2 pl-2 pr-4">
                    <label className="custom-checkboxr">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3 uppercase">sms</div>
                </div>
                <div className="mt-[14px] md:mt-0 flex flex-row items-center py-2 pl-2 pr-4">
                    <label className="custom-checkboxr">
                        <input type="checkbox" className="hidden"/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="ml-3 uppercase">letter</div>
                </div>
            </div>
        </div>
      </div>
      
     
    </div>
  );
}

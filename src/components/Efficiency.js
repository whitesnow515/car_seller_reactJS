export default function Efficiency () {
    return (
        <div className="py-6 flex flex-col justify-center bg-white">
            <div className="text-sm mt-6 w-full md:w-1/2 bg-[#f6f6f6] rounded-2xl">
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="scale-y-125 uppercase">mpg(urban)</div>
                <div className="scale-y-125 uppercase font-bold">~</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="scale-y-125 uppercase">mpg(extra urban)</div>
                <div className="scale-y-125 uppercase font-bold">~</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="scale-y-125 uppercase">c02 emissions</div>
                <div className="scale-y-125  font-bold">171 g/kg</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="scale-y-125 uppercase">tax band</div>
                <div className="scale-y-125 uppercase font-bold">~</div>
              </div>
              <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                <div className="scale-y-125 uppercase">insurance group</div>
                <div className="scale-y-125 uppercase font-bold">~</div>
              </div>
            </div>
        </div>
    )
  }

export default function WorkTimetable() {  
  return (
      <div className="flex flex-col items-left ">
        <div className="lg:mt-[5rem] xl:mt-[5rem] 2xl:mt-[5.5rem] hidden lg:block text-2xl font-bold">Opening Hours</div>
        <div className="flex flex-col mt-4">                             
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Monday</span>
              <span>8:30am-5:30pm</span>
            </div>
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Tuesday</span>
              <span>8:30am-5:30pm</span>
            </div>
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Wednesday</span>
              <span>8:30am-5:30pm</span>
            </div>
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Thursday</span>
              <span>8:30am-5:30pm</span>
            </div>
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Friday</span>
              <span>8:30am-5:30pm</span>
            </div>
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Saturday</span>
              <span>8:30am-5:30pm</span>
            </div>
            <div className="text-base w-3/5 font-semibold flex text-gray-900 justify-between">
              <span>Sunday</span>
              <span>8:30am-5:30pm</span>
            </div>
        </div>
      </div>
  )
}
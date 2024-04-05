
import {Select, Option} from "@material-tailwind/react";
export default function GetTouch() {  
  return (
      <div className="flex flex-col items-left ">
        <div className="text-6xl font-bold">Get in touch</div>
        <div className="flex flex-col mt-6">    
          <div className="mt-4">
            <Select label="Max Price" className="w-full pl-2 border-2 border-gray-300 h-12 rounded-none text-black">
              <Option value="25000">Send Enquiry To</Option>
              <Option value="25000">TMC-Huddersfield</Option>
              <Option value="25000">TMC Oakhanger (Head Office)</Option>
            </Select>
          </div> 
          <div className="flex justify-between mt-6">
            <input className="w-[48%] pl-2 border-2 border-gray-300 h-12 text-black" placeholder="Title" ></input>
            <input className="w-[48%] pl-2 border-2 border-gray-300 h-12" placeholder="Name" ></input>
          </div>
          <div className="mt-4 flex justify-between">
            <input className="w-[48%] pl-2 border-2 border-gray-300 h-12" placeholder="Email" ></input>
            <input className="w-[48%] pl-2 border-2 border-gray-300 h-12" placeholder="Contact Number" ></input>
          </div>
          <div className="mt-4">
            <Select label="Max Price" className="w-full pl-2 border-2 border-gray-300 h-12 rounded-none text-black">
              <Option value="25000">Please Select...</Option>
              <Option value="25000">Aftersales Enquiry</Option>
              <Option value="25000">Business User Enquiry</Option>
              <Option value="25000">Call Back Request</Option>
              <Option value="25000">Finance Enquiry</Option>
              <Option value="25000">General Enquiry</Option>
              <Option value="25000">Test Drive Enquiry</Option>
              <Option value="25000">Used Car Request</Option>
              <Option value="25000">Used Truck Enquiry</Option>
              <Option value="25000">Used Van Enquiry</Option>
              <Option value="25000">Valuation Request</Option>
              <Option value="25000">Video Enquiry</Option>
              <Option value="25000">Warranty Enquiry</Option>
            </Select>
          </div>            
          <textarea className="mt-6 w-full pl-2 pt-4 border-2 border-gray-300 h-20" placeholder="Your Enquiry" ></textarea>
        </div>        
      </div>
  )
}
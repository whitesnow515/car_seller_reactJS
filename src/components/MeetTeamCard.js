import { Link } from "react-router-dom";

export default function MeetTeamCard(props) {
  const { title } = props;
  return (
    <div className="flex flex-col items-left ">
      <div className="mt-6 text-2xl text-gray-800 ">{title}</div>
      <div className="mt-12">
        <button className="hover:text-gray-800 hover:bg-white px-6 py-3 mr-8 rounded-full  text-white relative bg-gray-800">
          <span className="absolute inset-0 border-2 border-gray-800 rounded-full "></span>
          <span className="relative z-10 uppercase"><Link to="/vehicles-for-sale">View All Stock</Link></span>
        </button>
        <button className="text-gray-800 bg-white px-6 py-3 mr-8 rounded-full  hover:text-white relative hover:bg-gray-800">
          <span className="absolute inset-0 border-2 border-gray-800 rounded-full "></span>
          <span className="relative z-10 uppercase"> <Link  to="/contact-us">Contact us</Link></span>
        </button>
      </div>
    </div>
  )
}
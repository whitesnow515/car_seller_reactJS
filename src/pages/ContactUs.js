import MainLayout from "../layouts/MainLayout";
import SummaryIcons from "../components/SummaryIcons";
import SummaryIconsOnlyMobile from "../components/SummaryIconsOnlyMobile";
import ContactCard from "../components/ContactCard";
import SocialContactCard from "../components/SocialContactCard";
import WorkTimetable from "../components/WorkTimetable";
import GetTouch from "../components/GetTouch";
import ConsumerInfo from "../components/ConsumerInfo";
export default function ContactUs() {
    return(
      <MainLayout>
        <div className="w-[95%] lg:w-[70%] mx-auto mt-12">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start">
            <div className="items-start w-full lg:w-[25%]">
              <div><h1 className="text-6xl font-bold">Contact Us</h1></div>
              <ContactCard title="TMC Oakhanger ( Head Office )" location="The Goodwood Building The Yard, Oakhanger Bordon, GU35 9JU" number="01252 943974"/>
              <ContactCard title="TMC-Huddersfield" location="6 Barge Street, Huddersfield, HD1 3LN" number="01484 482511"/>
              <SocialContactCard/>
              <WorkTimetable/>
            </div>
            <div className="flex flex-col w-full lg:w-[65%]">
              <img src="https://cogcms.co.uk/media/qcyeigwr/location-6.jpg" alt="contact" className=""></img>
              <div className="mt-4 border-2 border-gray-300 w-full py-12 px-10">
                <GetTouch/>
                <div className="mt-20">
                <ConsumerInfo/>
              </div>
              <div className="mt-16 text-center p-4 hover:cursor-pointer hover:bg-[#054aac] bg-[#054ac5] w-[140px] text-white rounded-md text-base font-semibold leading-relaxed">Enquire Today</div>
              </div>
              
            </div>
          </div>
          <SummaryIcons/>
          <SummaryIconsOnlyMobile/>
        </div>
      
      </MainLayout>
      
    )
  }
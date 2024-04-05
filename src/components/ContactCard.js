
export default function ContactCard(props) {  
  const {title,location, number} = props;
  return (
      <div className="flex flex-col items-left ">
        <div className="lg:mt-[5rem] xl:mt-[5rem] 2xl:mt-[5.5rem] hidden lg:block text-2xl font-bold">{title}</div>
        <div className="flex flex-row mt-4 items-start">                             
            <img className="mr-4" src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/icons/shared/map-marker-alt.svg" alt="Address"/>
            <div className="text-base font-semibold text-gray-900">{location}</div>
        </div>
        <div className="flex flex-row mt-4 items-start">                              
            <img className="mr-4" src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/icons/shared/Icon%20awesome-phone-alt.svg" alt="car and mobile" />
            <div className="text-base font-semibold text-gray-900">{number}</div>                              
        </div>
      </div>
  )
}

export default function ConsumerInfo() {  
  return (
      <div className="flex flex-col items-left ">
        <div className="text-2xl font-bold">Consumer Information</div>
        <div className="flex flex-col mt-6">    
        We would like to stay in touch with you to keep up to date with our latest product news, marketing services and offers. If you would like to receive future information by either of the methods below, please indicate by selecting the option. All information provided will be used and processed in accordance with our Privacy Policy. For more information please see our <span className="underline">Privacy Policy.</span>
        </div>   
        <div className="flex flex-row mt-6">
          <input type="checkbox"/> &nbsp;Phone
          <input type="checkbox" className="ml-6"/> &nbsp;Email
          <input type="checkbox" className="ml-6"/> &nbsp;SMS
          <input type="checkbox" className="ml-6"/> &nbsp;Letter
        </div>
        
      </div>
  )
}
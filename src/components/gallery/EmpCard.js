
export default function EmpCard(props) {
    console.log(props);
    const {
        name,
        role,
        about,
        image,
    } = props.data;
    return (
        <div className="flex flex-col max-w-[300px] border-2 rounded-md m-4 hover:cursor-pointer hover:border-gray-400 hover:shadow-lg">
            <img src={image} alt={name} />
            <div className="mt-6 text-gray-700 font-barlow-condensed text-2xl font-bold leading-8">
                {name}
            </div>
            <div className="mt-3 text-black font-inter text-base font-normal leading-6">
                {role}
            </div>
            <div className="mt-2 w-full h-[50px] overflow-hidden text-blue-gray-600  font-inter text-base font-normal leading-6">
                {about}
            </div>

            <div className="hover:text-blue-300 text-blue-600 ">Know more</div>
        </div>
    );
}
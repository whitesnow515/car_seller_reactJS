export default function UnsplashCard({ data }) {
    return (
        <div className="py-5 flex flex-row text-white">
            <div className="w-32 h-32  flex justify-center items-start rounded-[4px] mr-8">
                <img src={data.icon} alt="my" />
            </div>
            <div className="flex flex-col max-w-[260px]">
                <div className="text-white-80 font-barlow text-xs font-normal leading-5">
                    {data.title}
                </div>
                <div style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {data.description}
                </div>
                <div className="mt-8 w-36 h-10 flex justify-center items-center border-2 border-white rounded-full font-barlow text-sm hover:cursor-pointer hover:text-black hover:bg-white font-semibold leading-5 tracking-tighter uppercase">FIND OUT MORE</div>
            </div>
        </div>

    )
}
import ChatDialog from "./ChatDialog"
import {useState} from "react"

export default function LiveChat() {
    const [isChatOpen,
        setIsChatOpen] = useState(false);

    const openChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const closeChat = () => {
        setIsChatOpen(false);
    };
    return ( 
    <> 
        <div
            className={`fixed right-4 bottom-4 cursor-pointer rounded-full z-[12354] w-14 h-14 shadow-smooth-6`}// ${isChatOpen? 'opacity-100' : 'opacity-0'}
            onClick={openChat}>
            <div
                className="absolute rounded-full -right-0.5 -bottom-0.5 bg-red-500 text-white p-3 w-4 h-4 text-center text-xxs flex justify-center items-center">1</div>
            <div
                className="rounded-full w-full h-full flex items-center justify-center bg-[#286090] hover:bg-[#0CB3E8] shadow-[0_0_2px_2px_white]">
                <svg className="text-[#ffffff] fill-[#ffffff] w-10 h-10">
                    <use href="#logo"></use>
                </svg>
            </div>
        </div> 
        <ChatDialog isOpen = {isChatOpen } onClose = { closeChat }/> 
    </>)
}
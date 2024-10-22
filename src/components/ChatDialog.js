/* eslint-disable jsx-a11y/alt-text */


const ChatDialog = ({ isOpen, onClose }) => {




    return (
        <div
            className={`z-[123] fixed bottom-4 right-4 bg-white border border-gray-300 shadow-md p-4 transition-all${isOpen
                ? "bottom-4"
                : "-bottom-[200px]"}`}>
            {/* <div className="h-80 overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className="bg-gray-100 rounded p-2 my-2">{message}</div>
                ))}
            </div>
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded p-2 mr-2"/>
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white rounded px-4 py-2">Send</button>
                <button onClick={onClose} className="ml-2 text-gray-500">Close</button>
            </div> */}

            <div
                className="font-sans fixed flex rounded-3xl shadow-2xl items-end z-10 bottom-[35px] right-[35px] sm:bottom-[20px] sm:right-[20px] sm:top-auto sm:left-auto">
                <div
                    className={`fixed sm:w-[370px] rounded-3xl shadow-lg flex flex-col  sm:right-[35px] sm:top-auto sm:left-auto sm:h-[650px] transition-all ${isOpen ? "inset-4 sm:bottom-11" : "block -bottom-[700px]"}`}>
                    <div
                        className="h-32 rounded-3xl shadow-black w-full pt-4 px-8 pb-14 flex items-center justify-between rounded-t-4xl bg-[#ffffff] text-[#000000]">
                        <div className="ml-8 flex-grow">
                            <img
                                src="https://visitorchat-client.s3.eu-west-2.amazonaws.com/app/chatbox/1631261759-Capture.PNG"
                                className="max-w-[200px] mx-auto" /></div>
                        <div className=" cursor-pointer hover:drop-shadow-lg" onClick={onClose} >
                            <svg className="fill-current w-6 h-6 mx-auto">
                                <use href="#times"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="flex-grow rounded-3xl shadow-black flex flex-col w-full rounded-t-4xl rounded-b-4xl overflow-hidden -mt-10 bg-[#ffffff] text-[#000000]">
                        <div
                            className="message-container flex-grow pt-10 px-6 flex flex-col gap-y-4 overflow-y-auto mr-1.5 text-sm">

                            <div className="w-full">

                                <div className="flex w-full self-start">

                                    <div className="relative self-start w-full">
                                        <div
                                            className="px-3 py-2 rounded-t-xl shadow before:content-[''] before:absolute before:bottom-0 before:border-transparent before:border-t-[14px] before:border-b-0 rounded-bl-none rounded-br-xl before:-left-2 before:border-r-[12px] before:border-l-0 before:border-r-[#286090] before:border-l-[#286090] bg-[#286090] text-[#ffffff]">
                                            <div className="whitespace-pre-wrap break-words">Hello, I'm here to help. Let me know if you have any questions?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="text-sm">

                            <div
                                className="mb-2 px-4 mx-auto w-full flex flex-col items-center gap-y-1 text-[#000000]">
                                <div className="flex w-full justify-center gap-x-2">
                                    Switch to
                                    <svg className="w-5 h-4 fill-current" viewBox="0 0 448 512">
                                        <path
                                            d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"></path>
                                    </svg>
                                </div>
                                <div
                                    className="px-7 py-2 rounded-3xl border flex items-center gap-x-4 border-[#000000]">
                                    <div className="cursor-pointer">
                                        <svg className="w-8 h-8">
                                            <use href="#whatsAppLogo"></use>
                                        </svg>
                                    </div>
                                    <div className="cursor-pointer">
                                        <svg className="w-8 h-8">
                                            <use href="#smsLogo"></use>
                                        </svg>
                                    </div>

                                </div>
                                <svg className="hidden">
                                    <symbol id="whatsAppLogo" viewBox="0 0 360 362">
                                        <path
                                            fill="#25D366"
                                            fillRule="evenodd"
                                            d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                                            clipRule="evenodd"></path>
                                    </symbol>
                                </svg>
                                <svg className="hidden">
                                    <symbol id="smsLogo" viewBox="0 0 96.959 96.959">
                                        <g
                                            style={{
                                                fill: "#cfc4f3"
                                            }}>
                                            <path
                                                d="M60 0C26.76 0 0 26.76 0 60v213.6c0 29.386 20.92 53.692 48.736 58.937v57.098c-.004 15.885 18.617 24.47 30.694 14.15l58.037-70.185h168.992c33.24 0 60-26.76 60-60V60c0-33.24-26.76-60-60-60z"
                                                style={{
                                                    "color": "#000",
                                                    "fill": "#4ac4f3",
                                                    "fillOpacity": "1",
                                                    "stroke": "none",
                                                    "strokeWidth": "3.77953",
                                                    "strokeLinejoin": "round",
                                                    "strokeMiterlimit": "4",
                                                    "strokeDasharray": "none"
                                                }}
                                                transform="matrix(.26458 0 0 .23748 0 0)"></path>
                                        </g>
                                        <g
                                            aria-label="SMS"
                                            style={{
                                                fill: "#fff;"
                                            }}>
                                            <path
                                                d="M8.104 48.547h4.154v.2q0 2.658 1.894 3.721 1.894 1.03 5.017 1.03 2.725 0 4.553-1.595 1.86-1.595 1.86-4.187 0-2.093-1.594-3.455-1.595-1.33-4.819-2.626l-1.694-.697q-3.39-1.396-5.084-2.758-1.695-1.396-2.526-3.057-.83-1.695-.83-3.755 0-3.655 2.558-6.147 2.592-2.493 8.075-2.493 5.017 0 7.044 1.861 2.06 1.861 2.06 4.353v.2H24.62v-.2q0-.797-.631-1.562-.632-.764-1.894-1.096-1.263-.366-2.758-.366-3.09 0-4.586 1.562-1.462 1.529-1.462 3.49 0 1.328.698 2.491t1.927 1.927q1.23.765 4.154 2.06l1.96.831q4.719 2.06 6.314 4.32 1.561 2.26 1.561 4.851 0 2.426-1.296 4.686-1.262 2.26-3.555 3.422-2.26 1.163-6.048 1.163-3.588 0-6.014-.864-2.393-.83-3.655-2.79-1.23-1.995-1.23-4.32ZM38.055 55.758H34.5V23.692h4.12l9.936 22.895 9.17-22.895h4.055v32.066h-3.689V36.65l.1-5.748h-.1L56 36.65 50.317 50.94H46.13l-6.18-14.354-1.895-5.184h-.1l.1 5.184zM67.057 48.547h4.153v.2q0 2.658 1.894 3.721 1.894 1.03 5.018 1.03 2.725 0 4.552-1.595 1.861-1.595 1.861-4.187 0-2.093-1.595-3.455-1.595-1.33-4.818-2.626l-1.695-.697q-3.39-1.396-5.084-2.758-1.694-1.396-2.525-3.057-.83-1.695-.83-3.755 0-3.655 2.558-6.147 2.592-2.493 8.074-2.493 5.018 0 7.045 1.861 2.06 1.861 2.06 4.353v.2H83.57v-.2q0-.797-.631-1.562-.631-.764-1.894-1.096-1.263-.366-2.758-.366-3.09 0-4.586 1.562-1.462 1.529-1.462 3.49 0 1.328.698 2.491t1.927 1.927q1.23.765 4.154 2.06l1.96.831q4.719 2.06 6.314 4.32 1.562 2.26 1.562 4.851 0 2.426-1.296 4.686-1.263 2.26-3.556 3.422-2.26 1.163-6.047 1.163-3.589 0-6.015-.864-2.392-.83-3.655-2.79-1.23-1.995-1.23-4.32z"></path>
                                        </g>
                                    </symbol>
                                </svg>
                                <svg className="hidden">
                                    <symbol id="liveLogo" viewBox="0 0 89.894 92.103">
                                        <g transform="translate(0 -4.539)">
                                            <g
                                                style={{
                                                    fill: "#b0d3f0;"
                                                }}>
                                                <path
                                                    d="M32.956 67.484A14.703 14.703 0 0 0 18.22 82.22v52.459a14.699 14.699 0 0 0 11.97 14.474v14.023c-.001 3.902 4.572 6.01 7.538 3.475l14.253-17.237h41.504a14.703 14.703 0 0 0 14.735-14.735V82.22a14.703 14.703 0 0 0-14.735-14.736z"
                                                    style={{
                                                        "color": "#000",
                                                        "fill": "#b0d3f0",
                                                        "fillOpacity": "1",
                                                        "stroke": "none",
                                                        "strokeWidth": ".928228",
                                                        "strokeLinejoin": "round",
                                                        "strokeMiterlimit": "4",
                                                        "strokeDasharray": "none"
                                                    }}
                                                    transform="matrix(.94444 0 0 .8477 -17.208 -45.565)"></path>
                                            </g>
                                            <rect
                                                width="53.967"
                                                height="21.741"
                                                x="35.927"
                                                y="4.539"
                                                rx=".347"
                                                ry=".347"
                                                style={{
                                                    fill: "#e65142;"
                                                }}></rect>
                                            <g
                                                aria-label="LIVE"
                                                style={{
                                                    fill: "#fff;"
                                                }}>
                                                <path
                                                    d="M51.624 22.13H43.12V8.69h1.787v11.85h6.716zM58.15 22.13h-5.308v-1.373h1.76V10.062h-1.76V8.69h5.308v1.372h-1.76v10.695h1.76zM71.806 8.69l-4.892 13.44H64.53L59.639 8.69h1.913l4.215 11.824L69.983 8.69ZM82.7 22.13h-8.854V8.69H82.7v1.588h-7.067v3.683H82.7v1.588h-7.067v4.992H82.7z"></path>
                                            </g>
                                            <path
                                                d="M15.002 15.253c-1.99-.16-6.008.095-8.318 1.76-2.31 1.663-2.91 4.737-2.706 6.74.203 2.004 1.208 2.935 1.641 2.649.433-.287.292-1.793.498-3.112a7.346 7.346 0 0 1 1.457-3.359c.699-.907 1.545-1.587 2.256-1.975.71-.388 1.284-.483 2.284-.537 1-.054 2.411-.067 3.288-.205.878-.137 1.19-.395 1.506-.656.041-.573.083-1.146-1.906-1.305z"
                                                style={{
                                                    "fill": "#fff",
                                                    "fillOpacity": ".5",
                                                    "stroke": "none",
                                                    "strokeWidth": ".264583px",
                                                    "strokeLinecap": "butt",
                                                    "strokeLinejoin": "miter",
                                                    "strokeOpacity": "1"
                                                }}></path>
                                            <path
                                                d="M69.738 78.173c1.99.16 6.008-.096 8.318-1.76 2.31-1.664 2.91-4.738 2.706-6.741-.203-2.003-1.208-2.935-1.64-2.648-.434.287-.293 1.793-.499 3.112a7.346 7.346 0 0 1-1.456 3.358c-.7.907-1.546 1.588-2.256 1.976-.711.388-1.285.483-2.285.537-1 .054-2.41.067-3.288.204-.878.138-1.19.396-1.506.656-.041.573-.083 1.146 1.906 1.306z"
                                                style={{
                                                    "fill": "#286090",
                                                    "fillOpacity": ".5",
                                                    "stroke": "none",
                                                    "strokeWidth": ".264583px",
                                                    "strokeLinecap": "butt",
                                                    "strokeLinejoin": "miter",
                                                    "strokeOpacity": "1"
                                                }}></path>
                                        </g>
                                    </symbol>
                                </svg>

                            </div>
                            <div className="w-full flex gap-2 p-3">
                                <textarea
                                    rows="1"
                                    placeholder="Type your message here.a.."
                                    className="w-full py-3 border rounded-sm whitespace-pre-wrap break-words overflow-auto selection:border-blue-800 resize-y max-h-36 min-h-[48px] px-4 text-base target:border-none active:border-none border-blue-800 focus:border-blue-900 focus-within:border-blue-900 focus-visible:border-none"></textarea>
                                <button className="w-7">
                                    <svg
                                        viewBox="0 0 51 44.400002"
                                        style={{
                                            fill: "rgb(40, 96, 144)"
                                        }}>
                                        <path
                                            d="m 30.731709,21.943405 v 0.52916 c -5.6642,0.0156 -11.58346,1.2491 -17.197921,2.00449 -1.53664,0.20664 -4.6662889,-0.0823 -5.8298189,1.06468 -1.11964,1.10358 -1.7393,3.20728 -2.43758,4.60375 -1.55411,3.10833 -3.8452474,6.44525 -4.79314337,9.78958 -0.45807297,1.61634 0.0313,3.54277 1.68753897,4.23096 2.8060644,1.16601 7.9943833,-2.33786 10.5792533,-3.43721 9.451721,-4.01981 18.857921,-8.15075 28.310421,-12.17083 2.79823,-1.1901 9.94093,-2.76437 9.75122,-6.61458 -0.16457,-3.33852 -6.42779,-4.6953 -8.95747,-5.78102 -9.7872,-4.20076 -19.57255,-8.4067091 -29.368751,-12.5866991 -2.6153497,-1.11596 -9.0723989,-5.4182699 -11.4689443,-2.47783 -2.241391,2.75008 1.419728,7.49234 2.6723754,9.9976291 1.05709,2.11421 2.287,6.53105 4.20269,7.93406 1.4781695,1.08241 4.9240289,0.84799 6.7105489,1.04854 5.317591,0.5969 10.787591,1.8505 16.139581,1.86532 z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center gap-x-1 text-xs font-semibold pb-4">
                            <svg className="text-[#286090] fill-[#0cb3e8] w-4 h-4">
                                <use href="#logo"></use>
                            </svg>
                            <span className="text-[#286090]">visitor</span>
                            <span className="text-[#0cb3e8]">chat</span>
                        </div>
                    </div>
                </div>


                <svg className="hidden">
                    <symbol id="logo" viewBox="0 0 160 160">
                        <g>
                            <path
                                d="M 30.376189,11.332288 C 18.914891,11.312563 7.9180324,17.833765 5.3151859,32.677757 4.5601127,36.983695 4.531453,42.417847 5.5156898,46.683103 8.562986,59.887845 22.97011,69.451639 29.995331,80.69498 h 2.000912 C 38.41105,65.36848 57.14963,60.983943 59.705148,43.681736 62.660826,23.670026 46.082411,11.359323 30.376189,11.332288 Z"></path>
                            <path
                                className="fill-current"
                                d="m 128.34127,10.223313 c -2.38095,0.03067 -4.83173,0.378905 -7.31325,1.08417 -11.83523,3.363781 -16.81912,14.586328 -22.429123,24.371641 -10.315202,17.99218 -20.603993,35.999841 -30.870985,54.019439 -5.082003,8.919181 -11.915608,17.765987 -13.915429,28.009667 -3.819073,19.56405 14.576782,34.64882 33.203657,30.62138 12.02431,-2.60093 17.33803,-13.94924 22.85804,-23.61871 L 141.3167,69.690999 c 4.79165,-8.428918 11.77791,-17.365622 13.62759,-27.009719 3.32442,-17.329211 -9.93639,-32.672647 -26.60302,-32.457967 z"></path>
                        </g>
                    </symbol>
                </svg>
                <svg className="hidden">
                    <symbol id="checkCircle" viewBox="0 0 512 512">
                        <path
                            d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                    </symbol>
                </svg>
                <svg className="hidden">
                    <symbol id="checkTimes" viewBox="0 0 512 512">
                        <path
                            d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                    </symbol>
                </svg>
                <svg className="hidden">
                    <symbol
                        id="times"
                        style={{
                            enableBackground: "new 0 0 100 100;"
                        }}
                        viewBox="0 0 100 100">
                        <path
                            d="M43.2 50.08C32.35 61.29 21.29 72.14 10.34 83.24c-2.37 2.61-7 5.89-3.87 9.65 4 4.76 7.99-.77 11.06-3.61 10.71-10.91 22.03-21.26 32.38-32.49 10.29 9.98 20.17 20.07 30.38 30.1 2.39 2.37 4.82 4.73 7.42 6.85 2.4 1.96 5.76.74 6.78-2.22.78-2.26-.24-3.96-1.76-5.48-4.05-4.04-8.12-8.06-12.14-12.12-7.64-7.71-15.23-15.48-22.87-23.18-.34-.35-.73-.64-.16-1.21 5.99-6 11.97-12 17.92-18.03 5.76-5.83 11.49-11.69 17.21-17.56.62-.63 1.19-1.36 1.6-2.14.94-1.79.5-3.71-1.03-5.13-2.48-2.54-5.62-.72-7.65 1.37C74.02 19.46 62.52 30.96 51 42.44c-.6.6-.99.68-1.64.03C36.83 30.46 25.07 17.52 12.09 6.05c-3.93-2.56-8.84 3.24-5.59 6.7 11.84 12.82 24.57 24.78 36.7 37.33z"></path>
                        <path
                            d="M43.2 50.08C31.07 37.53 18.34 25.57 6.51 12.75c-3.22-3.44 1.63-9.27 5.59-6.7 12.98 11.47 24.74 24.41 37.25 36.43.65.65 1.04.57 1.64-.03C62.51 30.96 74.01 19.46 85.6 8.05c2.03-2.08 5.18-3.92 7.65-1.37 1.53 1.42 1.97 3.34 1.03 5.13-.41.78-.98 1.51-1.6 2.14-5.72 5.87-11.46 11.72-17.21 17.56-5.95 6.03-11.93 12.04-17.92 18.03-.56.56-.18.86.16 1.21 7.65 7.71 15.23 15.47 22.87 23.18 4.03 4.06 8.1 8.08 12.14 12.12 1.52 1.52 2.54 3.22 1.76 5.48-1.02 2.96-4.37 4.17-6.78 2.22-2.61-2.12-5.03-4.48-7.42-6.85-10.2-10.04-20.08-20.13-30.37-30.11-10.34 11.22-21.67 21.58-32.38 32.49-3.07 2.84-7.07 8.37-11.06 3.61-3.13-3.77 1.5-7.04 3.87-9.65 10.95-11.1 22.01-21.95 32.86-33.16z"></path>
                    </symbol>
                </svg>
            </div>
        </div>

    );
};

export default ChatDialog;

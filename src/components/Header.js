import {Link} from 'react-router-dom'
import {Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import logo from '../assets/icon/logo.svg'
import {GrayBtn} from './gallery/GrayBtn'
import {ReactComponent as Heartsvg} from './svg/heart.svg'

function classNames(...classes) {
    return classes
        .filter(Boolean)
        .join(' ')
}
export default function Header() {
    const [show,
        setShow] = useState(false)

    // const handleClick = () => {     console.log("handleClick")     setShow(!show)
    // }

    return (
        <div className="flex justify-center align-center h-fit py-6 lg:px-0 px-4">

            <div
                className="flex flex-wrap w-screen max-w-[1400px] justify-between items-center">
                <div
                    className="py-4 px-2  "
                    itemScope=""
                    itemType="https://schema.org/AutomotiveBusiness"
                    bis_skin_checked="1">
                    <Link to="/">
                        <img
                            id="nav-logo"
                            itemProp="logo"
                            alt="TMC Logo"
                            src={logo}
                            className='w-18 h-8'/>
                    </Link>
                </div>
                <div className="hidden xl:flex justify-between items-center ">
                    <Link
                        to='/'
                        className="inline-flex  justify-center rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                        Home
                    </Link>
                    <Link
                        to='/vehicles-for-sale/used-trucks/'
                        className="inline-flex  justify-center rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                        Used Pickups
                    </Link>
                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                Cars & Vans
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/vehicles-for-sale/used-cars/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Used Cars
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/vehicles-for-sale/used-vans/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Used Vans
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/vehicles-for-sale/electric/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Electric Cars
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link
                        to='/sell-your-vehicle/'
                        className="inline-flex  justify-center rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                        Sell your Vehicle
                    </Link>
                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                Finance
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/motoring-hub/finance/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Finance
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='https://tmcmotors.vaninsurance.co.uk/van-insurance/about-your-van'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Insurance
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/motoring-hub/warranties/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Warranty
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                Our Locations
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/vehicles-for-sale/hampshire/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Hampshire
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/vehicles-for-sale/huddersfield/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Huddersfield
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-[10px] py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                More
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/meet-the-team/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Meet The Team
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/motoring-hub/reviews/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Reviews
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/motoring-hub/videos/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            Videos
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to='/motoring-hub/blog/'
                                            className={classNames(active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700', 'block px-4 py-2 text-base')}>
                                            latest News
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="hidden xl:flex justify-between items-center gap-2">
                    <Link
                        to="/shortlist"
                        className="w-10 h-10 p-2.5 rounded-[100px] border border-black justify-center items-center gap-2 inline-flex">
                        <div className="w-5 h-5 relative"><Heartsvg/></div>
                    </Link>
                    <Link to='/contact-us'>
                        <GrayBtn name="contact us" upperCase={true}/>
                    </Link>
                </div>
                <div className="flex xl:hidden justify-end items-center ">
                    <Link to="/contact-us" className='text-xl pr-4'>
                        <span
                            className="bg-gray-900 text-center text-white px-4 py-2 rounded-full font-barlow text-base font-semibold leading-5 tracking-tight uppercase">CONTACT US</span>
                    </Link>
                    {/* <Disclosure.Button> */}
                    <span
                        onClick={() => setShow(true)}
                        className="w-10 h-10 border-2 border-gray-600 rounded-full flex justify-center items-center">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
                                fill="black"/>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
                                fill="black"/>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 15C9 14.4477 9.44771 14 10 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H10C9.44771 16 9 15.5523 9 15Z"
                                fill="black"/>
                        </svg>
                    </span>
                    {/* </Disclosure.Button> */}
                </div>
                <div
                    className={`${show
                    ? " right-0 "
                    : "-right-full "}top-0 transition-all z-[100] w-full fixed h-full bg-black bg-opacity-50 text-right`}>
                    <div
                        className="w-[265px] h-full  p-5 bg-white flex-col justify-start items-start gap-6 inline-flex">
                        <div className="self-stretch h-[83px] justify-between items-center inline-flex">
                            <div className="w-[88.28px] h-10 relative">
                                <img
                                    id="nav-logo"
                                    itemProp="logo"
                                    alt="TMC Logo"
                                    src="/static/media/logo.5f53ed32d966639d34239af03ef3ef0a.svg"
                                    className="w-18 h-8"/>

                            </div>
                            <div className="justify-start items-center gap-2 flex">
                                <div
                                    className="p-2.5 rounded-[100px] border border-black justify-center items-center gap-2 flex">
                                    <div className="w-5 h-5 relative">
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.17157 5.67157C4.73367 4.10948 7.26633 4.10948 8.82843 5.67157L10 6.84315L11.1716 5.67157C12.7337 4.10948 15.2663 4.10948 16.8284 5.67157C18.3905 7.23367 18.3905 9.76633 16.8284 11.3284L10 18.1569L3.17157 11.3284C1.60948 9.76633 1.60948 7.23367 3.17157 5.67157Z"
                                                fill="black"/>
                                        </svg>

                                    </div>
                                </div>
                                <div
                                    onClick={() => setShow(false)}
                                    className="p-2.5 rounded-[100px] border border-black justify-center items-center gap-2 flex">
                                    <div className="w-5 h-5 relative">
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 15.5L15 5.5M5 5.5L15 15.5"
                                                stroke="#272727"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className='flex flex-col gap-6 transition-all'>
                                <Link
                                    to='/'
                                    className="inline-flex  justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                    Home
                                </Link>
                                <Link
                                    to='/vehicles-for-sale/used-trucks/'
                                    className="inline-flex  justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                    Used Pickups
                                </Link>
                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            Cars & Vans
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/vehicles-for-sale/used-cars/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Used Cars
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/vehicles-for-sale/used-vans/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Used Vans
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/vehicles-for-sale/electric/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Electric Cars
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Link
                                    to="/sell-your-vehicle/"
                                    className="inline-flex  justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                    Sell your Vehicle
                                </Link>

                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            Finance
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/motoring-hub/finance/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Finance
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='https://tmcmotors.vaninsurance.co.uk/van-insurance/about-your-van'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Insurance
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/motoring-hub/warranties/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Warrantya
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            Our Locations
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/vehicles-for-sale/hampshire/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Hampshire
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/vehicles-for-sale/huddersfield/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Huddersfield
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            More
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/meet-the-team/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Meet The Team
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/motoring-hub/reviews/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Reviews
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/motoring-hub/videos/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        Videos
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <Link
                                                        to='/motoring-hub/blog/'
                                                        className={classNames(active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                        latest News
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Disclosure.Panel
                    className="block xl:hidden h-fit basis-full grow flex-col origin-top-right rounded-md bg-white focus:outline-none">
                    <div className='flex flex-col transition-all'>
                        <Link
                            to='/'
                            className="inline-flex  justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                            Home
                        </Link>
                        <Link
                            to='/vehicles-for-sale/used-trucks/'
                            className="inline-flex  justify-start rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                            Used Pickups
                        </Link>
                        <Menu as="div" className="relative  text-left px-0">
                            <div>
                                <Menu.Button
                                    className="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                    Cars & Vans
                                    <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items
                                    className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/vehicles-for-sale/used-cars/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Used Cars
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/vehicles-for-sale/used-vans/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Used Vans
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/vehicles-for-sale/electric/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Electric Cars
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Link to="/sell-your-vehicle/"
                            className="inline-flex  justify-start rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                            Sell your Vehicle
                        </Link>

                        <Menu as="div" className="relative  text-left px-0">
                            <div>
                                <Menu.Button
                                    className="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                    Finance
                                    <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items
                                    className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/motoring-hub/finance/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Finance
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Insurance
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/motoring-hub/warranties/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Warrantya
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <Menu as="div" className="relative  text-left px-0">
                            <div>
                                <Menu.Button
                                    className="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                    Our Locations
                                    <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items
                                    className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/vehicles-for-sale/hampshire/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Hampshire
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/vehicles-for-sale/huddersfield/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Huddersfield
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <Menu as="div" className="relative  text-left px-0">
                            <div>
                                <Menu.Button
                                    className="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                                    More
                                    <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items
                                    className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/meet-the-team/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Meet The Team
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/motoring-hub/reviews/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Reviews
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/motoring-hub/videos/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                Videos
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/motoring-hub/blog/'
                                                className={classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block px-6 py-2 text-base')}>
                                                latest News
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Link
                            to='/contact-us/'
                            className="inline-flex  justify-start rounded-md bg-white px-0 py-2 text-base font-semibold text-gray-900  hover:bg-gray-50">
                            Contact Us
                        </Link>
                    </div>
                </Disclosure.Panel> */}

            </div>
        </div>

    )
}
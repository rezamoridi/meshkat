"use client"

import Link from "next/link";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { PiUserBold } from "react-icons/pi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { RiArrowRightWideFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa6";

export default function VerticalNav({ navState, setNavState }) {
    const route = usePathname()

    return (
        <>
            <div
                className={`vertical-nav sm:w-[calc(100svw-24px)] w-full lg:h-[calc(100svh-24px)] z-20 bg-white fixed sm:m-3 bottom-0 top-0 right-0 sm:rounded-lg hidden lg:flex lg:flex-col items-center justify-start shadow-lg shadow-gray-300 transition-all duration-300 ease-in-out p-3 lg:p-0 ${navState ? "lg:w-[270px]" : "lg:w-[85px]"
                    }`}
            >
                <span
                    className="nav-btn hidden absolute w-6 h-14 bg-cyan-600 border-4 border-white rounded-xl top-28 -left-[9px] lg:flex items-center justify-center text-white cursor-pointer"
                    onClick={() => setNavState(!navState)}
                >
                    <RiArrowRightWideFill
                        className={`transition-all duration-400 rotate-180 ${navState && "rotate-0"
                            }`}
                    />
                </span>
                <div className="nav-logo w-16 h-20 mt-1 hidden lg:block">
                    <Image
                        src="/images/logo.png"
                        alt="meshkat-logo"
                        width={100}
                        height={100}
                        className="w-full h-auto object-contain"
                    />
                </div>
                <nav className="w-full">
                    <ul className="flex flex-col items-start py-0 px-[15px] mt-28 gap-1">
                        <li className="nav-item w-full">
                            <Link
                                className={`flex items-center py-3 px-[15px] rounded-lg gap-3 ${route == "/admin"
                                    ? "text-white bg-cyan-600/70"
                                    : "text-gray-700"
                                    }`}
                                href={"/admin"}
                            >
                                <RxDashboard
                                    className={`text-2xl flex-shrink-0`}
                                />
                                <p
                                    className={`nav-item-label transition-all duration-300 ${navState ? "" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    داشبورد
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item w-full">
                            <Link
                                className={`flex items-center py-3 px-[15px] rounded-lg gap-3 ${route == "/admin/users"
                                    ? "text-white bg-cyan-600/70"
                                    : "text-gray-700"
                                    } `}
                                href={"/admin/users"}
                            >
                                <PiUserBold
                                    className={`text-2xl flex-shrink-0`}
                                />
                                <p
                                    className={`nav-item-label transition-all duration-300 ${navState ? "" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    کاربران
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item w-full">
                            <Link
                                className={`flex items-center py-3 px-[15px] rounded-lg gap-3 ${route == "/admin/events"
                                    ? "text-white bg-cyan-600/70"
                                    : "text-gray-700"
                                    } `}
                                href={"/admin/events"}
                            >
                                <MdOutlineSmartDisplay
                                    className={`text-2xl flex-shrink-0`}
                                />
                                <p
                                    className={`nav-item-label transition-all duration-300 ${navState ? "" : "lg:opacity-0 pointer-events-none"
                                        }`}
                                >
                                    رویدادها
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item w-full">
                            <Link
                                className={`flex items-center py-3 px-[15px] rounded-lg gap-3 ${route == "/admin/teachers"
                                    ? "text-white bg-cyan-600/70"
                                    : "text-gray-700"
                                    } `}
                                href={"/admin/teachers"}
                            >
                                <FaChalkboardTeacher
                                    className={`text-2xl flex-shrink-0`}
                                />
                                <p
                                    className={`nav-item-label transition-all duration-300 ${navState ? "" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    اساتید
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item w-full">
                            <Link
                                className={`flex items-center py-3 px-[15px] rounded-lg gap-3 ${route == "/admin/news"
                                    ? "text-white bg-cyan-600/70"
                                    : "text-gray-700"
                                    } `}
                                href={"/admin/news"}
                            >
                                <FaRegNewspaper
                                    className={`text-2xl flex-shrink-0`}
                                />
                                <p
                                    className={`nav-item-label transition-all duration-300 ${navState ? "" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    اخبار
                                </p>
                            </Link>
                        </li>
                        <div className="line w-[90%] h-0.5 bg-gray-300 m-auto mt-2"></div>
                        <li className="nav-item mt-32 w-full">
                            <Link
                                className={`flex items-center py-3 px-[15px] rounded-lg gap-3`}
                                href={"/"}
                            >
                                <FiLogOut
                                    className={`text-2xl text-gray-700 flex-shrink-0`}
                                />
                                <p
                                    className={`nav-item-label transition-all duration-300 text-gray-700 ${navState ? "" : "lg:opacity-0 pointer-events-none"
                                        }`}
                                >
                                    خروج
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

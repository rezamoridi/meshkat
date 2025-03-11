"use client"

import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import ItemProfile from "../itemProfile/ItemProfile";
import { FaSquareCheck } from "react-icons/fa6";
{
    /* if user disable*/
}
import { FaMinusSquare } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function StudentCard({ name, image, role, icon, linkedit, linkinfo }) {
    const [dotBtnState, setDotBtnState] = useState(false);

    return (
        <>
            <div className="student-card w-[98%] rounded-lg bg-white h-16 p-1 sm:p-2 flex items-center my-2 sm:my-3 dirrtl">
                <ItemProfile image={image} icon={icon} />
                <div className="student-info mr-2 text-gray-600">
                    <h5 className="name text-sm sm:text-base">
                        {/* {name} */}
                        محمد حسن میر
                    </h5>
                    <p className="role text-sm">
                        {/* {role} */}
                        user
                    </p>
                </div>
                <div className="student-btns-dot mr-auto sm:hidden relative">
                    {!dotBtnState ? (
                        <HiOutlineDotsVertical
                            onClick={() => setDotBtnState(!dotBtnState)}
                            className="text-xl text-cyan-600/70 trasition duration-300 cursor-pointer"
                        />
                    ) : (
                        <IoMdClose
                            onClick={() => setDotBtnState(!dotBtnState)}
                            className="text-xl text-cyan-600/70 trasition duration-300 cursor-pointer"
                        />
                    )}
                    {dotBtnState && (
                        <div className="dot-btns-menu w-32 bg-blue-50 rounded-lg rounded-tl-none shadow-lg mt-3 left-0 absolute z-10 after:absolute after:border-[10px] after:border-transparent after:border-b-blue-50 after:-top-[19px] after:left-0">
                            <ul className="dot-btns-menu-list w-full p-1 flex flex-col text-xs">
                                <li className="p-2">
                                    <Link className="flex justify-between" href={linkinfo}>
                                        <FaCircleInfo className="text-cyan-600/70" />
                                        <p className="text-gray-700">جزئیات</p>
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <span className="flex justify-between">
                                        <FaMinusSquare className="text-red-500" />
                                        <p className="text-gray-700">غیر فعال کردن</p>
                                    </span>
                                </li>
                                <li className="p-2">
                                    <Link className="flex justify-between" href={linkedit}>
                                        <FaPen className="text-stone-500" />
                                        <p className="text-gray-700">ویرایش اطلاعات</p>
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <span className="flex justify-between">
                                        <FaTrashAlt className="text-red-500" />
                                        <p className="text-gray-700">حذف کاربر</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="student-btns hidden mr-auto sm:flex text-base self-end gap-2 sm:gap-4 sm:self-center md:text-lg items-center ml-1 sm:ml-2">
                    <Link className="group relative" href={"/admin/users/infouser/1"}><FaCircleInfo className=" text-cyan-600/50 hover:text-cyan-600/70 trasition duration-300 cursor-pointer" /><span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">جزئیات</span></Link>
                    <span className="group relative"><FaMinusSquare className=" text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer" /><span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">غیرفعال کردن</span></span>
                    {/*user state */}
                    <Link className="group relative" href={'/admin/users/edituser/1'}><FaPen className=" cursor-pointer text-stone-400 hover:text-stone-500 trasition duration-300" /><span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">ویرایش اطلاعات</span></Link>{/*آیدی کاربر باید در اینجا قرار داده شود */}
                    <span className="group relative"><FaTrashAlt className=" text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer" /><span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">حذف کاربر</span></span>
                </div>
            </div>
        </>
    );
}

"use client"

import BurgerMenu from "@/app/components/burgerMenu/BurgerMenu";
import HeadingSign from "@/app/components/headingSign/HeadingSign";
import VerticalNav from "@/app/components/verticalNav/VerticalNav";
import { IoPersonSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash, FaPen } from "react-icons/fa";
import { useState } from "react";
export default function EditMe() {
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <BurgerMenu />
            <VerticalNav />
            <div className="edit-me-page bg-slate-200 min-h-svh pt-24 lg:pt-[13px] lg:pr-32 pb-5">
                <div className="edit-me-form-container bg-white rounded-lg shadow-lg max-w-[85svw] p-5 relative lg:mx-0 mx-auto">
                    <HeadingSign />
                    <h1 className="text-base sm:text-xl font-bold text-gray-700">
                        ویرایش اطلاعات حساب
                    </h1>
                    <form className="edit-me-form flex flex-col items-center mx-auto w-[80%] mt-14">
                        {/* edit image */}
                        <div className="col w-full flex justify-center">
                            <div className="input-container relative w-36 h-36 bg-cyan-600/70 rounded-md cursor-pointer overflow-hidden group">
                                <input
                                    required
                                    id="file_input"
                                    className="hidden"
                                    type="file"
                                    placeholder=""
                                />
                                <label
                                    htmlFor="file_input"
                                    className="label cursor-pointer flex justify-center items-center text-4xl h-full text-white"
                                >
                                    <IoPersonSharp />
                                </label>
                                <span className="absolute group flex justify-center w-full p-2 text-white bg-gray-400/50 -bottom-10 transition-all duration-300 group-hover:bottom-0">
                                    <FaPen />
                                </span>
                            </div>
                        </div>
                        {/* edit image */}

                        <div className="row flex flex-wrap w-full mt-10 lg:mt-12">
                            {/* edit name */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        نام
                                    </span>
                                </div>
                            </div>
                            {/* edit name */}
                            {/* edit lastName */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        نام خانوادگی
                                    </span>
                                </div>
                            </div>
                            {/* edit lastName */}
                            {/* edit fatherName */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        نام پدر
                                    </span>
                                </div>
                            </div>
                            {/* edit fatherName */}
                            {/* edit date */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        تاریخ تولد
                                    </span>
                                </div>
                            </div>
                            {/* edit date */}
                            {/* edit address */}
                            <div className="col w-full lg:w-2/3 p-3">
                                <div className="input-container w-full relative ">
                                    <textarea
                                        required
                                        className="peer resize-none h-14 caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        آدرس محل سکونت
                                    </span>
                                </div>
                            </div>
                            {/* edit address */}
                            {/* edit email */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        ایمیل
                                    </span>
                                </div>
                            </div>
                            {/* edit email */}
                            {/* edit password */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative">
                                    <input
                                        name="password"
                                        required
                                        className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                        type={showPass ? "text" : "password"}
                                    />
                                    {showPass ? (
                                        <FaEye
                                            onClick={() => setShowPass(!showPass)}
                                            className="absolute top-3 left-3 cursor-pointer text-xl text-cyan-600"
                                        />
                                    ) : (
                                        <FaEyeSlash
                                            onClick={() => setShowPass(!showPass)}
                                            className="absolute top-3 left-3 cursor-pointer text-xl text-cyan-600"
                                        />
                                    )}
                                    <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        رمز عبور
                                    </span>
                                </div>
                            </div>
                            {/* edit password */}
                            {/* edit phoneNumber */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        شماره موبایل
                                    </span>
                                </div>
                            </div>
                            {/* edit phoneNumber */}
                            {/* edit idNumber */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        کد ملی
                                    </span>
                                </div>
                            </div>
                            {/* edit idNumber */}
                            {/* edit studentId */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        شماره دانشجویی
                                    </span>
                                </div>
                            </div>
                            {/* edit studentId */}
                            {/* edit univName */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        نام دانشگاه
                                    </span>
                                </div>
                            </div>
                            {/* edit univName */}
                            {/* edit department */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        نام دانشکده
                                    </span>
                                </div>
                            </div>
                            {/* edit department */}
                            {/* edit major */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        نام رشته تحصیلی
                                    </span>
                                </div>
                            </div>
                            {/* edit major */}
                            {/* edit deg */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3">
                                <div className="input-container w-full relative ">
                                    <input
                                        required
                                        className="peer caret-cyan-600/50 outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600"
                                        type="text"
                                    />
                                    <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                        مقطع تحصیلی
                                    </span>
                                </div>
                            </div>
                            {/* edit deg */}
                        </div>
                        <button className="bg-cyan-600/50 transition duration-300 hover:bg-cyan-600/70 mt-7 px-5 py-2 rounded-md text-white">ویرایش اطلاعات</button>
                    </form>
                </div>
            </div>
        </>
    );
}

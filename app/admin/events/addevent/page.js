"use client"

import BackBtn from "@/app/components/backBtn/BackBtn";

export default function AddEvent() {


    return (
        <>
            <div className="add-event bg-slate-100 h-dvh flex justify-center">
                <BackBtn link={'/admin/events'} />
                <div className="add-event-form-container bg-white rounded-lg shadow-lg h-[70svh] w-1/3 mt-28 p-5">
                    <form className="rounded-lg flex flex-col justify-center items-center">
                        <div className="input-container w-[95%] my-2 relative text-center">
                            <input
                                required
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11"
                                type="text"
                                placeholder=""
                            />
                            <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                عنوان رویداد
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-2 relative text-center bg-white border-2 border-cyan-600/30 rounded-md p-2 h-11 cursor-pointer">
                            <input
                                required
                                id="file_input"
                                className="hidden"
                                type="file"
                                placeholder=""
                            />
                            <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 scale-75 translate-x-6 -translate-y-5 bg-white">
                                وارد کردن تصویر
                            </span>
                            <label htmlFor="file_input" className="cursor-pointer label absolute px-1 flex top-2 mr-3 text-gray-400">
                                فایلی انتخاب نشده
                            </label>
                        </div>
                        <div className="input-container w-[95%] my-2 relative text-center">
                            <input
                                required
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11"
                                type="text"
                                placeholder=""
                            />
                            <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                تاریخ شروع
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-2 relative text-center">
                            <input
                                required
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11"
                                type="text"
                                placeholder=""
                            />
                            <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                تاریخ پایان
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-2 relative text-center">
                            <textarea
                                required
                                className="resize-none h-36 peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 "
                                type="text"
                                placeholder=""
                            />
                            <span className="label absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                توضیحات
                            </span>
                        </div>
                        <button className="bg-cyan-600/50 transition duration-300 hover:bg-cyan-600/70 mt-1 px-5 py-2 rounded-md text-white">افزودن رویداد</button>
                    </form>
                </div>
            </div>
        </>
    );
}

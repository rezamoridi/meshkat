import BurgerMenu from "@/app/components/burgerMenu/BurgerMenu";
import HeadingSign from "@/app/components/headingSign/HeadingSign";
import VerticalNav from "@/app/components/verticalNav/VerticalNav";
import { IoPersonSharp } from "react-icons/io5";

export default function InfoStudent() {
    return (
        <>
            <BurgerMenu />
            <VerticalNav />
            <div className="info-user-page bg-slate-200 min-h-svh pt-24 lg:pt-[13px] lg:pr-32 pb-5">
                <div className="info-user-container bg-white rounded-lg shadow-lg max-w-[85svw] p-5 relative lg:mx-0 mx-auto">
                    <HeadingSign />
                    <h1 className="text-base sm:text-lg font-bold text-gray-700">
                        جزئیات اطلاعات حساب کاربر
                    </h1>
                    <div className="info-user flex flex-col items-center mx-auto min-w-[80%] mt-12">
                        {/*  image */}
                        <div className="col w-full flex justify-center">
                            <div className="image-container w-36 h-36 bg-cyan-600/70 rounded-md text-white text-4xl flex justify-center items-center">
                                <IoPersonSharp />
                            </div>
                        </div>
                        {/*  image */}

                        <div className="row flex flex-wrap w-full p-2 mt-10 lg:mt-12 rounded-lg border-[2px] border-cyan-600/50 bg-slate-300">
                            {/* edit name */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">نام :</h5>
                                    <p className="info whitespace-nowrap ">محمد حسن</p>
                                </div>
                            </div>
                            {/* edit name */}
                            {/* edit lastName */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        نام خانوادگی :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit lastName */}
                            {/* edit fatherName */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        نام پدر :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit fatherName */}
                            {/* edit date */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        تاریخ تولد :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit date */}
                            {/* edit address */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        آدرس محل سکونت :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit address */}
                            {/* edit email */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        ایمیل :
                                    </h5>
                                    <p className="info whitespace-nowrap">mohasan1384@gmail.com</p>
                                </div>
                            </div>
                            {/* edit email */}
                            {/* edit phoneNumber */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        شماره موبایل :
                                    </h5>
                                    <p className="info whitespace-nowrap">09031602438</p>
                                </div>
                            </div>
                            {/* edit phoneNumber */}
                            {/* edit idNumber */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        کدملی :
                                    </h5>
                                    <p className="info whitespace-nowrap">0987654321</p>
                                </div>
                            </div>
                            {/* edit idNumber */}
                            {/* edit studentId */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        شماره دانشجویی :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit studentId */}
                            {/* edit univName */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        نام دانشگاه :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit univName */}
                            {/* edit department */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        نام دانشکده :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit department */}
                            {/* edit major */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        رشته تحصیلی :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit major */}
                            {/* edit deg */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">
                                        مقطع تحصیلی :
                                    </h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit deg */}
                            {/* edit role */}
                            <div className="col w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4">
                                <div className="info-container flex text-sm sm:text-base">
                                    <h5 className="title ml-2 text-cyan-700 font-bold whitespace-nowrap">نقش :</h5>
                                    <p className="info whitespace-nowrap">میر</p>
                                </div>
                            </div>
                            {/* edit role */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

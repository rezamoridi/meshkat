import CourseInfoCard from "@/app/components/courseInfoCard/CourseInfoCard"
import { FiInfo } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarMinus } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import UserProfile from "@/app/components/userProfile/UserProfile";

export default function CourseName() {
    return (
        <>
            <div className="course-information h-full bg-slate-100">
                <div className="container max-w-[1400px] m-auto">
                    <div className="row course-img-info flex p-5">
                        <div className="col w-1/2 text-info mx-7">
                            <h1 className="course-title text-3xl mb-10 font-bold text-gray-800 mt-10">دوره متخصص ریکت</h1>
                            <p className="line-clamp-3 text-gray-500 text-lg/8">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                            <button className="mt-20 bg-cyan-600 hover:bg-cyan-700 transition duration-300 text-white px-10 py-3 rounded-md">شرکت در رویداد</button>
                        </div>
                        <div className="col w-1/2 img mx-7">
                            <img className="h-auto w-full object-contain rounded-lg" src="https://sabzlearn.ir/wp-content/uploads/2024/01/REACTjs.webp" alt="course-img" />
                        </div>
                    </div>

                    <div className="row course-mini-card-info flex mt-10">
                        <div className="col w-9/12 flex flex-wrap">
                            <CourseInfoCard icon={<FiInfo />} title={'وضعیت رویداد'} info={'تکمیل شده'} />
                            <CourseInfoCard icon={<FaRegCalendarCheck />} title={'تاریخ شروع'} info={'تکمیل شده'} />
                            <CourseInfoCard icon={<FaRegCalendarMinus />} title={'تاریخ پایان'} info={'تکمیل شده'} />
                            <CourseInfoCard icon={<MdOutlineVerifiedUser />} title={'روش پشتیبانی'} info={'آیدی تلگرام'} />
                            <CourseInfoCard icon={<FaBookBookmark />} title={'پیش نیاز'} info={'html css js'} />
                            <CourseInfoCard icon={<IoIosVideocam />} title={'نوع رویداد'} info={'حضوری'} />

                        </div>
                        <div className="col w-4/12">
                            <div className="studentcount-rate-progress bg-white rounded-lg shadow-lg h-[216px]">
                                <div className="student-count-rate w-full mt-3 flex justify-center pt-5">
                                    <div className="student-count flex flex-col rounded-md items-center">
                                        <PiStudent className="text-cyan-600 text-3xl" />
                                        <h5 className="text-gray-600">تعداد دانشجویان</h5>
                                        <p className="text-gray-500">20</p>
                                    </div>
                                    <div className="student-rate mr-20 flex flex-col items-center">
                                        <FaRegStar className="text-yellow-300 text-3xl" />
                                        <h5 className="text-gray-600">رضایت</h5>
                                        <p className="text-gray-500">4.9</p>
                                    </div>
                                </div>
                                <div className="progress flex flex-col pr-5 mt-10">
                                    <h5 className="text-gray-600 mb-5 flex items-center">درصد پیشروی: <p className="number mr-auto ml-5">90%</p></h5>
                                    <div className="progress w-[95%] rounded-lg bg-cyan-100 h-3 " >
                                        <div className="progressbar h-3 w-[90%] rounded-lg bg-cyan-600 mr-auto">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="row course-desc-teacher-info flex mt-40">
                        <div className="col w-8/12 ">
                            <div className="description-container relative bg-white rounded-lg p-7 shadow-lg after:w-1 after:h-10 after:shadow-cyan-600 after:shadow-md after:absolute after:bg-cyan-600 after:-right-1 after:top-3 after:rounded-r-md">
                                <h5 className="title text-gray-600 text-xl flex items-center font-bold"><FiFileText className="ml-3 text-2xl text-cyan-600" />توضیحات :</h5>
                                <p className="description text-justify mt-20 text-base/8 p-2 text-gray-700">
                                    قبل از آموزش ری اکت ReactJS ابتدای کار به شما بگیم که تکنولوژی ری اکت برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق نکردیم. یه غول به تمام معنا و دنیایی بی انتها از پروژه هایی که میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای وب رو دگرگون کرد و دستپخت شرکت فیسبوک هست که اینستاگرام رو هم با اون طراحی کرده!
                                </p>

                                <img src="https://sabzlearn.ir/wp-content/uploads/2024/01/REACTjs.webp" className="w-[95%] object-contain mt-20 m-auto rounded-lg" alt="course-img" />

                                <p className="description text-justify mt-20 text-base/8 p-2 text-gray-700">
                                    <br />کامپوننت محور بودن ری اکت باعث میشه شما با کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو خیلی کوتاهتر از قبل کرده!
                                </p>
                            </div>
                        </div>
                        <div className="col w-4/12 mr-10">
                            <div className="teacher bg-white rounded-lg shadow-lg h-32 flex items-center">
                                <div className="profile mr-5">
                                    <UserProfile pen={false} />
                                </div>
                                <div className="teacher-info mr-5">
                                    <h5 className="teacher-name text-gray-500 text-xl font-bold">رضا دولتی</h5>
                                    <button className="mt-4 text-gray-600 text-sm bg-slate-300 rounded-md transition duration-300 hover:bg-slate-400 px-5 py-2">مشاهده پروفایل</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import { FaMinusSquare, FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlineSmartDisplay } from "react-icons/md";
import Link from "next/link";


export default function EventCard({ subject, image, code ,desc }) {
  return (
    <>
      <div className="article-card w-full h-[460px] bg-white shadow-lg rounded-lg p-5 dirrtl">
        <div className="article-image bg-cyan-600/50 text-white rounded-lg flex justify-center items-center h-[60%]">
            {image ? <img src={image} alt="meshkat-logo" className="w-full h-auto object-contain"/> : <MdOutlineSmartDisplay size={'40px'}/>}
        </div>
        <div className="article-info mt-4 text-right">
          <h5 className="title font-bold text-gray-600 text-lg">
            عنوان رویداد اول
          </h5>
          <p className="description text-justify text-sm my-3 line-clamp-4 text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className="event-btns flex justify-end my-4 text-lg gap-3">
          <Link
            className="group relative"
            href={"/admin/students/infostudent/1"}
          >
            <FaCircleInfo className=" text-cyan-600/50 hover:text-cyan-600/70 trasition duration-300 cursor-pointer" />
            <span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">
              جزئیات
            </span>
          </Link>
          <span className="group relative">
            <FaMinusSquare className=" text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer" />
            <span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">
              غیرفعال کردن
            </span>
          </span>
          {/*user state */}
          <Link
            className="group relative"
            href={"/admin/students/editstudent/1"}
          >
            <FaPen className=" cursor-pointer text-stone-400 hover:text-stone-500 trasition duration-300" />
            <span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">
              ویرایش اطلاعات
            </span>
          </Link>
          {/*آیدی کاربر باید در اینجا قرار داده شود */}
          <span className="group relative">
            <FaTrashAlt className=" text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer" />
            <span className="absolute left-0 bg-blue-50 text-xs whitespace-nowrap rounded-2xl opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100 px-2 py-1 mt-2 text-gray-600 shadow-lg">
              حذف رویداد
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

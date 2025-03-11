import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { PiArticleMediumDuotone } from "react-icons/pi";
import Link from "next/link";

export default function ArticleCard({pen}){
    return(
        <>
            <div className="article-card w-[30%] h-full bg-white shadow-lg rounded-lg p-4 m-4">
                <div className="article-image bg-cyan-600 text-white rounded-lg flex justify-center items-center h-[60%]">
                    <PiArticleMediumDuotone size={'40px'}/>
                </div>
                <div className="article-info mt-4 text-right">
                    <h5 className="title font-bold text-gray-600 text-lg">عنوان مقاله اول</h5>
                    <p className="description text-sm mt-2 line-clamp-4 text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
                <div className="article-btns flex justify-end mt-4 text-lg">
                    {
                        pen ? <><Link href={'/'}><FaCircleInfo className="text-blue-400 hover:text-blue-500 trasition duration-300 cursor-pointer"/></Link><Link href={'/admin/articles/editarticle/1'}><FaPen className="mx-3 cursor-pointer text-stone-400 hover:text-stone-500 trasition duration-300"/></Link><FaTrashAlt href={'/api del'} className="text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer"/></> : <FaTrashAlt href={'/api del'} className="text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer"/>
                    }
                </div>
            </div>
        </>
    )
}
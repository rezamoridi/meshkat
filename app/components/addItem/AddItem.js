import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
export default function AddItem({text , link}){
    return(
        <>
            <div className="add-item-card z-10 sticky top-0 w-full h-20 group flex items-center justify-center bg-slate-300 text-gray-500 hover:text-gray-700 transition-all duration-300 cursor-pointer py-5">
                <div className="rounded-lg bg-white w-[99%] p-3">
                    <Link  href={link} className="flex justify-center items-center">
                        <IoMdAddCircleOutline className="text-2xl sm:text-3xl" />
                        <p className="ml-1 text-sm sm:text-base">{text}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}